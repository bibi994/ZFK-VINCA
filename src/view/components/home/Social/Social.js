import React from 'react';

import './social.css';

const Social = () => {
    return(
        <>
            <div className="social">
                <div className="social-header">
                    <i className="fas fa-grip-lines"></i>
                    <p>PRATITE ŽFK VINČA</p>
                </div>

                <div className="icons">
                    <img src={require("../../../shared/fb.png")} alt="" />
                    <img src={require("../../../shared/instagram.png")} alt="" />
                    <img src={require("../../../shared/yt.png")} alt="" />
                </div>
            </div>

        </>
    )
}
export default Social;