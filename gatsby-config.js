module.exports = {
    siteMetadata: {
        title: 'Agencia Los Navegantes',
        description: 'Aumenta tus ventas Online',
        author: 'Sebastian Godoy',
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      `gatsby-plugin-sass`,

        {
            resolve: `gatsby-source-strapi`,
            options: {
              apiURL: `https://agenciarefresh2.herokuapp.com`,
              queryLimit: 1000, // Defaults to 100
              collectionTypes: [`post`,`instagram-contenidos`], 
              singleTypes: [`home`,`mkt`,`tripulacion`,`analitica`],
            },
          }
         
    ]
}