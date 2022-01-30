/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React from "react"
 import favicon from "../images/logo.png";
 import PropTypes from "prop-types"
 import { Helmet } from "react-helmet"
 import { useStaticQuery, graphql } from "gatsby"
 import imageDeafault from "../images/agencia-seo.jpg"
 function Seo({ description, lang, meta, title, image }) {
   const { site } = useStaticQuery(
     graphql`
     query {
      site {
          siteMetadata {
              title
              description
              author
              url
          }
      }
  }
     `
   )
 
   const metaDescription = description || site.siteMetadata.description
   const defaultTitle = site.siteMetadata.title
 
   return (
     <Helmet
     link={[
      {
          rel: 'shortcut icon',
          type: 'image/png',
          href: `${favicon}`,
       },
  ]}
       htmlAttributes={{
         lang,
       }}
       title={title}
       titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
       meta={[
        
         {
           property: `og:title`,
           content: title || site.siteMetadata.title,
         },
         {
           property: `og:description`,
           content: description || site.siteMetadata.description,
         },
         {
           property: `og:type`,
           content: `website`,
         },
         {
            property: `og:image`,
            content: image,
          },
         {
           name: `twitter:card`,
           content: `summary`,
         },
         {
           name: `twitter:creator`,
           content: site.siteMetadata?.author || ``,
         },
         {
           name: `twitter:title`,
           content: title,
         },
         {
           name: `twitter:description`,
           content: metaDescription,
         },
       ].concat(meta)}
     />
   )
 }
 
 Seo.defaultProps = {
   lang: `en`,
   meta: [],
   description: ``,
 }
 
 Seo.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
 }
 
 export default Seo
 