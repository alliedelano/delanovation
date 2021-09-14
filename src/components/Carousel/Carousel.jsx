import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import desert from '../../images/desert.png'
import feet from '../../images/feet.jpg'
import jumping from '../../images/jumping.png'
import plane from '../../images/plane.png'
import skydiver from '../../images/skydiver.png'
import tracking from '../../images/tracking.png'

export default function CarouselComp(){
    return(
        <>
        <Carousel showArrows={true} autoPlay transitionTime={1000} showThumbs={false}>
                <div>
                    <img src={feet} />
                </div>
                <div>
                    <img src={jumping} />
                </div>
                <div>
                    <img src={tracking} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={plane} />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src={skydiver} />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src={desert} />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        </>
    )
}