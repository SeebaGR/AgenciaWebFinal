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
        }
         
    ]
}