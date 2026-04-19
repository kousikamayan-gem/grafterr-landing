import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import arrow_left from "../images/Vector.png"
import arrow_right from "../images/right.png"
import useCarousel from "../hooks/useCarousel";

const Carousel = ({ products = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = useCarousel();

  const maxIndex = Math.max(products.length - itemsPerView, 0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
        }}
      >
        {products.map((product) => (
          <div
            className="carousel-item"
            key={product.title}
            style={{ width: `${100 / itemsPerView}%` }}
          >
            <ProductCard title={product.title} />
          </div>
        ))}
      </div>
      <div className="carousel-buttons">
        <img
          src={arrow_left}   
          alt="left"
          className="carousel-arrow"
          onClick={handlePrev}
          style={{ opacity: currentIndex === 0 ? 0.3 : 1 }}
        />

        <img
          src={arrow_right}
          alt="right"
          className="carousel-arrow"
          onClick={handleNext}
          style={{ opacity: currentIndex === maxIndex ? 0.3 : 1 }}
        />
      </div>
    </div>
  );
};

export default Carousel;