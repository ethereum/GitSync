[![Netlify Status](https://api.netlify.com/api/v1/badges/5d7b96c5-01cc-4feb-867f-109a2e2c9277/deploy-status)](https://app.netlify.com/sites/cryptography-research/deploys)

# GitSync Website

## Attribution

This website is based on the [website infrastructure](https://github.com/ethereum/cryptography-research-website) used for the [Ethereum Foundation Cryptography Research project](https://crypto.ethereum.org).


## Technology Choices

The main stack used in the project includes:
- [TypeScript](https://www.typescriptlang.org/) programming language.
- [Node.js](https://nodejs.org/en/) w/ [NVM](https://github.com/nvm-sh/nvm) node version manager.
- [Yarn](https://yarnpkg.com) package manager.
- [Next.js](https://nextjs.org/) web development framework.
- [ChakraUI](https://chakra-ui.com/) as component library.
- [KaTeX](https://katex.org/) to render LaTeX math syntax.

## Installation

```
nvm install v18.11
npm install -g yarn

cd nextjs-website
yarn install
```

## Local development

The project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), with a custom scaffolding.

### Getting Started

First, run the development server:

```bash

nvm use v18.11

npm run dev
# or
yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Project Structure

The following list describes the main elements of the project structure:

- `public`: contains static assets like fonts and images.
- `src`: contains the source code.
  - `components`: React components.
    - components with state are directly located inside `/components`.
    - `layout`: components used to contain and apply different layouts to different pages.
    - `UI`: stateless (functional) components.
  - `pages`: includes components that renders to pages and [NextJS API Routes](https://nextjs.org/docs/api-routes/introduction).
  - `posts`: markdown blog posts.
  - `styles`: css stylesheets.
    - `global.css`: global stylesheet.
  - `theme`: contains the [Chakra UI custom theme](https://chakra-ui.com/docs/styled-system/theming/customize-theme), organized in `foundations` and `components` for better scaling.
  - `utils`: utilitary stuff.
  - `constants.ts`: this is the _global_ constants file, containg URLs and lists of elements we use across the site.
  - `types.ts`: contains the custom defined TypeScript types and interfaces.

## Markdown & LaTex support on blog posts

### Markdown

Support for [GitHub Flavored Markdown](https://github.github.com/gfm/), which is a superset of CommonMark and adds supports to other features like tables.

### LaTeX

The site uses [KaTeX](https://katex.org) to render LaTeX/math and inside `/research` publications abstracts. LaTeX-rendering libs are not 100% compatible with LaTex yet, so please check the [support table](https://katex.org/docs/support_table.html) if you are having issues with some expression.

