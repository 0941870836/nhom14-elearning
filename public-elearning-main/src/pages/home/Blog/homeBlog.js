import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";

class HomeBlog extends Component {
    render() {
        return (
            <section class="about">
                <div className='wrap-detailCourse'>
                    <div
                        className=' header-detailCourse'
                        style={{
                            backgroundImage: "url('../../img/15.jpg')",
                        }}
                    >
                        <div
                            className='overflow'
                            style={{ backgroundImage: "url('../../img/bg-2.png')" }}
                        ></div>
                        <div className='title detail-course'>
                            <span>TIN TỨC</span>
                            <h4>
                                <NavLink to='/home'>Trang chủ</NavLink>
                                {' > '}
                                <span>Tin tức</span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="post">
                    <img src="../../../img/reactjs.jpg" className="img-fluids" />
                    <div className="postInfo">
                        <div className="postCats">
                            <span className="postCat">
                                <Link className="link" to="/">
                                    REACTJS
                                </Link>
                            </span>
                        </div>
                        <span className="postTitle">
                            <Link to="/post/abc" className="link">
                                Kiến thức về Reactjs
                            </Link>
                        </span>
                        <hr />
                        <span className="postDate">1 hour ago</span>
                    </div>
                    <p className="postDesc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                        atque, exercitationem quibusdam, reiciendis odio laboriosam?
                    </p>
                </div>

                <div className="post">
                    <img src="../../../img/php.jpg" className="img-fluids" />
                    <div className="postInfo">
                        <div className="postCats">
                            <span className="postCat">
                                <Link className="link" to="/">
                                    PHP
                                </Link>
                            </span>
                        </div>
                        <span className="postTitle">
                            <Link to="/post/abc" className="link">
                                Kiến thức về PHP
                            </Link>
                        </span>
                        <hr />
                        <span className="postDate">1 hour ago</span>
                    </div>
                    <p className="postDesc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                        atque, exercitationem quibusdam, reiciendis odio laboriosam?
                    </p>
                </div>
            </section>
        );
    }
}
export default connect(null)(HomeBlog);
