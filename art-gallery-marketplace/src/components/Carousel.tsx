import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../app.css'
import { Link } from "react-router-dom";

interface Artwork {
  _id: string;
  pic: string;
  title: string;
  description: string;
}

interface ArtCarouselProps {
  artworks: Artwork[];
}

export default function ArtCarousel({artworks}: ArtCarouselProps) {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return <Carousel className="mx-auto w-75 p-5 shadow p-3 bg-secondary mt-5 rounded-4" activeIndex={index} onSelect={handleSelect}>
    {artworks.map((slide) => {
      return <Carousel.Item className="carouselItem" interval={5000} key={slide._id}>
        <Link to={`/artworks/${slide._id}`}>
          <img
            className="d-block w-100"
            src={slide.pic}
            alt="slider imag"
          />
          <Carousel.Caption className="w-10 h-10 bg-dark opacity-75 rounded-4">
            <h3>{slide.title}</h3>
            <p style={{ textAlign: "center" }}>{slide.description}</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    })}

  </Carousel>
}
