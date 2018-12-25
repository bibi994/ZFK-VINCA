import React from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';

$(document).ready(function(){
    $('.your-class').slick({
  
    });
  });

const Slider = () => {
    return(
        <div class="your-class">
            <img src="https://splash.scdn4.secure.raxcdn.com/football/wp-content/uploads/sites/2/2017/01/new_banner.jpg" alt="fudbal"/>
            <img src="https://splash.scdn4.secure.raxcdn.com/football/wp-content/uploads/sites/2/2017/01/new_banner.jpg" alt="fudbal"/>
            <img src="https://splash.scdn4.secure.raxcdn.com/football/wp-content/uploads/sites/2/2017/01/new_banner.jpg" alt="fudbal"/>         
      </div>
  
    )
}
export default Slider;
