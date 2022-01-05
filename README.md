<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  College of Biomedical Equipment Technology
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/7cc04f87-32be-47ce-95a4-fe6722fc4fa6/deploy-status)](https://app.netlify.com/sites/epic-perlman-3ad72c/deploys)

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-default-starter/
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## How to run in Docker container in Windows 10

1. Open terminal to root of project.

1. Build the container and run it - `docker-compose up --build`.

1. Then open browser and code.

1. When done using the container run the command `CTRL-C` twice.

1. If you make any dependency changes like `npm install <packagename>` to the project then make sure and run `docker-compose up --build` again to rebuild the container.

\*\* Check your images periodically and remove any unused images created for this container.

## 🧐 How to run testing in Cypress/Applitools.

1. Add Environment variable named APPLITOOLS_API_KEY and have the key handy to put in the env.development file on the root directory.

1. Use the npm script `npm run cy:open`. This open Cypress.

1. Select the test to run and then the cypress window will open and you will see the tests.

1. Go to Applitools website to see the test results.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->
