module.exports = {
    siteMetadata: {
        title: "Agencia de Marketing Digital, eCommerce y Performance | Agencia Los Navegantes",
        titleTemplate: "Agencia de Marketing Digital, eCommerce y Performance | Agencia Los Navegantes",
        description: "Aumentamos tus Ventas Online. Configuramos tu embudo de ventas en menos de 30 días. Maximizamos tu facturación en menos de 60 días. Escalamos tus resultados en menos de un semestre. Convertimos este año en tu mejor año. Somos una Agencia de Marketing Digital en la que hoy confían +60 marcas de eCommerce con facturaciones anuales […]",
        author: "Sebastian Godoy",
        url: "https://agencia-web-final.vercel.app",
        image: "https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1654955862/Agencia_Seo_Facebook_e5ba09a788.jpg"
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
          {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: 'React go',
            short_name: 'Reactgo',
            start_url: '/',
            background_color: '#f7f0eb',
            theme_color: '#a2466c',
            display: 'standalone',
            icon: 'src/images/logo.png',
          },
        },  
       
 
       
       
    ]
}