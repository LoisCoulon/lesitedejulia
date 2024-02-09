import { Carousel } from "react-responsive-carousel" 
import "react-responsive-carousel/lib/styles/carousel.min.css"
import image1 from "../../Images/carousel/1.jpg"
import image2 from "../../Images/carousel/2.jpg"
import image3 from "../../Images/carousel/3.jpg"
import image4 from "../../Images/carousel/4.jpg"
import image5 from "../../Images/carousel/5.jpg"
import image6 from "../../Images/carousel/6.jpg"



function CarouselComponent() {

    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop autoPlay transitionTime={500} showThumbs={false} showStatus={false}>
                <div>
                    <img alt="image1" src={image1} />
                </div>
                <div>
                    <img alt="image2" src={image2} />
                </div>
                <div>
                    <img alt="image3" src={image3} />
                </div>
                <div>
                    <img alt="image4" src={image4} />
                </div>
                <div>
                    <img alt="image5" src={image5} />
                </div>
                <div>
                    <img alt="image6" src={image6} />
                </div>
            </Carousel>
        </div>
    );
}

export default CarouselComponent