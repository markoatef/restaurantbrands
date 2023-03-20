import React from 'react';
import Header from './../Header/Header';
import Galley from './../Galley/Galley';
import Offer from './../Offer/Offer';
import Menu from './../Menu/Menu';
import Service from './../Service/Service';
import AboutUs from './../AboutUs/AboutUs';

export default () => {
    return (
        <div>
            <Header />
            <Galley />
            <Offer />
            <Menu />
            <Service />
            <AboutUs />
        </div>
    )
}
