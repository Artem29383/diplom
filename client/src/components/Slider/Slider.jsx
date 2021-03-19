import React from 'react';
import Slick from 'react-slick';
import './slick.css';
import './slick-theme.css';
import '../../styles/slick.css';

const Slider = ({ children }) => {
  const settings = {
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 6000,
    speed: 500,
    className: 'mySlickSlider',
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return <Slick {...settings}>{children}</Slick>;
};

export default Slider;
