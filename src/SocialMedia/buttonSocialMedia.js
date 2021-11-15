import React from "react"
import "./SocialMedia.scss"
import { Button, Icon} from "semantic-ui-react"
import socialData from "./buttondata"
import { map } from "lodash-es"



export default function ButtonSocial() {

return(

    <div >

        <h1 className="titulo" >COMPARTE ESTA NOTICIA EN RRSS</h1>

       
        {map(socialData, (social, index) => (


            <Button size='huge' color={social.color}>
            <Icon name={social.name} /> {social.nombre}
            </Button>


          
        ))}
      
     
    </div>
)


}