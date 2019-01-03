import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            background: true,
        }
    }
    
    render() {
        console.log(this.props)
        let box = ["header-main"];
        if(this.state.background) {
            box.push("header-bg");
          }
        return (
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
            <div className={box.join('')}>
                <ul class="header-nav container">
                    <li><Link to="/">NASLOVNA</Link></li>
                    <li><Link to="/vesti">VESTI</Link></li>
                    <li><Link to="/o-klubu">O KLUBU</Link></li>
                    <li><Link to="/strucni-stab">STRUČNI ŠTAB</Link></li>
                    <li class="header-logo"><Link to="/"><img src={require('../../../shared/logo.png')} alt="logo"/></Link></li>
                    <li><Link to="/tim">TIM</Link></li>
                    <li><Link to="/rezultati">REZULTATI</Link></li>
                    <li><Link to="/galerija">GALERIJA</Link></li>
                    <li><Link to="/kontakt">KONTAKT</Link></li>
                </ul>
            </div>
        </header>
        )
    }
}
export default Header;

