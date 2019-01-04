import React from 'react';

import './singlePost.css';

const SinglePost = () => {
    return(
        <div className="container row">
            <div className="post col-8">
                <img src={require("./../../shared/singlePost.jpg")}/>

                <div className="post-content">
                    <h3>THE CHAMPIONSHIP FINAL WILL BE BE PLAYED IN SAN FRANCISCO</h3>
                    <p className="mt-1 mb-4">21.05.2019. - 15:44</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br/>

                    <h5>A Show to Remember</h5>

                    <img src={require("./../../shared/singlePost.jpg")}/>
                    <p className="mt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                </div>

                <div className="post-footer">  
                                <img src={require("../../shared/author.jpg")} alt=""/>
                                <p>Ženski fudbalski klub Vinča</p>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-facebook"></i>
                            </div>
            </div>

            <div className="post-widgets col-4">
            
            </div>


        
        </div>
    )
}
export default SinglePost;