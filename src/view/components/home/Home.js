import React from 'react';
import './home.css';

import First_Article from './First_Article/First_Article';
import Second_Article from './Second_Article/Second_Article';
import Social from './Social/Social';

const Home = () => {
    return(
        <>
            <div class="row container">
                <div class="col-8 ">
                   
                   <First_Article />
                   <div className="row">
                        <Second_Article />
                        <Second_Article />
                        <Second_Article />
                        <Second_Article />
                   </div>

                </div>

                <div class="col-4 ">
                    <Social />
                    <img src={require("../../shared/adv-banner.jpg")} alt="" />
                </div>
                
            </div>  
    </>
    )
}
export default Home;
