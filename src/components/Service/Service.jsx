import React from 'react'
import'./Service.css'
import dataFoods from "../Data/Data"
import ServiceCard from'./ServiceCard'
import image3 from'../../assets/44.png'
import  DataService from './DataService'
 
 const Service = () => {
        const fachData = DataService.map((item)=>{
           return(
   
               <ServiceCard id={item.id} title={item.title} icon={item.img} 
               paragraph={item.paragraph} price={item.price}/>
        )
        })
    return (
        <div className="Service">
            <div class="container">
                <div className="title">
                    <h1>Our <span>Service</span></h1>
                </div>
                <div class="row gy-5 gx-5">
                
                   <div className="col-lg-7">
                        <div className="row  gx-4  gy-4">  
                            {fachData}
                        </div> 
                   </div> 


                   <div className="col-lg-5">
                    <div className="img">
                        <img src={image3} />
                    </div>
                   
                   </div>


                </div>    
            </div>
            
        </div>
    )
}
export default Service;