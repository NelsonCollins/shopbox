import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />


            {/* Product will have 5 propertie(props)id, title, price, rating, image*/}
            <div className="home__row">
                <Product
                id="12321341"
                title="The Lean Start up. How Constant Innovation"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />

                <Product
                id="49538094"
                title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer(6.5QT, Champagne)"
                price={120.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61ie0JOVmtL._AC_SL1001_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                id="82351241"
                title="Samsung - Galaxy Fold SM-F900U - Space Silver "
                price={1111.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41gkqsTC7YL._AC_.jpg"
                />

                <Product
                id="62521341"
                title="Fit for Samsung Galaxy Fit SM-R370 Watch Band"
                price={8.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61TojebRN5L._AC_SL1500_.jpg"
                />

                <Product
                id="89421341"
                title="JBL FLIP 4 - Waterproof Portable Bluetooth Speaker"
                price={80.88}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61d5F64UDpL._AC_SL1200_.jpg"
                />
            </div>


            <div className="home__row">
                <Product
                id="12321341"
                title="Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) "
                price={899.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81e-YkieQ6L._AC_SL1500_.jpg"
                />
            </div>
            
            {/* We will create one component and pass in all these props */}
            {/* */}
        </div>
    );
}

export default Home;
