import React from 'react';

import './staff.css';

const Staff = () => {
    return(
        
        <div className="container">
            <div className="section-header mt-5 ml-2 mr-2">
                    <i class="fas fa-grip-lines"></i>
                    <p>Stručni štab</p>
            </div>
            <div className="all-staffs">
                <div className="staff">
                    <img src={require('../../shared/player.jpg')} alt="player"/>
                    <p>Dušan Vuković</p>
                    <p><i class="fas fa-user-tie"></i> Predsednik kluba</p>
                    <p><i class="far fa-calendar-plus"></i> 01.01.1994.</p>
                </div>

                <div className="staff">
                    <img src={require('../../shared/player.jpg')} alt="player"/>
                    <p>Dušan Vuković</p>
                    <p><i class="fas fa-user-tie"></i> Predsednik kluba</p>
                    <p><i class="far fa-calendar-plus"></i> 01.01.1994.</p>
                </div>

                <div className="staff">
                    <img src={require('../../shared/player.jpg')} alt="player"/>
                    <p>Dušan Vuković</p>
                    <p><i class="fas fa-user-tie"></i> Predsednik kluba</p>
                    <p><i class="far fa-calendar-plus"></i> 01.01.1994.</p>
                </div>

                <div className="staff">
                    <img src={require('../../shared/player.jpg')} alt="player"/>
                    <p>Dušan Vuković</p>
                    <p><i class="fas fa-user-tie"></i> Predsednik kluba</p>
                    <p><i class="far fa-calendar-plus"></i> 01.01.1994.</p>
                </div>

                

                
            </div>


        </div>
    )
}
export default Staff;