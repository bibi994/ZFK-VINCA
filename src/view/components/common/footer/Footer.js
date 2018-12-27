import React from 'react';

import './footer.css';

const Footer = () => {
    return(
        
        <footer>
        <div class="row container footer-main">
            <div class="footer-selection col-4">
                <img src={require('../../../shared/logo_footer.png')} alt="footer-logo"/> <br/>
                <i class="fas fa-map-marker-alt"></i> Mike Petroviće Alasa 4, Vinča <br/>
                <i class="fas fa-phone-square"></i> 060/ 00 00 000 <br/>
                <i class="fas fa-envelope-square"></i> info@zfk-vinca.com
            </div>
            <div class="footer-selection col-4">
                    <h4>Linkovi</h4> <br/>
                    <ul>
                        <li><a href="">Vesti</a></li>
                        <li><a href="">O klubu</a></li>
                        <li><a href="">Tim</a></li>
                        <li><a href="">Struni štab</a></li>
                        
                    </ul>
                    <ul>
                        <li><a href="">Tabela</a></li>
                        <li><a href="">Rezultati</a></li>
                        <li><a href="">Media</a></li>
                        <li><a href="">Kontakt</a></li>
                     </ul>
            </div>
            <div class="footer-selection col-4">
                    <h4>Prijavite se za obaveštanja</h4> <br/>
                    <p>Budite u toku sa najnovijim vestima.</p>
                    <input type="text" class="subscribe-input" placeholder="Vaša email adresa" /><input type="submit" value="PRIJAVI SE" />
            </div>
        </div>

        <div class="footer-bootom row container">
                <p class="col-4">
                        Copyright © 2018 WFC Vinča. All rights reserved.                       
                </p>
                <p class="col-4">
                        <i class="fas fa-map-marker-alt"></i>
                        <i class="fas fa-phone-square"></i>
                        <i class="fas fa-envelope-square"></i> 
                        <i class="fab fa-google-plus-g"></i>                      
                </p>
                <p class="col-4">
                        Developed by Miloš & Vojkan
                       
                </p>
        </div>
    </footer>
    )
}
export default Footer;
