import assert from 'node:assert/strict';
import { test } from 'node:test';
import { getPreferredLocale, localizedPath, unlocalizedPath } from '../src/i18n.ts';

test('Portuguese browser languages use Brazilian Portuguese', () => {
  for (const language of ['pt-BR', 'pt-br', 'pt', 'pt-PT', 'PT-BR']) {
    assert.equal(getPreferredLocale([language]), 'pt-br');
  }
});

test('browser preference order wins over secondary languages', () => {
  assert.equal(getPreferredLocale(['en-US', 'pt-BR']), 'en');
  assert.equal(getPreferredLocale(['pt-BR', 'en-US']), 'pt-br');
  assert.equal(getPreferredLocale(['fr-FR', 'pt-BR', 'en-US']), 'pt-br');
});

test('unsupported or absent browser languages fall back to English', () => {
  assert.equal(getPreferredLocale(['de-DE']), 'en');
  assert.equal(getPreferredLocale([]), 'en');
});

test('English URLs remain unchanged and Portuguese equivalents keep the same slug', () => {
  assert.equal(localizedPath('en', '', '/'), '/');
  assert.equal(localizedPath('pt-br', '', '/'), '/pt-br/');
  assert.equal(localizedPath('en', '/posts/example/', '/'), '/posts/example/');
  assert.equal(localizedPath('pt-br', '/posts/example/', '/'), '/pt-br/posts/example/');
});

test('localized URLs respect a deployment base path', () => {
  assert.equal(localizedPath('en', 'about', '/blog/'), '/blog/about/');
  assert.equal(localizedPath('pt-br', 'posts/nested/example', '/blog'), '/blog/pt-br/posts/nested/example/');
  assert.equal(unlocalizedPath('/blog/pt-br/posts/nested/example/', '/blog/'), 'posts/nested/example');
  assert.equal(unlocalizedPath('/blog/posts/nested/example/', '/blog/'), 'posts/nested/example');
});

test('switching languages on the homepage does not duplicate prefixes', () => {
  assert.equal(unlocalizedPath('/pt-br/', '/'), '');
  assert.equal(localizedPath('en', unlocalizedPath('/pt-br/', '/'), '/'), '/');
  assert.equal(localizedPath('pt-br', unlocalizedPath('/about/', '/'), '/'), '/pt-br/about/');
});
