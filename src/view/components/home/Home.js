import React from 'react';

import './home.css';
import { request } from 'https';

const Home = () => {
    return(
        <>
        <div class="row container">
        <div class="col-8 ">
            <div className="section-header">
                {/* <i class="far fa-futbol"></i> */}
                <p>Najnovije vesti</p>
            </div>
            <div className="home-first-article">
                <p className='top'>Seniorke</p>
                <img src={require("../../shared/home-first.jpg")} alt="" />
                <p class="date">01.01.2019. - 15:25</p>
                <h3>Vinča je ostvarila prvu pobedu!</h3>  
            </div>
        </div>

        <div class="col-4 blue">
            asdasd
        </div>
    </div>  
    </>
    )
}
export default Home;
