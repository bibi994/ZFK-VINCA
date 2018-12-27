import React from 'react';

import './header.css';

const Header = () => {
    return(
        <header>
            <div class="header-top">
                <div className="container">
                    <div className="header-top-news">
                        <div class="last-news "> VESTI</div>
                        <p>Ostvarena je prva pobeda!</p>
                    </div>

                    <div class="social-nav">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube-square"></i></a>
                        
                    </div>
                </div>

            </div>

            <div class="header-main">
                <ul class="header-nav container">
                    <li><a href="#!">VESTI</a></li>
                    <li><a href="#!">O KLUBU</a></li>
                    <li><a href="#!">TIM</a></li>
                    <li><a href="#!">STRUČNI ŠTAB</a></li>
                    <li class="header-logo"><a href=""><img src={require('../../../shared/logo.png')} alt=""/></a></li>
                    <li><a href="#!">VESTI</a></li>
                    <li><a href="#!">REZULTATI</a></li>
                    <li><a href="#!">MEDIA</a></li>
                    <li><a href="#!">KONTAKT</a></li>
                </ul>
            </div>
        </header>
        
    )
}
export default Header;
