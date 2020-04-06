const fetch = require("node-fetch")
// const queryString = require("query-string")

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  const processCbetClass = cbetClass => {
    const nodeId = createNodeId(`cbet-class-${cbetClass.Id}`)
    const nodeContent = JSON.stringify(cbetClass)
    const nodeData = Object.assign({}, cbetClass, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `CbetClass`,
        content: nodeContent,
        contentDigest: createContentDigest(cbetClass),
      },
    })
    return nodeData
  }

  const apiUrl = `https://cbetclasses.azurewebsites.net/api/GetCbetClasses?code=${configOptions.code}`

  // Gatsby expects sourceNodes to return a promise
  return (
    // Fetch a response from the apiUrl
    fetch(apiUrl)
      // Parse the response as JSON
      .then(response => response.json())
      // Process the JSON data into a node
      .then(data => {
        data.forEach(classCbet => {
          const nodeData = processCbetClass(classCbet)
          createNode(nodeData)
        })
        return
      })
  )
}
