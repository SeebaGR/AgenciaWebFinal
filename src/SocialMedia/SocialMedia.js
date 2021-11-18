import React from "react"
import "./SocialMedia.scss"
import { Icon} from "semantic-ui-react"
import socialData from "./data"
import { map } from "lodash-es"



export default function ScoialMedia() {

return(

    <div className="social-media">


        {map(socialData, (social, index) => (


            <a href={social.link} >

                <Icon   link name={social.name} className={social.name} />
            </a>
        ))}
      
     
    </div>
)


}