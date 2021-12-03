import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
class HomeAbout extends Component {
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
                            <span>VỀ CHÚNG TÔI</span>
                            <h4>
                                <NavLink to='/home'>Trang chủ</NavLink>
                                {' > '}
                                <span>Về chúng tôi</span>
                            </h4>
                        </div>
                    </div>
                </div>
                <h1>Welcome</h1>
                <hr></hr>
                <h3>Chúng tôi là team của nhóm 14</h3>
                <p>Team của chúng tôi bao gồm 5 người</p>
                <section class="aboutUs">
                    <div class="team__grids">
                        <div class="team__gird__top">
                            <div class="team__info">
                                <img src="../../../img/tmn.jpg" className="img-fluids" />
                                <div class="team__cap">
                                    <h4>Trịnh Minh Nhân</h4>
                                    <p>CNTT20B</p>
                                    <ul>
                                        <li>
                                            <a href="#"><span><i class="fab fa-facebook-f"></i></span></a>
                                        </li>
                                        <li>
                                            <a href="#"> <span><i class="fab fa-twitter"></i></span></a>
                                        </li>
                                        <li>
                                            <a href="#"><span><i class="fas fa-rss"></i></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="team__gird__top__1">
                            <div class="team__info">
                                <img src="../../../img/cuong.jpg" className="img-fluids" />
                                <div class="team__cap">
                                    <h4>Nguyễn Đức Cường</h4>
                                    <p>CNTT20B</p>
                                    <ul>
                                        <li>
                                            <a href="#"><span><i class="fab fa-facebook-f"></i></span></a>
                                        </li>
                                        <li>
                                            <a href="#"> <span><i class="fab fa-twitter"></i></span></a>
                                        </li>
                                        <li>
                                            <a href="#"><span><i class="fas fa-rss"></i></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="team__gird__top__2">
                            <div class="team__info">
                                <img src="../../../img/tuancanh1.jpg" className="img-fluids" />
                                <div class="team__cap">
                                    <h4>Nguyễn Tuấn Cảnh</h4>
                                    <p>CNTT20B</p>
                                    <ul>
                                        <li>
                                            <a href="#"><span><i class="fab fa-facebook-f"></i></span></a>
                                        </li>
                                        <li>
                                            <a href="#"> <span><i class="fab fa-twitter"></i></span></a>
                                        </li>
                                        <li>
                                            <a href="#"><span><i class="fas fa-rss"></i></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="team__gird__top__3">
                            <div class="team__info">
                                <img src="../../../img/luffy.jpg" className="img-fluids" />
                                <div class="team__cap">
                                    <h4>Nguyễn Quang Dũng</h4>
                                    <p>CNTT20B</p>
                                    <ul>
                                        <li>
                                            <a href="#"><span><i class="fab fa-facebook-f"></i></span></a>
                                        </li>
                                        <li>
                                            <a href="#"> <span><i class="fab fa-twitter"></i></span></a>
                                        </li>
                                        <li>
                                            <a href="#"><span><i class="fas fa-rss"></i></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="team__gird__top__3">
                            <div class="team__info">
                                <img src="../../../img/phucdu.jpg" className="img-fluids" />
                                <div class="team__cap">
                                    <h4>Nguyễn Đại Phúc</h4>
                                    <p>CNTT20B</p>
                                    <ul>
                                        <li>
                                            <a href="#"><span><i class="fab fa-facebook-f"></i></span></a>
                                        </li>
                                        <li>
                                            <a href="#"> <span><i class="fab fa-twitter"></i></span></a>
                                        </li>
                                        <li>
                                            <a href="#"><span><i class="fas fa-rss"></i></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}
export default connect(null)(HomeAbout);
