import React from 'react'
import {Link} from "react-router-dom";
import ReactPlayer from 'react-player'
// import { Player } from 'video-react';
import "./video.css"
// import { AspectRatio } from '@chakra-ui/react'
// const videourl="https://youtu.be/rOSfppldjSY"
function Videoframe() {
  return (
  <div>
   <div className='video'>
{/* <AspectRatio maxW='90vw' ratio={4/3}>
  <iframe
    title='naruto'
    src={videourl}
    allowFullScreen
  />
</AspectRatio> */}

{/* <video  width="100%" height="200px" controls className='child' >
  
  <source src="https://video.asos-media.com/Navigation/_content_topshop_desktop_mp4_564_720_2400k_25fps" type='video/mp4'></source>
</video> */}
<ReactPlayer url='https://video.asos-media.com/Navigation/_content_topshop_desktop_mp4_564_720_2400k_25fps' width="100%" height="100%" controls/>




   </div>
   
    <div className='video-button-link'>
      <Link to="/">SHOP TOPSHOP</Link>
    </div>
  </div>
  )
}

export default Videoframe



{/* <video controls="" loop="" playsinline="" poster="https://content.asos-media.com/-/media/hubs/topshop-topman/ts-tm-launch-2022/hp--lp-hero-options/topshop/ts_mobile_390x580-v2.jpg" src="https://video.asos-media.com/Navigation/_content_topshop_mobile_mp4_564_720_800k_25fps"></video> */}