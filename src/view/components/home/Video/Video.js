import React from 'react';

import './video.css';

const Video = () => {
    return(
        <>
            <div className="social">
                <div className="social-header">
                    <i class="fas fa-grip-lines"></i>
                    <p>VIDEO</p>
                </div>
                <div className="video">
                <iframe  src="https://www.youtube.com/embed/3Gddr9PDyZ0?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

        </>
    )
}
export default Video;