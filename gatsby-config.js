module.exports = {
    siteMetadata: {
        title: "Agencia Los Navegantes | Agencia de Marketing y de Ecommerce",
        titleTemplate: "Agencia Los Navegantes | Agencia de Marketing y de Ecommerce",
        description: "Desde el 2014 impulsamos la venta online de cientos de empresas. ¿Quieres ser parte de uno de nuestros casos de éxito? ¡El momento es ahora! Contáctanos aquí.",
        author: "Sebastian Godoy",
        alt:"Agencia Los Navegantes | Agencia de Marketing y de Ecommerce",
        url: "https://www.agencialosnavegantes.cl",
        image: "https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655158048/Los_Navegantes_Imagenes_SEO_home_9e55aa951d.jpg"
    },
    
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sass`,

        
        {
            resolve: `gatsby-source-strapi`,
            options: {
              apiURL: `https://agencia-refressh.herokuapp.com`,
              queryLimit: 1000, // Defaults to 100
              collectionTypes: [`post`,`instagram-contenidos`,`categoria`], 
              singleTypes: [`home`,`mkt`,`tripulacion`,`analitica`],
            },
          },
 
       
       
    ]
}