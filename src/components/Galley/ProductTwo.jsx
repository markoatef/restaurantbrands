import React from 'react';
import "./ProductTwo.css";



 const ProductTwo = (props) => {
        return (
                <div className="card">
                    <div className="image-one">
                        <img  src={props.img} />
                    </div>
                    <div className="content">
                        <h2>{props.title}</h2>
                        <p>{props.paragraph}</p>
                        <div className="price">
                            <span>{props.price}</span>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
        )
    
    
}
export default ProductTwo;