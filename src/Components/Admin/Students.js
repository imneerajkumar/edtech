import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLogOut, FiMail, FiSearch, FiHeart, FiMessageSquare } from 'react-icons/fi';
import Footer from '../Footer';

function Students(props) {
  return (
    <div className="main-wrapper main-wrapper-02">
      {/* <!-- Login Header Start --> */}
      <div className="section login-header">
            {/* <!-- Login Header Wrapper Start --> */}
            <div className="login-header-wrapper navbar navbar-expand">

                {/* <!-- Header Logo Start --> */}
                <div className="login-header-logo">
                    <a href="/"><img src="assets/images/logo-icon.png" alt="Logo" /></a>
                </div>
                {/* <!-- Header Logo End --> */}

                {/* <!-- Header Search Start --> */}
                <div className="login-header-search dropdown">
                    <button className="search-toggle" data-bs-toggle="dropdown"><i><FiSearch /></i></button>

                    <div className="search-input dropdown-menu">
                        <form action="#">
                            <input type="text" placeholder="Search here" />
                        </form>
                    </div>
                </div>
                {/* <!-- Header Search End --> */}

                {/* <!-- Header Action Start --> */}
                <div className="login-header-action ml-auto">
                    <div className="dropdown">
                        <button className="action notification" data-bs-toggle="dropdown">
                            <i><FiMessageSquare/> </i>
                            <span className="active"></span>
                        </button>
                        <div className="dropdown-menu dropdown-notification">
                            <ul className="notification-items-list">
                                <li className="notification-item">
                                    <span className="notify-icon bg-success text-white"><i><AiOutlineUser /></i></span>
                                    <div className="dropdown-body">
                                        <a href="/">
                                            <p><strong>Martin</strong> has added a <strong>customer</strong> Successfully
                                            </p>
                                        </a>
                                    </div>
                                    <span className="notify-time">3:20 am</span>
                                </li>
                                <li className="notification-item">
                                    <span className="notify-icon bg-success text-white"><i><AiOutlineUser /></i></span>
                                    <div className="dropdown-body">
                                        <a href="/">
                                            <p><strong>Jennifer</strong> purchased Light Dashboard 2.0.</p>
                                        </a>
                                    </div>
                                    <span className="notify-time">3:20 am</span>
                                </li>
                                <li className="notification-item">
                                    <span className="notify-icon bg-danger text-white"><i><FiHeart /></i></span>
                                    <div className="dropdown-body">
                                        <a href="/">
                                            <p><strong>Robin</strong> marked a <strong>ticket</strong> as unsolved.
                                            </p>
                                        </a>
                                    </div>
                                    <span className="notify-time">3:20 am</span>
                                </li>
                                <li className="notification-item">
                                    <span className="notify-icon bg-success text-white"><i><AiOutlineUser /></i></span>
                                    <div className="dropdown-body">
                                        <a href="/">
                                            <p><strong>David</strong> purchased Light Dashboard 1.0.</p>
                                        </a>
                                    </div>
                                    <span className="notify-time">3:20 am</span>
                                </li>
                                <li className="notification-item">
                                    <span className="notify-icon bg-success text-white"><i><AiOutlineUser /></i></span>
                                    <div className="dropdown-body">
                                        <a href="/">
                                            <p><strong> James.</strong> has added a<strong>customer</strong> Successfully
                                            </p>
                                        </a>
                                    </div>
                                    <span className="notify-time">3:20 am</span>
                                </li>
                            </ul>
                            <a className="all-notification" href="/">See all notifications</a>
                        </div>
                    </div>

                    <a className="action author" href="/">
                        <img src="assets/images/author/author-07.jpg" alt="Author" />
                    </a>

                    <div className="dropdown">
                        <button className="action more" data-bs-toggle="dropdown">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="" href="/"><i><AiOutlineUser /></i> Profile</a></li>
                            <li><a className="" href="/"><i><FiMail /></i> Inbox</a></li>
                            <li><a className="" href="/"><i><FiLogOut /></i> Sign Out</a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Header Action End --> */}

            </div>
            {/* <!-- Login Header Wrapper End --> */}
        </div>
        {/* <!-- Login Header End --> */}
      {/* <!-- Courses Admin Start --> */} 
      <div className="section overflow-hidden position-relative" id="wrapper">

          {/* <!-- Sidebar Wrapper Start --> */}
          <div className="sidebar-wrapper">
              <div className="menu-list">
                    <a className="active" href="/admin"><img src="assets/images/menu-icon/icon-1.png" alt="Icon" /></a>
                    <a href="/messages"><img src="assets/images/menu-icon/icon-2.png" alt="Icon" /></a>
                    <a href="/overview"><img src="assets/images/menu-icon/icon-3.png" alt="Icon" /></a>
              </div>
          </div>
          {/* <!-- Sidebar Wrapper End --> */}

          <div className="page-content-wrapper py-0">

              {/* <!-- Admin Tab Menu Start --> */}
              <div className="nav flex-column admin-tab-menu">
                  <a href="/overview">Overview</a>
                  <a href="/students">Student’s</a>
                  <a href="/reviews">Review’s</a>
                  <a href="/engagement">Course Engagement</a>
                  <a href="/traffic">Traffic & Conversion</a>
              </div>
              {/* <!-- Admin Tab Menu End --> */}

              {/* <!-- Page Content Wrapper Start --> */}
              <div className="main-content-wrapper">
                  <div className="container-fluid">

                      {/* <!-- Student Top Start --> */}
                      <div className="admin-top-bar students-top">
                          <div className="courses-select">
                              <select>
                                  <option data-display="All Courses">All Courses</option>
                                  <option value="1">option</option>
                                  <option value="2">option</option>
                                  <option value="3">option</option>
                                  <option value="4">Potato</option>
                              </select>

                              <h4 className="title">Meet people taking your courses</h4>
                          </div>

                          <div className="student-box">
                              <h5 className="title">Total Revenue</h5>
                              <div className="count">2,698</div>
                          </div>
                      </div>
                      {/* <!-- Student Top End -->

                      <!-- Student's Wrapper Start --> */}
                      <div className="students-wrapper students-active">
                          <div className="swiper-container">
                              <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                      {/* <!-- Single Student Start --> */}
                                      <div className="single-student">
                                          <div className="student-images">
                                              <img src="assets/images/author/author-01.jpg" alt="Author" />
                                          </div>
                                          <div className="student-content">
                                              <h5 className="name">Margarita James</h5>
                                              <span className="country"><img src="assets/images/flag/flag-1.png" alt="Flog" /> Brazil</span>
                                              <p>Data Science and Machine learning</p>
                                              <span className="date"><i className="icofont-ui-calendar"></i> 28.03.2021</span>
                                          </div>
                                      </div>
                                      {/* <!-- Single Student End --> */}
                                  </div>
                                  <div className="swiper-slide">
                                      {/* <!-- Single Student Start --> */}
                                      <div className="single-student">
                                          <div className="student-images">
                                              <img src="assets/images/author/author-02.jpg" alt="Author" />
                                          </div>
                                          <div className="student-content">
                                              <h5 className="name">Stanley Castro</h5>
                                              <span className="country"><img src="assets/images/flag/flag-1.png" alt="Flog" /> Brazil</span>
                                              <p>Data Science and Machine learning</p>
                                              <span className="date"><i className="icofont-ui-calendar"></i> 28.03.2021</span>
                                          </div>
                                      </div>
                                      {/* <!-- Single Student End --> */}
                                  </div>
                                  <div className="swiper-slide">
                                      {/* <!-- Single Student Start --> */}
                                      <div className="single-student">
                                          <div className="student-images">
                                              <img src="assets/images/author/author-07.jpg" alt="Author" />
                                          </div>
                                          <div className="student-content">
                                              <h5 className="name">Beatrice Summers</h5>
                                              <span className="country"><img src="assets/images/flag/flag-1.png" alt="Flog" /> Brazil</span>
                                              <p>Data Science and Machine learning</p>
                                              <span className="date"><i className="icofont-ui-calendar"></i> 28.03.2021</span>
                                          </div>
                                      </div>
                                      {/* <!-- Single Student End --> */}
                                  </div>
                                  <div className="swiper-slide">
                                      {/* <!-- Single Student Start --> */}
                                      <div className="single-student">
                                          <div className="student-images">
                                              <img src="assets/images/author/author-08.jpg" alt="Author" />
                                          </div>
                                          <div className="student-content">
                                              <h5 className="name">Beatrice Summers</h5>
                                              <span className="country"><img src="assets/images/flag/flag-1.png" alt="Flog" /> Brazil</span>
                                              <p>Data Science and Machine learning</p>
                                              <span className="date"><i className="icofont-ui-calendar"></i> 28.03.2021</span>
                                          </div>
                                      </div>
                                      {/* <!-- Single Student End --> */}
                                  </div>
                                  <div className="swiper-slide">
                                      {/* <!-- Single Student Start --> */}
                                      <div className="single-student">
                                          <div className="student-images">
                                              <img src="assets/images/author/author-09.jpg" alt="Author" />
                                          </div>
                                          <div className="student-content">
                                              <h5 className="name">Beatrice Summers</h5>
                                              <span className="country"><img src="assets/images/flag/flag-1.png" alt="Flog" /> Brazil</span>
                                              <p>Data Science and Machine learning</p>
                                              <span className="date"><i className="icofont-ui-calendar"></i> 28.03.2021</span>
                                          </div>
                                      </div>
                                      {/* <!-- Single Student End --> */}
                                  </div>
                              </div>

                              <div className="students-arrow">
                                  {/* <!-- Add Pagination --> */}
                                  <div className="swiper-button-prev"><i className="icofont-rounded-left"></i></div>
                                  <div className="swiper-button-next"><i className="icofont-rounded-right"></i></div>
                              </div>
                          </div>
                      </div>
                      {/* <!-- Student's Wrapper End -->

                    

                      <!-- Student's Widget Start --> */}
                      <div className="students-widget">
                          <div className="row">
                              <div className="col-xxl-4">
                                  {/* <!-- Student's Widget Start --> */}
                                  <div className="single-student-widget widget-color-01">
                                      <h4 className="widget-title">95 Country</h4>

                                      <div className="widget-items">

                                          {/* <!-- Single Item Start --> */}
                                          <div className="single-item">
                                              <div className="item-flag">
                                                  <div className="flag">
                                                      <img src="assets/images/flag/flag-2.png" alt="Flag" />
                                                  </div>
                                                  <div className="title">Bangladesh</div>
                                              </div>
                                              <div className="item-bar">
                                                  <div className="bar-line" style={{width: "80%"}}></div>
                                              </div>
                                              <div className="item-percentage">
                                                  <p><span>80%</span> (722)</p>
                                              </div>
                                          </div>
                                          {/* <!-- Single Item End -->

                                          <!-- Single Item Start --> */}
                                          <div className="single-item">
                                              <div className="item-flag">
                                                  <div className="flag">
                                                      <img src="assets/images/flag/flag-3.png" alt="Flag" />
                                                  </div>
                                                  <div className="title">Pakistan</div>
                                              </div>
                                              <div className="item-bar">
                                                  <div className="bar-line" style={{width: "15%"}}></div>
                                              </div>
                                              <div className="item-percentage">
                                                  <p><span>15%</span> (284)</p>
                                              </div>
                                          </div>
                                          {/* <!-- Single Item End -->

                                          <!-- Single Item Start --> */}
                                          <div className="single-item">
                                              <div className="item-flag">
                                                  <div className="flag">
                                                      <img src="assets/images/flag/flag-4.png" alt="Flag" />
                                                  </div>
                                                  <div className="title">USA</div>
                                              </div>
                                              <div className="item-bar">
                                                  <div className="bar-line" style={{width: "30%"}}></div>
                                              </div>
                                              <div className="item-percentage">
                                                  <p><span>30%</span> (306)</p>
                                              </div>
                                          </div>
                                          {/* <!-- Single Item End -->

                                          <!-- Single Item Start --> */}
                                          <div className="single-item">
                                              <div className="item-flag">
                                                  <div className="flag">
                                                      <img src="assets/images/flag/flag-1.png" alt="Flag" />
                                                  </div>
                                                  <div className="title">Brazil</div>
                                              </div>
                                              <div className="item-bar">
                                                  <div className="bar-line" style={{width: "90%"}}></div>
                                              </div>
                                              <div className="item-percentage">
                                                  <p><span>90%</span> (835)</p>
                                              </div>
                                          </div>
                                          {/* <!-- Single Item End -->

                                          <!-- Single Item Start --> */}
                                          <div className="single-item">
                                              <div className="item-flag">
                                                  <div className="flag">
                                                      <img src="assets/images/flag/flag-5.png" alt="Flag" />
                                                  </div>
                                                  <div className="title">Belgium</div>
                                              </div>
                                              <div className="item-bar">
                                                  <div className="bar-line" style={{width: "10%"}}></div>
                                              </div>
                                              <div className="item-percentage">
                                                  <p><span>10%</span> (152)</p>
                                              </div>
                                          </div>
                                          {/* <!-- Single Item End --> */}

                                          {/* <!-- Single Item Start --> */}
                                          <div className="single-item">
                                              <div className="item-flag">
                                                  <div className="flag">
                                                      <img src="assets/images/flag/flag-6.png" alt="Flag" />
                                                  </div>
                                                  <div className="title">Azerbaijan</div>
                                              </div>
                                              <div className="item-bar">
                                                  <div className="bar-line" style={{width: "50%"}}></div>
                                              </div>
                                              <div className="item-percentage">
                                                  <p><span>50%</span> (635)</p>
                                              </div>
                                          </div>
                                          {/* <!-- Single Item End --> */}

                                      </div>

                                      {/* <!-- Page Pagination End --> */}
                                      <div className="page-pagination">
                                          <ul className="pagination justify-content-center">
                                              <li><a href="/"><i className="icofont-rounded-left"></i></a></li>
                                              <li><a className="active" href="/">1</a></li>
                                              <li><a href="/">2</a></li>
                                              <li><a href="/">3</a></li>
                                              <li><a href="/"><i className="icofont-rounded-right"></i></a></li>
                                          </ul>
                                      </div>
                                      {/* <!-- Page Pagination End --> */}
                                  </div>
                                  {/* <!-- Student's Widget End --> */}
                              </div>

                              <div className="col-xxl-4">
                                  {/* <!-- Student's Widget Start --> */}
                                  <div className="single-student-widget widget-color-02">
                                      <h4 className="widget-title">30 Languages</h4>

                                      <div className="widget-items">

                                          {/* <!-- Single Item Start --> */}
                                          <div className="single-item">
                                              <div className="title">1. English</div>
                                              <div className="item-bar">
                                                  <div className="bar-line" style={{width: "80%"}}></div>
                                              </div>
                                              <div className="item-percentage">
                                                  <p><span>80%</span> (538)</p>
                                              </div>
                                          </div>
                                          {/* <!-- Single Item End -->

                                          <!-- Single Item Start --> */}
                                          <div className="single-item">
                                              <div className="title">2. Spanish</div>
                                              <div className="item-bar">
                                                  <div className="bar-line" style={{width: "2.5%"}}></div>
                                              </div>
                                              <div className="item-percentage">
                                                  <p><span>2.5%</span> (189)</p>
                                              </div>
                                          </div>
                                          {/* <!-- Single Item End -->

                                          <!-- Single Item Start --> */}
                                          <div className="single-item">
                                              <div className="title">3. French</div>
                                              <div className="item-bar">
                                                  <div className="bar-line" style={{width: "6.8%"}}></div>
                                              </div>
                                              <div className="item-percentage">
                                                  <p><span>6.8%</span> (263)</p>
                                              </div>
                                          </div>
                                          {/* <!-- Single Item End -->

                                          <!-- Single Item Start --> */}
                                          <div className="single-item">
                                              <div className="title">4. Arabic</div>
                                              <div className="item-bar">
                                                  <div className="bar-line" style={{width: "92%"}}></div>
                                              </div>
                                              <div className="item-percentage">
                                                  <p><span>92%</span> (794)</p>
                                              </div>
                                          </div>
                                          {/* <!-- Single Item End -->

                                          <!-- Single Item Start --> */}
                                          <div className="single-item">
                                              <div className="title">5. Greek</div>
                                              <div className="item-bar">
                                                  <div className="bar-line" style={{width: "9.2%"}}></div>
                                              </div>
                                              <div className="item-percentage">
                                                  <p><span>9.2%</span> (212)</p>
                                              </div>
                                          </div>
                                          {/* <!-- Single Item End -->

                                          <!-- Single Item Start --> */}
                                          <div className="single-item">
                                              <div className="title">6. Russian</div>
                                              <div className="item-bar">
                                                  <div className="bar-line" style={{width: "83%"}}></div>
                                              </div>
                                              <div className="item-percentage">
                                                  <p><span>83%</span> (516)</p>
                                              </div>
                                          </div>
                                          {/* <!-- Single Item End --> */}

                                      </div>

                                      {/* <!-- Page Pagination End --> */}
                                      <div className="page-pagination">
                                          <ul className="pagination justify-content-center">
                                              <li><a href="/"><i className="icofont-rounded-left"></i></a></li>
                                              <li><a className="active" href="/">1</a></li>
                                              <li><a href="/">2</a></li>
                                              <li><a href="/">3</a></li>
                                              <li><a href="/"><i className="icofont-rounded-right"></i></a></li>
                                          </ul>
                                      </div>
                                      {/* <!-- Page Pagination End --> */}
                                  </div>
                                  {/* <!-- Student's Widget End --> */}
                              </div>

                              <div className="col-xxl-4">
                                  {/* <!-- Student's Widget Start --> */}
                                  <div className="single-student-widget widget-color-03">
                                      <h4 className="widget-title">Additional Student Interests</h4>

                                      <div className="widget-items">

                                          {/* <!-- Single Item Start --> */}
                                          <div className="single-item">
                                              <div className="title">1. WordPress</div>
                                              <div className="item-bar">
                                                  <div className="bar-line" style={{width: "80%"}}></div>
                                              </div>
                                              <div className="item-percentage">
                                                  <p><span>80%</span> (538)</p>
                                              </div>
                                          </div>
                                          {/* <!-- Single Item End --> */}

                                          {/* <!-- Single Item Start --> */}
                                          <div className="single-item">
                                              <div className="title">2. SEO</div>
                                              <div className="item-bar">
                                                  <div className="bar-line" style={{width: "25%"}}></div>
                                              </div>
                                              <div className="item-percentage">
                                                  <p><span>25%</span> (189)</p>
                                              </div>
                                          </div>
                                          {/* <!-- Single Item End -->

                                          <!-- Single Item Start --> */}
                                          <div className="single-item">
                                              <div className="title">3. Python</div>
                                              <div className="item-bar">
                                                  <div className="bar-line" style={{width: "60%"}}></div>
                                              </div>
                                              <div className="item-percentage">
                                                  <p><span>60%</span> (263)</p>
                                              </div>
                                          </div>
                                          {/* <!-- Single Item End -->

                                          <!-- Single Item Start --> */}
                                          <div className="single-item">
                                              <div className="title">4. Marketing</div>
                                              <div className="item-bar">
                                                  <div className="bar-line" style={{width: "92%"}}></div>
                                              </div>
                                              <div className="item-percentage">
                                                  <p><span>92%</span> (794)</p>
                                              </div>
                                          </div>
                                          {/* <!-- Single Item End -->

                                          <!-- Single Item Start --> */}
                                          <div className="single-item">
                                              <div className="title">5. Development</div>
                                              <div className="item-bar">
                                                  <div className="bar-line" style={{width: "39%"}}></div>
                                              </div>
                                              <div className="item-percentage">
                                                  <p><span>39%</span> (212)</p>
                                              </div>
                                          </div>
                                          {/* <!-- Single Item End -->

                                          <!-- Single Item Start --> */}
                                          <div className="single-item">
                                              <div className="title">6. UX Design</div>
                                              <div className="item-bar">
                                                  <div className="bar-line" style={{width: "83%"}}></div>
                                              </div>
                                              <div className="item-percentage">
                                                  <p><span>83%</span> (516)</p>
                                              </div>
                                          </div>
                                          {/* <!-- Single Item End --> */}
                                      </div>

                                      {/* <!-- Page Pagination End --> */}
                                      <div className="page-pagination">
                                          <ul className="pagination justify-content-center">
                                              <li><a href="/"><i className="icofont-rounded-left"></i></a></li>
                                              <li><a className="active" href="/">1</a></li>
                                              <li><a href="/">2</a></li>
                                              <li><a href="/">3</a></li>
                                              <li><a href="/"><i className="icofont-rounded-right"></i></a></li>
                                          </ul>
                                      </div>
                                      {/* <!-- Page Pagination End --> */}
                                  </div>
                                  {/* <!-- Student's Widget End --> */}
                              </div>
                          </div>
                      </div>
                      {/* <!-- Student's Widget End --> */}

                      {/* <!-- New Courses Start --> */}
                      <div className="new-courses" style={{backgroundImage: "url(assets/images/new-courses-banner.jpg)"}}>
                          <div className="new-courses-title">
                              <h3 className="title">Your students want to learn more. <br /> Consider creating new courses to meet that deman.</h3>
                          </div>
                          <img className="shape d-none d-xl-block" src="assets/images/shape/shape-27.png" alt="Shape" />
                          <div className="new-courses-btn">
                              <a href="/" className="btn">Create New Course <i className="icofont-rounded-right"></i></a>
                          </div>
                      </div>
                      {/* <!-- New Courses End --> */}

                  </div>
              </div>
              {/* <!-- Page Content Wrapper End --> */}
          </div>
      </div>
      {/* <!-- Courses Admin End --> */}
      <Footer />
    </div>
  );
}

export default Students;