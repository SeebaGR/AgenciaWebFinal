import React from "react"
import { Container, Grid } from "semantic-ui-react"
import "./BlogLayout.scss"





export default function BlogLayoutPost(props) {


    const { children  } = props
    return(
        <Container className="blog-contain"  >


        <Grid>
            <Grid.Column mobile={16} tablet={16} >
                {children}
            </Grid.Column>
           
        </Grid>

        </Container>
    )

}