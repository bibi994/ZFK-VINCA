import React from 'react';
import $ from 'jquery';
import 'jssor-slider/js/jssor.slider.min';
import './slider.css';
declare var $JssorSlider$;
declare var $Jease$;
declare var $JssorCaptionSlideo$;
declare var $JssorArrowNavigator$;
declare var $JssorBulletNavigator$;

$(document).ready(function ($) {

        var jssor_1_SlideoTransitions = [
          [{b:-1,d:1,o:-0.7}],
          [{b:900,d:2000,x:-379,e:{x:7}}],
          [{b:900,d:2000,x:-379,e:{x:7}}],
          [{b:-1,d:1,o:-1,sX:2,sY:2},{b:0,d:900,x:-171,y:-341,o:1,sX:-2,sY:-2,e:{x:3,y:3,sX:3,sY:3}},{b:900,d:1600,x:-283,o:-1,e:{x:16}}]
        ];

        var jssor_1_options = {
          $AutoPlay: 1,
          $SlideDuration: 800,
          $SlideEasing: $Jease$.$OutQuint,
          $CaptionSliderOptions: {
            $Class: $JssorCaptionSlideo$,
            $Transitions: jssor_1_SlideoTransitions
          },
          $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
          },
          $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
          }
        };

        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

        /*#region responsive code begin*/

        var MAX_WIDTH = 3000;

        function ScaleSlider() {
            var containerElement = jssor_1_slider.$Elmt.parentNode;
            var containerWidth = containerElement.clientWidth;

            if (containerWidth) {

                var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                jssor_1_slider.$ScaleWidth(expectedWidth);
            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }

        ScaleSlider();

        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        /*#endregion responsive code end*/
 });



const Slider = () => {
    return(
        <div id="jssor_1" className="jssor_main">
        
        <div data-u="slides" className="slides">
            <div>
                <img data-u="image" src="https://splash.scdn4.secure.raxcdn.com/football/wp-content/uploads/sites/2/2017/01/new_banner.jpg" />
             
            </div>
            <div>
                <img data-u="image" src="https://splash.scdn4.secure.raxcdn.com/football/wp-content/uploads/sites/2/2017/01/new_banner.jpg" />
            </div>
            <div>
                <img data-u="image" src="https://splash.scdn4.secure.raxcdn.com/football/wp-content/uploads/sites/2/2017/01/new_banner.jpg" />
              
            </div>
        </div>
      
        <div data-u="navigator" className="jssorb032 navigator"  data-autocenter="1" data-scale="0.5" data-scale-bottom="0.75">
            <div data-u="prototype" class="i navigator_prototype">
                <svg viewBox="0 0 16000 16000" className="navigator_viewbox">
                    <circle class="b" cx="8000" cy="8000" r="5800"></circle>
                </svg>
            </div>
        </div>
        
        <div data-u="arrowleft" class="jssora051 arrowleft" data-autocenter="2" data-scale="0.75" data-scale-left="0.75">
            <svg viewBox="0 0 16000 16000" className="arrow_viewbox">
                <polyline class="a" points="11040,1920 4960,8000 11040,14080 "></polyline>
            </svg>
        </div>
        <div data-u="arrowright" class="jssora051 arrowright" data-autocenter="2" data-scale="0.75" data-scale-right="0.75">
            <svg viewBox="0 0 16000 16000" className="arrow_viewbox">
                <polyline class="a" points="4960,1920 11040,8000 4960,14080 "></polyline>
            </svg>
        </div>
    </div>
  
    )
}
export default Slider;
