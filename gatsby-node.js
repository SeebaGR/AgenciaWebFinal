/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // Fetch your items (blog posts, categories, etc).

  
  const posts = await graphql(`
  query MyQuery  {
    allStrapiPost (
     
      sort: { fields: id_post, order: ASC }) {
      nodes {
        Categoria
        contenido_1
        createdAt
        id
        image_banner {
          url
        }
        miniatura {
          url
        }
        seo_descripcion
        seo_title
        titulo_post
        url
      }
    }
  }

  `)


  //console.log(posts.data.allStrapiPost.nodes);

 // Create your paginated pages
  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts.data.allStrapiPost.nodes, // An array of objects
    itemsPerPage: 2, // How many items you want per page
    pathPrefix: "/blog", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/blog.js`), // Just like `createPage()`
  })

  posts.data.allStrapiPost.nodes.forEach(post => {
    createPage({
      path: `/${post.url}`,

      component: path.resolve(`src/templates/post.js`),
      context: {
        data: post,
      },
    })
  }) 


////////////////////////////// Categoria MKT /////////////////////////////////////

paginate({
  createPage, // The Gatsby `createPage` function
  items: posts.data.allStrapiPost.nodes, // An array of objects
  itemsPerPage: 2, // How many items you want per page
  pathPrefix: "/categoriaMkt", // Creates pages like `/blog`, `/blog/2`, etc
  component: path.resolve(`src/templates/categoriaMkt.js`), // Just like `createPage()`
})

/////////////////////////////Analitica////////////////////////////////////////7

paginate({
  createPage, // The Gatsby `createPage` function
  items: posts.data.allStrapiPost.nodes, // An array of objects
  itemsPerPage: 2, // How many items you want per page
  pathPrefix: "/categoriaAnalitica", // Creates pages like `/blog`, `/blog/2`, etc
  component: path.resolve(`src/templates/categoriaAnalitica.js`), // Just like `createPage()`
})

/////////////////////////////Diseño////////////////////////////////////////7

paginate({
  createPage, // The Gatsby `createPage` function
  items: posts.data.allStrapiPost.nodes, // An array of objects
  itemsPerPage: 2, // How many items you want per page
  pathPrefix: "/categoriaDiseño", // Creates pages like `/blog`, `/blog/2`, etc
  component: path.resolve(`src/templates/categoriaDiseño.js`), // Just like `createPage()`
})


/////////////////////////////Performance////////////////////////////////////////

paginate({
  createPage, // The Gatsby `createPage` function
  items: posts.data.allStrapiPost.nodes, // An array of objects
  itemsPerPage: 2, // How many items you want per page
  pathPrefix: "/categoriaPerformance", // Creates pages like `/blog`, `/blog/2`, etc
  component: path.resolve(`src/templates/categoriaPerformance.js`), // Just like `createPage()`
})


/////////////////////////////Ecommerce////////////////////////////////////////


paginate({
  createPage, // The Gatsby `createPage` function
  items: posts.data.allStrapiPost.nodes, // An array of objects
  itemsPerPage: 2, // How many items you want per page
  pathPrefix: "/categoriaEcommerce", // Creates pages like `/blog`, `/blog/2`, etc
  component: path.resolve(`src/templates/categoriaEcommerce.js`), // Just like `createPage()`
})

/////////////////////////////Desarrollo////////////////////////////////////////


paginate({
  createPage, // The Gatsby `createPage` function
  items: posts.data.allStrapiPost.nodes, // An array of objects
  itemsPerPage: 2, // How many items you want per page
  pathPrefix: "/categoriaDesarrollo", // Creates pages like `/blog`, `/blog/2`, etc
  component: path.resolve(`src/templates/categoriaDesarrollo.js`), // Just like `createPage()`
})






} 