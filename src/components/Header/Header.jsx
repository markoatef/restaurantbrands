import React from 'react'
import "./Header.css"
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/Waffle Image.png'
import image2 from '../../assets/7.jpg'

 const Header = () => {
    return ( 
      <Carousel className="header">
      <Carousel.Item className="h-100 image">
      <img  className="d-block w-100 h-100 " src={image1} alt="First slide" />
      <Carousel.Caption>
        <h1>Discount <span>50%</span></h1>
        <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className="btn">
        
        <button className="first-button "><a href="#" >Order Now</a></button>
        <button className="srcond-button"><a href="#" >More Menu</a></button>
        </div>
      </Carousel.Caption>
    </Carousel.Item> 
    <Carousel.Item className="h-100 image">
    <img  className="d-block w-100 h-100 " src={image2} alt="First slide" />
    <Carousel.Caption>
      <h1>Discount <span>50%</span></h1>
      <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      <div className="btn">
      
      <button className="first-button "><a href="#" >Order Now</a></button>
      <button className="srcond-button"><a href="#" >More Menu</a></button>
      </div>
    </Carousel.Caption>
  </Carousel.Item> 

      
    </Carousel>





    )
}
export default Header;


