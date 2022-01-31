import React from 'react'

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
 
} from 'react-share'

const ShareButtons = ({title, url, twitterHandle, tags, image, description}) => {

    return(
        <div>
                   
                   <FacebookShareButton url={url} image={image} description={description}  quote={title}>
                <FacebookIcon  size={40} />
         </FacebookShareButton>

          <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
                <TwitterIcon  size={40}  />
          </TwitterShareButton>

          <LinkedinShareButton url={url} >
            <LinkedinIcon  size={40} />
          </LinkedinShareButton>

         
        </div>
      )

}
export default ShareButtons