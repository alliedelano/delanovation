import React from 'react';
import { ReactPhotoCollage } from 'react-photo-collage'
import desert from '../../images/desert.png'
import feet from '../../images/feet.jpg'
import jumping from '../../images/jumping.png'
import plane from '../../images/plane.png'
import skydiver from '../../images/skydiver.png'
import tracking from '../../images/tracking.png'

export default function Collage(){
    const setting = {
        width: '100vw',
        height: ['50vh', '30vh', '40vh'],
        layout: [1, 2, 3],
        photos: [
            { source: desert},
            { source: feet },
            { source: jumping },
            { source: plane },
            { source: skydiver },
            { source: tracking },
        ],
        showNumOfRemainingPhotos: true
    };
    

    return(
        <ReactPhotoCollage {...setting} />
    )
}