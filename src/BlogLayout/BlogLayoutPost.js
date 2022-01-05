import React from "react"
import { Container, Grid } from "semantic-ui-react"
import "./BlogLayout.scss"
import SectionInstagram from "../componentes/SectionInstagram"
import Footer from "../componentes/footer"




export default function BlogLayoutPost(props) {


    const { children  } = props
    return(
        <React.Fragment>
        <Container className="blog-contain"  >


        <Grid>
            <Grid.Column mobile={16} tablet={16} >
                {children}
            </Grid.Column>
           
        </Grid>
        <SectionInstagram style={{display:"block"}}></SectionInstagram>
         <Footer></Footer>
        </Container>
     
         </React.Fragment>

    )

}