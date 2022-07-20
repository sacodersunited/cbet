// const fetch = require("node-fetch")

// const apiRequest = {
//   GETCBETCLASSSES: `https://cbetclasses.azurewebsites.net/api/GetCbetClasses?code=`,
//   GETCBETCONTENT: `https://cbetdata.azurewebsites.net/api/GetCbetContent?code=`,
// }

// const apiRequestType = {
//   cbetclasses: "classes",
//   cbetcontent: "content",
// }

// async function getCbetData(getRequestType, cbetcode) {
//   const options = {
//     method: "GET",
//     credentials: "include",
//   }

//   let getRequest = ""
//   switch (getRequestType) {
//     case apiRequestType.cbetclasses:
//       getRequest = apiRequest.GETCBETCLASSSES + cbetcode
//       break
//     case apiRequestType.cbetcontent:
//       getRequest = apiRequest.GETCBETCONTENT + cbetcode
//       break
//     default:
//       getRequest = ""
//   }

//   const apiData = await (await fetch(getRequest, options)).json()
//   return apiData
// }

// exports.sourceNodes = async (
//   { actions, createNodeId, createContentDigest },
//   configOptions
// ) => {
//   const { createNode } = actions

//   // Gatsby adds a configOption that's not needed for this plugin, delete it
//   delete configOptions.plugins

//   const processCbetClass = cbetClass => {
//     const nodeId = createNodeId(`cbet-class-${cbetClass.Id}`)
//     const nodeContent = JSON.stringify(cbetClass)
//     const nodeData = Object.assign({}, cbetClass, {
//       id: nodeId,
//       parent: null,
//       children: [],
//       internal: {
//         type: `CbetClass`,
//         content: nodeContent,
//         contentDigest: createContentDigest(cbetClass),
//       },
//     })
//     return nodeData
//   }

//   const processCbetContent = cbetContent => {
//     const nodeId = createNodeId(`cbet-content-${cbetContent.Id}`)
//     const nodeContent = JSON.stringify(cbetContent)
//     const nodeData = Object.assign({}, cbetContent, {
//       id: nodeId,
//       parent: null,
//       children: [],
//       internal: {
//         type: `cbetContent`,
//         content: nodeContent,
//         contentDigest: createContentDigest(cbetContent),
//       },
//     })
//     return nodeData
//   }

//   const classesData = await getCbetData(
//     apiRequestType.cbetclasses,
//     configOptions.code
//   )
//   const contentData = await getCbetData(
//     apiRequestType.cbetcontent,
//     configOptions.appid
//   )

//   classesData.forEach(item => {
//     const nodeData = processCbetClass(item)

//     createNode(nodeData)
//   })

//   contentData.forEach(item => {
//     const nodeData = processCbetContent(item)

//     createNode(nodeData)
//   })

//   return
// }
