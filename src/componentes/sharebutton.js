import React from 'react'
import "../componentes/global-styles/estilo.scss"
import { Button, Icon } from 'semantic-ui-react'
import {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,
} from 'react-share';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  EmailShareButton,
} from 'react-share';

const ShareButtons = ({title, url, twitterHandle, tags, image, description}) => {

    return(
        <div>
                   
          <FacebookShareButton url={url}  >
          <Button className='botonShare'  color='facebook'>
      <Icon name='facebook' /> Facebook
    </Button>
         </FacebookShareButton>

          <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
          <Button className='botonShare' style={{background:"#1d9bf0", color:"white"}}>
      <Icon name='twitter' /> Twitter
    </Button>
          </TwitterShareButton>

          <LinkedinShareButton url={url}  title={title} via={twitterHandle} hashtags={tags} >
          <Button className='botonShare'  color='linkedin'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
          </LinkedinShareButton>

         
        </div>
      )

}
export default ShareButtons