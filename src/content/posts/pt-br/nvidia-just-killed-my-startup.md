---
title: A Nvidia acabou de matar minha startup
description: O que deu errado e o que dá pra aprender com isso.
date: 2026-10-27
---

Faz pouco mais de um ano que comecei a desenhar, junto com meu sócio na [SovCo](https://sovco.io), um data center pra IA dentro de um contêiner. A ideia era transformar isso num produto que desse pra fabricar em série e entregar.

Eu queria resolver três problemas: a infraestrutura de IA é centralizada demais, falta privacidade e soberania pra quem usa, e construir sua própria infraestrutura demora uma eternidade.

Um data center produzido em fábrica, dentro de uma caixa, era minha melhor aposta pra resolver os três. Se mais pessoas e empresas pudessem comprar essa infraestrutura em uma escala menor, ela ficaria mais descentralizada. Com controle de todo o hardware e software, você teria o máximo de privacidade e soberania possível. E o tempo pra ter tudo funcionando cairia de anos de obra pro prazo de entrega de um produto.

Meses antes de ter o nome SovCo e de começar esse projeto, a gente já estudava outros jeitos de aproveitar energia excedente de operações de mineração, termoelétricas e outras usinas. Juntando isso com a questão da soberania, decidimos que o primeiro produto teria uma opção off-grid: painéis solares e internet via satélite, sem depender da rede elétrica nem de um provedor local de internet.

Meu sócio é engenheiro eletricista e tem muita experiência com alta tensão. Eu já tinha trabalhado construindo data centers e sistemas distribuídos. Parecia uma boa combinação pra encarar esse problema.

A gente tinha uma boa noção do que precisava, mas ainda passamos algumas semanas estudando refrigeração, como lidar com o calor e as particularidades da arquitetura pra IA, tanto no hardware quanto no software.

Depois foram meses desenhando o produto. Semanas só pra entender a economía por trás dos chips e dos data centers, tanto pra treinar modelos de IA quanto pra rodar esses modelos depois, na inferência.

Fizemos simulações físicas completas, incluindo os sistemas elétricos e térmicos. Desenhamos tudo em CAD e montamos uma lista de cada pecinha necessária pra construir aquilo. Conseguimos várias cotações pra lista inteira, em diferentes países, pensando de onde comprar, onde vender, nas sanções dos EUA e por aí vai.

Com isso, já tínhamos mapeado boa parte do que seria necessário pra tirar o produto do papel: custos, fornecedores, processos, pessoas, estrutura, operação, tudo isso. Também planejamos a fábrica pra produzir na escala que a gente queria e definimos a estrutura da empresa e o planejamento tributário pra ter um modelo de negócio sólido.

Encontramos clientes muito interessados. Passamos bastante tempo conversando com alguns fundos de investimento e com esses possíveis clientes, tentando decidir como financiar tudo: captar com um fundo ou fazer algum tipo de parceria com os clientes.

Nesse meio-tempo, chegamos a fazer uma proposta sob medida pra construir um data center relativamente grande, alimentado por turbinas a gás, com uma versão mais parruda do nosso produto. Só esse projeto já seria mais do que suficiente pra dar o pontapé inicial na empresa e bancar a estrutura pra produzir em escala.

Pelas conversas que a gente estava tendo, a demanda parecia tão óbvia que decidimos focar em conseguir dinheiro pra industralização, e não pra validar o produto. Na nossa cabeça, seria uma corrida pra ver quem conseguia aumentar a produção mais rápido e oferecer o menor prazo de entrega. Quanto antes os chips estivessem rodando, antes começariam a gerar receita. A demanda era muito maior que a oferta. A gente chegou a incluir no modelo de negócio a possibilidade de alugar as unidades em estoque, caso conseguisse produzir mais rápido do que vender.

Na semana passada, tudo mudou. A Nvidia anunciou em Berlim a plataforma DSX, um conjunto de orientações pra construir fábricas de IA. Parte dela é o DSX Pod, um data center pra IA dentro de um contêiner.

Foi um soco no estômago.

Olhando agora, parece bem óbvio que a Nvidia faria isso. Depois de resolver o fornecimento dos chips, ela olharia pro próximo gargalo pra vender mais: o tempo entre enviar o chip e colocar ele pra funcionar, gerando receita. A primeira solução pra isso é o contêiner. Ou modularização, se preferir.

A gente tinha alguns diferenciais: a opção off-grid e o foco em soberania, com controle total, governança e rastreabilidade do data center inteiro. E fabricar no Brasil permitiria comprar dos EUA e da China, e vender pros dois também. Basicamente, pro mundo inteiro.

Eu ainda acredito que, no futuro, vai ter muito mais gente projetando hardware pra competir com a Nvidia. Uma empresa neutra, num país neutro, poderia montar o melhor produto com o melhor hardware que encontrasse no mundo.

Só que nada disso parece um diferencial ou uma inovação grande o suficiente pra tirar a gente do alcance dessa concorrência.

Esse é meu balanço do que aconteceu e do que a gente errou. Tem muita coisa pra aprender com essa experiência, e provavelmente vou continuar descobrindo mais. Por enquanto, as principais são:

1. **A gente não inovou o suficiente pra escapar da concorrência.** A ideia era boa e tinha algumas inovações, mas nada tão fora do radar que deixasse a gente longe o bastante da concorrência. Também demoramos demais pra descobrir que partes menores da construção de um data center já estavam sendo modularizadas. Isso poderia ter feito a gente perceber o problema antes.
2. **A gente é lento demais.** Gastamos tempo demais com todo tipo de detalhe, dos pequenos aos grandes. Também acho que tratar cada conversa com um fundo de forma tão individual, falando com poucos por vez, foi um erro. Hoje me parece que faz mais sentido ter um processo pra falar com vários ao mesmo tempo, como um funil de vendas. E passamos tempo demais simulando e acertando a versão off-grid, sendo que isso era só uma opção, não o produto principal.

> "Sempre tentei. Sempre falhei. Não importa. Tente de novo. Falhe de novo. Falhe melhor." Samuel Beckett
