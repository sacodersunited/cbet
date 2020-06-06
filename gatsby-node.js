// ./gatsby-node.js
const createPages = ({ graphql, actions: { createPage } }, type) =>
  new Promise((resolve, reject) => {
    if (type === "CbetContent") {
      resolve(
        graphql(`
          query allCbetContent {
            allCbetContent {
              edges {
                node {
                  Title
                  Id
                  Category
                }
              }
            }
          }
        `).then((result) => {
          if (result.errors) {
            reject(result.errors)
            return
          }

          const cbetContent = result.data["allCbetContent"].edges

          // grab all the portletID and template you want to use
          // conditionally render templates for ea template ie Borden
          // keep aside in the normal Layout

          // Create each page with custom slug
          cbetContent.forEach(({ node }) => {
            const slugPath = `/posts/${node.Title.toLowerCase()
              .replace(/ /g, "-")
              .replace(/[^\w-]+/g, "")}`

            if (node.Category === 3) {
              createPage({
                path: slugPath,
                component: require.resolve("./src/template/blog.js"),
                context: {
                  id: node.Id,
                },
              })
            }
          })
        })
      )
    } else {
      // do nothing
    }
  })

exports.createPages = async (props) => {
  await createPages(props, "CbetContent")
}

// above code unchanged
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /TelemetryManager/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
