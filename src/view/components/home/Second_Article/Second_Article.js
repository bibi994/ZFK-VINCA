import React from 'react';

import './Second_Article.css';

const  Second_Article = () => {
    return(
        <>
           <div className="row">
                        <div className="home-second-article">
                            <p className='top'>Seniorke</p>
                            <img src={require("../../../shared/home-second.jpg")} alt="" className="article-img"/>
                            <p className="date">01.01.2019. - 15:25</p>
                            <div className="comments">
                                <i className="far fa-comments"></i> 25
                            </div>
                            <h4><a href="!#">Lorem Ipsum is simply dummy text.</a></h4>
                            <p className="description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                            <div className="author-info">  
                                <img src={require("../../../shared/author.jpg")} alt=""/>
                                <p>Dušan Vuković</p>
                                <i className="fas fa-rss"></i>
                            </div>
                        </div>

            </div>
    </>
    )
}
export default Second_Article;
