import React from 'react'
import './Menu.css'
import dataFoods from'../Data/Data';
import Product from '../Galley/Product';

 
 const Menu = () => {
    const fachData = dataFoods.map((item)=>{
        return(

            <Product id={item.id} title={item.title} img={item.img} 
            paragraph={item.paragraph} price={item.price}/>
     )
     })

    return (
        <div className="menu">
            <div class="container  my-5">
                <div className="title"> 
                    <h1>Our  <span>Menu</span></h1>
                    <p>We are company engaged in the field food services with a very wide range throut indonesia</p>
                </div>
                <div class="row gx-5 gy-5">
                    {fachData}
                </div>
                <div className="btn"> 
                    <button >Shop Now</button>
                </div>
            </div>
        </div>
    )
}
export default Menu