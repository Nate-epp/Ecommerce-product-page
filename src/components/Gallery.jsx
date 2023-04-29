import React from 'react'
import { useState, useRef } from 'react'
import './Gallery.css'
import "yet-another-react-lightbox/styles.css";
import { useEffect } from 'react';

function Gallery() {

    const [isOpen, setIsOpen] = useState(false)
    const [selectedImg, setSelectedImg] = useState('/images/image-product-1.jpg');


    const bigImage = ['/images/image-product-1.jpg', '/images/image-product-2.jpg', '/images/image-product-3.jpg', '/images/image-product-4.jpg']
    const thumbnailImage = ['/images/image-product-1-thumbnail.jpg', '/images/image-product-2-thumbnail.jpg', '/images/image-product-3-thumbnail.jpg', '/images/image-product-4-thumbnail.jpg']

    
    const nextImage= () => {
        const currentIndex = bigImage.indexOf(selectedImg);
        
        const nextIndex = (currentIndex + 1) % bigImage.length
        console.log(currentIndex)
        console.log(nextIndex)
        setSelectedImg(bigImage[nextIndex])
    }

    const previousImage= () => {
        const currentIndex = bigImage.indexOf(selectedImg);
        const prevIndex = currentIndex === 0 ? bigImage.length - 1 : currentIndex - 1
        setSelectedImg(bigImage[prevIndex])
    }

    useEffect(()=>{
        setSelectedImg(bigImage[0])
    },[isOpen])
    
  return (
    <>
      <div className='gallery-mobile'>
         <img src={selectedImg}/>
         <button className='next-btn' onClick={nextImage}></button>
         <button className='previous-btn' onClick={previousImage}></button>
      </div>
      <div className='gallery-grid'>
        <img onClick={()=>setIsOpen(true)} src='/images/image-product-1.jpg' />
        <div className='gallery-grid-firstthumb'>
            <img src='/images/image-product-1-thumbnail.jpg' />
            
        </div>
        <img onClick={()=>setIsOpen(true)} className='gallery-thumbnail' src='/images/image-product-2-thumbnail.jpg' />
        <img onClick={()=>setIsOpen(true)} className='gallery-thumbnail' src='/images/image-product-3-thumbnail.jpg' />
        <img onClick={()=>setIsOpen(true)} className='gallery-thumbnail' src='/images/image-product-4-thumbnail.jpg' />
        
        
      </div>

      
            <div className={`modal-overlay ${isOpen ? 'active' : ''}`}>
                <div className='modal-body'>
                
                <div className='lightbox-grid'>
                <button className='close-modal' onClick={()=>setIsOpen(false)}><img src='/images/icon-close-orange.svg'/></button>
                <button className='next-btn' onClick={nextImage}></button>
                <button className='previous-btn' onClick={previousImage}></button>
                <img src={selectedImg} className='big-pic' alt='big-pic' />
                <div className='thumbnail-grid'>
                    {thumbnailImage.map((image, index)=><img src={image} className={`thumbnail ${selectedImg === bigImage[index] ?'selected' :'' }`}key={index} alt={`${'thumbnail' + index}`} onClick={()=>setSelectedImg(bigImage[index])}/>)}
                </div>
                </div>
                </div>
            </div>
     
    </>
  )
}

export default Gallery
