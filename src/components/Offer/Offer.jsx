import React from 'react'
import"./offer.css"
import image2 from '../../assets/Food.png'

 const Offer = () => {
    return (
        <div className="offer_section ">
            <div class="container ">
                <div class="row gx-5 gy-5">
                    <div className="col-lg-6 ">
                        <div className="content  ">
                            <h2>Today'e Special</h2>
                            <h1>Surpries for You</h1>
                            <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            <div className="price">
                                <span>45</span>
                                <button>Shop Now</button>
                            </div>
                        </div>
                    </div>
                <div className="col-lg-6"> 
                    <div className="img">
                    <div className="yellow"></div>
                    <img src={image2}></img>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Offer;