import React from 'react'
import './Background.css'
import video from '../../assets/video.mp4'
import carfront from '../../assets/carfront.jpg'
import hyundai from '../../assets/hyundai.jpg'
import image from '../../assets/image.jpg'


const Background = ({playStatus , heroCount}) => {
  
    if (playStatus){
        return(
            <video className='background fade-in' autoPlay loop muted>
            <source src={video} type='video/mp4'/>
            
            </video>
        )
    }
    else if(heroCount===0){
        return <img src={carfront} className='background fade-in' alt="" />
    }
    else if(heroCount===1){
        return <img src={hyundai} className='background fade-in' alt="" />
    }
    else if(heroCount===2){
        return <img src={image} className='background fade-in' alt="" />
    }
  
    }

export default Background