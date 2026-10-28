// SVG coordinates for y = sin(2πft), over two seconds.
export function wavePoints(frequency: number): string {
  return Array.from({ length: 241 }, (_, index) => {
    const time = (index / 240) * 2;
    const x = 36 + (index / 240) * 528;
    const y = 110 - Math.sin(2 * Math.PI * frequency * time) * 72;
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(' ');
}
