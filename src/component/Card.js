import React, { useEffect, useState } from 'react'
import '../Styles/card.css'

import {main,title,cast1,cast2, cast3,cast4,cast5,images2} from '../Images'
import { BsStarFill,BsStarHalf, BsStar } from 'react-icons/bs'

const Card = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 768);
        setIsExpanded(false);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Call the handleResize function initially
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const handleImageClick = () => {
      if (isSmallScreen) {
        setIsExpanded(!isExpanded);
      }
    };
  return (
    <div >
        
        <div
        className={`card-component ${isExpanded ? 'expanded' : ''}`}
        onClick={handleImageClick}
      >
             <div className={`poster ${isExpanded ? 'expanded' : ''}`}>
                <img src={main}></img>
            </div>
            <div className={`details ${isExpanded ? 'expanded' : ''}`}>
        
                <img src={title} className='title'></img>
                <h3>Directed by James Cameron</h3>
                <div className='ratings'>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarHalf/>
                    <BsStar/>
                </div>
                <div className='tags'>
                    <span>Sci-fi</span>
                    <span>Action</span>
                </div>
                <div className='info'>
                    <p>Jake Sully and Ney'tiri have formed a family and are doing
                        everything to stay together. However, they must leave their 
                        home and explore the regions of Pandora....
                    </p>
                </div>
                <div className='cast'>
                    <h4>Cast</h4>
                    <ul>
                        <li> <img src={cast1}></img></li>
                        <li> <img src={cast2}></img></li>
                        <li> <img src={cast3}></img></li>
                        <li> <img src={cast4}></img></li>
                        <li> <img src={cast5}></img></li>
                    </ul>
                </div>
            </div>
        </div>
 

    </div>
  )
}

export default Card