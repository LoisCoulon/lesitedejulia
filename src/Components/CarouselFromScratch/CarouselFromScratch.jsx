import { useState } from "react";
import image1 from "../../Images/carousel/1.jpg";
import image2 from "../../Images/carousel/2.jpg";
import image3 from "../../Images/carousel/3.jpg";
import image4 from "../../Images/carousel/4.jpg";
import image5 from "../../Images/carousel/5.jpg";
import image6 from "../../Images/carousel/6.jpg";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function CarouselFromScratch() {
  const images = [image1, image2, image3, image4, image5, image6];
  const [currentSlide, setCurrentSlide] = useState(0);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="carousel-wrapper">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow--left"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={index}
              alt={index}
              src={imageItem}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image current-image--hiden"
              }
            />
          ))
        : null}

      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow--right"
      />

      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator current-indicator--inactive"
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default CarouselFromScratch;
