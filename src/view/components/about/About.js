import React from 'react';

import './about.css';
import { request } from 'https';

const About = () => {
    return(
        <div className="container about">
            <h2>O KLUBU</h2>

            <div className="row">
                <p className="col-lg-6 col-md-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more.<br /><br />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>

                <img className="col-lg-6 col-md-12 about-img" src={require('./../../shared/img_about.jpg')}/>
            </div>
            <h3>PREDSEDNIK KLUBA</h3>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <img className="coach-img" src={require('./../../shared/coach.jpg')}/>
                </div>

                <div className="col-lg-5 col-md-6 signature">
                    <p><i class="fas fa-quote-right"></i>  Before you can build an effective team, you need high-performing players. So next time you consider hiring a new employee, revisit these 4 characteristics. If you have an open floor plan, you may not want to hire someone who is extremely introverted or accustomed to working remotely.  <i class="fas fa-quote-right"></i></p>
                      
                    <img className="coach-img" src={require('./../../shared/signature.png')}/>

                </div>

                <div className="col-lg-4 col-md-12 about-gray">
                    <p>
                    <h4>Prijatelji kluba</h4>   
                        Before you can build an effective team, you need high-performing players. So next time you consider hiring a new employee, revisit these 4 characteristics.</p>
                </div>

            </div>
        </div>
    )
}
export default About;