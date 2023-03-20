import React from 'react'
import'./ServiceCard.css'

 const ServiceCard = (props) => {
    return (
        <div className=" col-lg-6 col-md-6">
            <div className="ServiceCard ">
                <div className="icon"> </div>
                <div className="content">
                    <h2>{props.title}</h2>
                    <p>{props.paragraph}</p>
                </div>
            </div>
        </div>
    )
}
export default ServiceCard ;