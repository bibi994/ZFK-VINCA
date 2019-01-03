import React from 'react';
import './home.css';

// import Slider from './../slider/Slider';
import First_Article from './First_Article/First_Article';
import Second_Article from './Second_Article/Second_Article';
import Social from './Social/Social';
import Table from './Table/Table';
import Video from './Video/Video';

const Home = () => {
    return(
        <>
            {/* <Slider/> */}
            <div class="row container clearFix">
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
                    <Table />
                    <div className="home-banner">
                        <img src={require("../../shared/banner.jpg")} alt="" />
                    </div>
                    <Video />
                </div>
                
            </div>  
    </>
    )
}
export default Home;
