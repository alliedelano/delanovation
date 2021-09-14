import React from 'react';
import CarouselComp from '../../components/Carousel/Carousel'
import Collage from '../../components/Collage/Collage'



export default function HomePage(){
    return(
        <>
            <h2>delanovation</h2>
            <p>
            Right now I'm just experimenting here. 
            </p>
            Experimenting with Collage
            <Collage />
            <br />
            Experimenting with Carousel
            <CarouselComp />
            
        </>
    )
}