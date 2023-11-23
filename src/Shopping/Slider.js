import React from 'react';
import { Carousel } from 'antd';
import "./main.css"

const contentStyle = {
  // height: '450px',
  // color: '#fff',
  // lineHeight: '160px',
  // textAlign: 'center',
  // background: '#364d79',
};
const Slider = () => (
  <Carousel autoplay>
    <div className='slider1'>
      <h3 style={contentStyle}><img src='./ajio1.avif' alt='a'></img> </h3>
    </div>
    <div className='slider1'>
      <h3 style={contentStyle}><img src='./a3.avif' alt='2'></img></h3>
    </div>
    <div className='slider1'>
      <h3 style={contentStyle}><img src='./a4.gif' alt='2'></img></h3>
    </div>
    <div className='slider1'>
      <h3 style={contentStyle}><img src='./a5.avif' alt='2'></img></h3>
    </div>
  </Carousel>
);
export default Slider;