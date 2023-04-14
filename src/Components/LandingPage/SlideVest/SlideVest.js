import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import pic from '../../../Assets/testimonial-1-2.jpg'

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={pic} onDragStart={handleDragStart} role="presentation" />,
  <img src={pic} onDragStart={handleDragStart} role="presentation" />,
  <img src={pic} onDragStart={handleDragStart} role="presentation" />,
];

const SlideVest = () => {
  return (
    <AliceCarousel mouseTracking items={items}>
        <img mouseTracking items={items} src={pic} onDragStart={handleDragStart} role="presentation"/>
        <img mouseTracking items={items} src={pic} onDragStart={handleDragStart} role="presentation"/>
        <img mouseTracking items={items} src={pic} onDragStart={handleDragStart} role="presentation"/>
    </AliceCarousel>
  );
};

export default SlideVest;