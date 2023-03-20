import React from 'react';
// import Product from './Product';
import ProductTow from './ProductTwo';
import "./Galley.css";
import dataFoods from "../Data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

 const Galley = () => {
     const fachData = dataFoods.map((item)=>{
        return(
            // <Product id={item.id} title={item.title} img={item.img} 
            // paragraph={item.paragraph} price={item.price}/>

            <ProductTow id={item.id} title={item.title} img={item.img} 
            paragraph={item.paragraph} price={item.price}/>
     )
     })
     const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <section className="gallerybox">
            <div className="container  my-5 gx-5">
                <div className="title">
                    <h1>Our top <span>Menu</span></h1>
                </div>
                <div className=" row ">
                    <Slider {...settings}>
                        {fachData}
                    </Slider>
                </div>
            </div>
        </section>
     
    )
}
export default Galley;