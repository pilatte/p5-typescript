# p5-typescript

## Description

P5-Typescript is a sample project for [p5.js](https://p5js.org/) with:

-   [TypeScript](https://www.typescriptlang.org/)
-   [webpack](https://webpack.js.org/)
-   [yarn](https://yarnpkg.com/en/docs/install) (or [npm](https://www.npmjs.com/))
-   [GitHub Actions](https://github.com/features/actions)
-   [GitHub Pages](https://pages.github.com/)

### TypeScript

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. The main advantage is error detection, and autocompletion.

### Webpack

Webpack allows you to import other files and NPM packages and package them into a single file. That way you don't have to worry about CDNs, linking,...

### Yarn

Yarn uses the NPM registry to download and install packages. Installing is easy, just do `yarn add lodash`. Thanks to webpack, you can link the libraries you need easily `import lodash as _ from lodash` or `import { has } from lodash`.

### GitHub Actions and GitHub Pages

Github Actions and Pages are optional, they allow you to share a live version of your sketch with the world. Every time you push a new version, your website is updated.

To setup Github Actions and Pages, you need to push your repository to Github and enable Github Actions and Pages. Before doing that, it's a good idea to run to start fresh.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/belgiancoder/p5-typescript.git <REPOSITORY_NAME>
    cd <REPOSITORY_NAME>
    ```

1. **OPTIONAL:** Upload your repository:

    1. Create a new repository on Github.

    1. Upload your repository to Github. Replace `<REPOSITORY_NAME>` and `<USERNAME>`.

        ```bash
        rm -rf .git && \
        git init && \
        git add . && \
        git commit -m "initial commit" && \
        git remote add origin https://github.com/<USERNAME>/<REPOSITORY_NAME>.git && \
        git push -u origin master
        ```

    1. **OPTIONAL:** Enable Github Actions and Pages in the settings.

1. Install the dependencies:

    ```bash
    yarn
    ```

1. Start the server:

    ```bash
    yarn start
    ```

## Workflow

Open a terminal and run `yarn start`. A web browser will open.

Edit the files in the `src` folder. P5 runs in instance mode, so you have to put `p.background(0)` instead of `background(0)`.

When you save, the browser will automatically update.

If you commit and push, the website will automatically update.
