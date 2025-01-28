import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselCom = () => {
    return (
    <div>
        <Carousel autoPlay={true}>
                <div >
                    <img style={{width:'90%', height:'500px', objectFit:'cover'}} src="https://images.unsplash.com/photo-1612939675110-fe3a0129a024?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZCUyMG1lbnV8ZW58MHx8MHx8fDA%3D" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img style={{width:'90%', height:'500px', objectFit:'cover'}} src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMG1lbnV8ZW58MHx8MHx8fDA%3D" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img style={{width:'90%', height:'500px', objectFit:'cover'}} src="https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2QlMjBtZW51fGVufDB8fDB8fHww" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
    )
}

export default CarouselCom
