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
    <Helmet title={title} titleTemplate={defaultTitle}>
    <meta name="description" content={description} />
    <meta name="image" content={image} />
    {defaultTitle && <meta property="og:url" content={site.siteMetadata.url} />}

    {title && <meta property="og:title" content={title} />}
    {description && (
      <meta property="og:description" content={description} />
    )}
    {image && <meta property="og:image" content={image} />}
    <meta name="twitter:card" content="summary_large_image" />
   
    {title && <meta name="twitter:title" content={title} />}
    {description && (
      <meta name="twitter:description" content={description} />
    )}
    {image && <meta name="twitter:image" content={image} />}
  </Helmet>
   )
 }
 
 Seo.defaultProps = {
   lang: `en`,
   meta: [],
   description: ``,
 }
 
 Seo.propTypes = {
   description: PropTypes.string,
   image: PropTypes.string.isRequired,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string.isRequired,
   
 }
 
 export default Seo
 