import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Carousels = () => {
  console.log('Caraousels page accessed')
  return (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img style={{height: '400px',width:"60%"}} src="assets\movie-images\Yodha.jpg" alt="Logo"/>
</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
)
};
export default Carousels;