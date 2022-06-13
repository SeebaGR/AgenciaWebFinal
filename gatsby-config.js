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
        {
          resolve: "gatsby-plugin-google-tagmanager",
          options: {
            id: "GTM-NR96Z4S",
      
            // Include GTM in development.
            //
            // Defaults to false meaning GTM will only be loaded in production.
            includeInDevelopment: false,
      
            // datalayer to be set before GTM is loaded
            // should be an object or a function that is executed in the browser
            //
            // Defaults to null
            defaultDataLayer: { platform: "gatsby" },
      
            // Specify optional GTM environment details.
      
      
            // Name of the event that is triggered
            // on every Gatsby route change.
            //
            // Defaults to gatsby-route-change
            routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
            // Defaults to false
            enableWebVitalsTracking: true,
            // Defaults to https://www.googletagmanager.com
            selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
          },
        },
        {
          resolve: `gatsby-plugin-google-gtag`,
          options: {
            // You can add multiple tracking ids and a pageview event will be fired for all of them.
            trackingIds: [
              "UA-202228681-1", // Google Analytics / GA
            ],

            gtagConfig: {
              optimize_id: "OPT_CONTAINER_ID",
              anonymize_ip: true,
              cookie_expires: 0,
            },
 
            pluginConfig: {
              // Puts tracking script in the head instead of the body
              head: false,
              // Setting this parameter is also optional
              respectDNT: true,
              // Avoids sending pageview hits from custom paths
              exclude: ["/preview/**", "/do-not-track/me/too/"],
              // Defaults to https://www.googletagmanager.com
              origin: "YOUR_SELF_HOSTED_ORIGIN",
            },
          },
        },
 
       
       
    ]
}