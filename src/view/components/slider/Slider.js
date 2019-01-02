import React from 'react';
import './sliderPureJS.js';
import './slider.css';



const Slider = () => {
    return(
        <div id="jssor_1" className="jssor_main">
        
        <div data-u="slides" className="slides">
            <div>
                <div className="slider-box"> 
                    <span className="box-span-first">SRUŠI PREDRASUDE, PREVAZIĐI GRANICE!</span>
                    <span className="box-span-second">ŽENSKI FUDBALSKI KLUB VINČA</span>
                    {/* <p className="box-p">hey estabilush word championship and promote competitive spirit and friendly relations among members.</p>
                    <button className="box-button">WATCH VIDEO</button> */}
                </div>
                <img data-u="image" src="https://i.imgur.com/5J11ATz.jpg" />
             
            </div>
            <div>
            <div className="slider-box">
                    <span className="box-span-first">SRUŠI PREDRASUDE, PREVAZIĐI GRANICE!</span>
                    <span className="box-span-second">ŽENSKI FUDBALSKI KLUB VINČA</span>
                    {/* <p className="box-p">hey estabilush word championship and promote competitive spirit and friendly relations among members.</p>
                    <button className="box-button">WATCH VIDEO</button> */}
            </div>
                <img data-u="image" src="https://splash.scdn4.secure.raxcdn.com/football/wp-content/uploads/sites/2/2017/01/new_banner.jpg" />
            </div>
            <div>
            <div className="slider-box"> zek3</div>
                <img data-u="image" src="https://splash.scdn4.secure.raxcdn.com/football/wp-content/uploads/sites/2/2017/01/new_banner.jpg" />
              
            </div>
        </div>
      
        <div data-u="navigator" className="jssorb032 navigator"  data-autocenter="1" data-scale="0.5" data-scale-bottom="0.75">
            <div data-u="prototype" className="i navigator_prototype">
                <svg viewBox="0 0 16000 16000" className="navigator_viewbox">
                    <circle className="b" cx="8000" cy="8000" r="5800"></circle>
                </svg>
            </div>
        </div>
        
        <div data-u="arrowleft" className="jssora051 arrowleft" data-autocenter="2" data-scale="0.75" data-scale-left="0.75">
            <svg viewBox="0 0 16000 16000" className="arrow_viewbox">
                <polyline className="a" points="11040,1920 4960,8000 11040,14080 "></polyline>
            </svg>
        </div>
        <div data-u="arrowright" className="jssora051 arrowright" data-autocenter="2" data-scale="0.75" data-scale-right="0.75">
            <svg viewBox="0 0 16000 16000" className="arrow_viewbox">
                <polyline className="a" points="4960,1920 11040,8000 4960,14080 "></polyline>
            </svg>
        </div>
    </div>
  
    )
}
export default Slider;
