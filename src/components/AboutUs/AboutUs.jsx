import React from 'react'
import './AboutUs.css'
// import image5 from '../../assets/55.png'
import image6 from '../../assets/2.png'
import Button from './../Button/Button'

 const AboutUs = () => {
    return (
        <div className="about-us ">
        
            <div className="container">
                <div className="row gx-5 g-5">
                    <div className="col-lg-6 ">
                        <div className="img ">
                            <img  src={image6}/>
                        </div>                    
                    </div>
                    <div className="col-lg-6">
                    <div className="title">
                        <h1>About <span>Us</span></h1>
                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                         <div className="content">
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source
                            <br/>
                            <br/>
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",</p>
                         </div>
                        </div>

                        <Button className="btn-danger bg-transparent text-dark" />
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs ;