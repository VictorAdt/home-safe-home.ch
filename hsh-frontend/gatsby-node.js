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

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type StrapiTitrePageDAccueil implements Node{
      banner: File
      consulting: String
      id: String
      introduction: String
      service: String
      strapiId: Int
      titre: String
      workshop: String
    }
    type StrapiAtelier implements Node{
      strapiId: Int
      id: String
      titre: String
      type: String
      description: String
      description_courte: String
    }
    type StrapiPagePhilosophie implements Node{
      strapiId: Int
      id: String
      information: String
      description: String
      titre: String
      section: [section]
    }
    type StrapiPageConsulting implements Node{
      strapiId: Int
      id: String
      information: String
      description: String
      titre: String
      section: [section]
    }
    type section{
      image: File
      contenu: String
      titre: String
    }
    type StrapiPageEquipe implements Node{
      titre: String
      collaborateur: [collaborateur]
    }
    type collaborateur{
      photo: File
      contenu: String
      titre: String
      nom: String
      prenom: String
      role: String
      id: String
    }
    type StrapiTestimonial implements Node{
      texte: String
      nom: String
    }
    type StrapiRuban implements Node{
      texte: String
      strapiId: Int
      id: String
    }
  `
  createTypes(typeDefs)
}

