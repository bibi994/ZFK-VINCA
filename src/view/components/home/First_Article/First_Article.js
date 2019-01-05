import React from 'react';

import './First_Article.css';

const  First_Article = () => {
    return(
        <>
           <div className="section-header">
                <i className="fas fa-grip-lines"></i>
                <p>Najnovije vesti</p>
            </div>

            <div className="home-first-article">
                <p className='top'>Seniorke</p>
                <img src={require("../../../shared/home-first.jpg")} alt="" />
                <p className="date">01.01.2019. - 15:25</p>
                <h3><a href="!#">Lorem Ipsum is simply dummy text of the printing and typesetting.</a></h3>  
            </div>
    </>
    )
}
export default First_Article;
