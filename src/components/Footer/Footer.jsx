import React from 'react'
import './Footer.css'
import logo from '../../assets/22.png'
 const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-3">
                        <div className="about">
                            <img src={logo}/>
                            <div className="content">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>                     
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="information">
                            <h2>information</h2>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Event</a></li>
                                <li><a href="#">More Search</a></li>
                            </ul>
                        
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="links">
                            <h2>Helpful links</h2>
                            <ul>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Term & Condition</a></li>
                                <li><a href="#">Privacy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="Our-menu">
                            <h2>Our menu</h2>
                            <ul>
                                <li><a href="#">Driver</a></li>
                                <li><a href="#">Catalog</a></li>
                                <li><a href="#">launch</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="section-footr w-100 d-flex justify-content-between flex-ms-column">
                        <p className=""> Developed By <span>Marco Atef</span></p>
                        <p>All right reserved fast food creative <span>2023</span></p>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;