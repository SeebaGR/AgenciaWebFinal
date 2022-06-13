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
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // The property ID; the tracking code won't be generated without it
      trackingId: "UA-202228681-1",
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: false,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      exclude: ["/preview/**", "/do-not-track/me/too/"],
      // Delays sending pageview hits on route update (in milliseconds)
      pageTransitionDelay: 0,
      // Enables Google Optimize using your container Id
      optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
      // Enables Google Optimize Experiment ID
      experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
      // Set Variation ID. 0 for original 1,2,3....
      variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
      // Defers execution of google analytics script after page load
      defer: false,
      // Any additional optional fields
      sampleRate: 5,
      siteSpeedSampleRate: 10,
      cookieDomain: "example.com",
      // defaults to false
      enableWebVitalsTracking: true,
    },
  },
       
       
    ]
}