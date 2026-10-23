# Portfolio · Isabela Fagundes

Portfolio pessoal de **Isabela Fagundes**, desenvolvedora Full-stack Pleno. Trabalho principalmente com Flutter e Dart no front-end e com Go e Java (Quarkus) no back-end.

O site apresenta minha trajetória, minha stack e os projetos em que trabalhei. Cada projeto tem uma página própria com contexto, decisões técnicas e telas reais do app.

> 🇬🇧 *Personal portfolio of Isabela Fagundes, mid-level Full-stack Developer (Flutter, Go, Java/Quarkus). The site is fully bilingual (PT/EN) and each project has its own case study page with real app screens.*

## Projetos em destaque

| Projeto | O que é | Stack |
| --- | --- | --- |
| **Atendimento by Hipcom** | App multiplataforma de atendimento para restaurantes, do pedido à produção, pagamento e nota fiscal | Flutter, Dart, SiTef, NF-e · NFC-e |
| **Kynori** | App de acompanhamento de treinos, feito com desenvolvimento assistido por IA | Claude Code, Codex, Capacitor |
| **LeiturAmiga** | Plataforma de troca, empréstimo e doação de livros. TCC na FATEC, aprovado com nota máxima | Flutter, Java, Quarkus, MySQL |

## O que tem no site

- **Bilíngue:** todo o conteúdo existe em português e inglês, com troca de idioma na navegação.
- **Páginas de projeto:** contexto, atuação, funcionalidades, decisões técnicas e galeria de telas em molduras de celular e navegador.
- **Stack explicada:** cada tecnologia mostra uma descrição curta ao passar o mouse ou focar pelo teclado.
- **Animações ligadas ao scroll:** leque dos celulares nos cards de projeto, parallax no "Sobre" e o nome do hero se abrindo. Tudo respeita a preferência de movimento reduzido do sistema.
- **Imagens otimizadas:** prints em WebP com versões em vários tamanhos (`srcset`) e carregamento sob demanda.

## Como o site foi feito

O site foi construído com **desenvolvimento assistido por IA** (Claude Code), usando Vite, React e TypeScript, sem bibliotecas de UI ou de animação.

```
src/
├── components/   seções da home, página de projeto e molduras de mockup
├── hooks/        revelação ao rolar, brilho no cursor e animações de scroll
├── i18n/         textos em PT/EN (content.ts) e dados dos projetos (projects.ts)
├── router.tsx    roteamento simples entre a home e as páginas de projeto
└── styles.css    tokens de cor, tipografia e estilos de todas as seções
public/
├── me/           foto recortada do hero
└── projects/     telas de cada projeto em WebP
```

## Rodando localmente

Requer Node.js 20 ou mais recente.

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Editando o conteúdo

- **Textos da home** (sobre, experiência, stack, contato): `src/i18n/content.ts`
- **Projetos** (textos, links e telas): `src/i18n/projects.ts`
- **Imagens dos projetos:** `public/projects/<projeto>/`. As versões menores seguem o padrão `nome-360.webp`, `nome-540.webp` e ficam listadas em `src/i18n/imageSizes.ts`.

Todo texto novo precisa existir nas duas línguas.

## Deploy

Pronto para a Vercel. O `vercel.json` redireciona as rotas das páginas de projeto para o `index.html`.

## Contato

- GitHub: [@isabelafagundes](https://github.com/isabelafagundes)
- E-mail e LinkedIn: na seção de contato do site
