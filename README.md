# Next.js App Example — A Blog

Esta é uma aplicação básica, proposta pelo tutorial do [Next.js](https://nextjs.org/learn) de como usa-lo para produção de sites.

Se este repoitório ainda estiver conectado no vercel, você pode ver ele funcionado [aqui](https://nextjs-blog-mocha-ten.vercel.app/).

## Testar por si mesmo

Se em vez de olhar o código neste repositório e ver sua [versão funcionando na Vercel](https://nextjs-blog-mocha-ten.vercel.app/), você pode preferir baixar este repositório para sua maquina (que deve ter [Node.js](https://nodejs.org/en/) instalado) e rodar os seguintes comandos:

```shell
npm install
npm run build
npm run start
```

## Considerações

### O Framework

Next parece a alternativa mais atual para o que eu estava estudando antes. A muito tempo comecei com o MEAN Stack, ainda no primeiro Angular. Agora quando vou pesquisar por MEAN ou MERN não demoro para encontrar referencias ao Next. O paradigma é um pouco diferente do que eu estava esperando, pensar apenas no front-end como uma coisa isolada e usar uma API para se comunicar com um *headless CMS* (termo que aprendi agora) independente. Parece ser a nova tendencia. Achei legal, não sei julgar sua usabilidade futura ainda.

A unica coisa chata foi que em ambiente de desenvolvimento todas as pagias são geradas dinamicamente por requisição, que neste exemplo ainda precisa pegar arquivos .md do sistema de arquivos para montar as paginas dos posts. Isso é bem lento num primeiro momento. Claro, quando se "*compila*" tudo para um código reduzido e com as páginas estáticas de fato estáticas, o app roda bem rápido no navegador como deveria.

### CSS

Eu adorei a ideia e o uso de CSS Modules e classnames (o package). Nunca fui um profundo conhecedor de CSS e tenho zero noção de design ainda, mas a ideia de conseguir modularizar os aspectos visuais e definir o que eu quero compartilhar e o que eu não quero da mesma forma que faço com váriaveis no JS me deixou bastante animado.

### Regular Expressions

Yep, preciso aprender isso. Parece legal, mas é um pouco confuso e eu me perco muito rápido na hora de tentar entender o que uma regex faz no código.

### Typescript

Curti que a configuração para usar TS é bem simples e o Next faz isso pra você. Como estou voltando a aprender, isso me ajudou um pouco. Converter os arquivos do tutorial para .ts e .tsx foi fácil, MAS não é válido como exemplo real de prototipação com ts e next. Vou ter que fazer algum projetinho do zero já em typescript pra entender de verdade.

Fora que tenho que configurar minha IDE para apontar os erros de digitação e o escambal que não estão funcionando cem por cento das vezes em TypeScript.

## Observações

Os seguintes arquivos foram simplesmente copiados do tutorial, ou por que eu estava sem paciencia ou por que eu estava sem tempo:

* ./components/layout.module.css
* ./posts/pre-rendering.md
* ./posts/ssg-ssr.md
* ./styles/global.css
* ./styles/utils.module.css
