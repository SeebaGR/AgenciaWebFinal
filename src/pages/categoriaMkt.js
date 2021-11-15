import React from "react";
import { graphql } from "gatsby";
import UsePost from "../hooks/hookPost";
import BlogLayout from "../BlogLayout";
import PostList from "../PostList/PostList";
import Pagination from "../Pagination";
import Header from "../componentes/header";
import Footer from "../componentes/footer";
import { map } from "lodash";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "gatsby";
import Card from "react-bootstrap/Card";

export default function categoriaMkt(props) {
  const { data, pageContext } = props;
  const post = data.allStrapiPost.nodes;
  const colorFondo = "#031fff";
  console.log(post);

  return (
    <React.Fragment>
      <Header colorFondo={colorFondo} />
      <div>
        <BlogLayout>

         {/*Seccion poslist para categoria */}

          <Container className="contenedor-disposicion" fluid>
            {map(post, (post) => (
              <Row>
                <Link to={`/${post.url}`}>
                  <Col sm={2}></Col>
                  <Col className="contenedor-disposicion__item" sm={8}>
                    <Card id="carta">
                      <Card.Img variant="top" src={post.miniatura.url} />
                      <Card.Body>
                        <Card.Title className="titulo-post">
                          <a href="#">{post.titulo_post}</a>
                        </Card.Title>
                        <Card.Text className="texto-descripcion">
                          {post.seo_descripcion}
                        </Card.Text>
                        <Card.Link className="color-enlace" href="#">
                          Leer más
                        </Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </Link>
              </Row>
            ))}
          </Container>

          <Pagination pageContext={pageContext} />
        </BlogLayout>
      </div>
    </React.Fragment>
  );
}

export const query = graphql`
  query  {
    allStrapiPost(
      filter: { Categoria: { eq: "marketing" } }
   
      sort: { fields: id_post, order: ASC }
    ) {
      nodes {
        id

        id_post
        titulo_post
        url
        contenido_1
        seo_title
        seo_descripcion
        miniatura {
          url
        }
        image_banner {
          url
        }
      }
    }
  }
`;
