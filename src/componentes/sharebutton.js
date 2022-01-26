import React from 'react'
import "../componentes/global-styles/estilo.scss"
import { Button, Icon } from 'semantic-ui-react'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'

const ShareButtons = ({title, url, twitterHandle, tags, image, description}) => {

    return(
        <div>
          <FacebookShareButton url={url} title={title} image={image}  >
          <Button className='botonShare'  color='facebook'>
      <Icon name='facebook' /> Facebook
    </Button>
         </FacebookShareButton>

          <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
          <Button className='botonShare' style={{background:"#1d9bf0", color:"white"}}>
      <Icon name='twitter' /> Twitter
    </Button>
          </TwitterShareButton>

          <LinkedinShareButton url={url} title={title} via={twitterHandle} hashtags={tags} >
          <Button className='botonShare'  color='linkedin'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
          </LinkedinShareButton>

         
        </div>
      )

}
export default ShareButtons