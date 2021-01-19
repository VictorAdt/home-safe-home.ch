exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
        {
          ateliers: allStrapiAtelier {
              edges{
                  node{
                    strapiId
                    id
                  }
              }
          }
        }
      `
  );

  if (result.errors) {
    throw result.errors;
  }

  console.log(result, 'result');
  // Create blog articles pages.
  const ateliers = result.data.ateliers.edges;

  const AtelierTemplate = require.resolve("./src/components/atelier/atelier-item.js");

  ateliers.forEach((atelier, index) => {
    createPage({
      path: `/atelier/${atelier.node.id}`,
      component: AtelierTemplate,
      context: {
        slug: atelier.node.id,
      },
    });
  });
};


exports.onCreateNode = async ({
  node,
  actions,
  store,
  cache,
  createNodeId,
}) => {
  const { createNode } = actions
  
let multipleImages = node.galerie

  if (node.internal.type === "AllStrapiAtelier") {
    if (multipleImages.length > 0) {
      multipleImages.forEach(el => console.log(el))
      const images = await Promise.all(
        multipleImages.map(el =>
          createRemoteFileNode({
            url: `http://45.66.223.134/${el.url}`,
            parentNodeId: node.id,
            store,
            cache,
            createNode,
            createNodeId,
          })
        )
      )
   
     multipleImages.forEach((image, i) => {
        image.localFile___NODE = images[i].id
      })
    }
  }
}

