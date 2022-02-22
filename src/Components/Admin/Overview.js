import React from 'react';
import Footer from '../Footer';

function Overview(props) {
  return (
    <div className="main-wrapper main-wrapper-02">

        {/* <!-- Login Header Start --> */}
        <div className="section login-header">
            {/* <!-- Login Header Wrapper Start --> */}
            <div className="login-header-wrapper navbar navbar-expand">
                {/* <!-- Header Logo Start -->  */}
                <div className="login-header-logo">
                    <a href="/"><img src="assets/images/logo-icon.png" alt="Logo" /></a>
                </div>
                {/* <!-- Header Logo End -->

                <!-- Header Search Start --> */}
                <div className="login-header-search dropdown">
                    <button className="search-toggle" data-bs-toggle="dropdown"><i className="flaticon-loupe"></i></button>

                    <div className="search-input dropdown-menu">
                        <form action="#">
                            <input type="text" placeholder="Search here" />
                        </form>
                    </div>

                </div>
                {/* <!-- Header Search End -->

                <!-- Header Action Start --> */}
                <div className="login-header-action ml-auto">
                    <div className="dropdown">
                        <button className="action notification" data-bs-toggle="dropdown">
                            <i className="flaticon-notification"></i>
                            <span className="active"></span>
                        </button>
                        <div className="dropdown-menu dropdown-notification">
                            <ul className="notification-items-list">
                                <li className="notification-item">
                                    <span className="notify-icon bg-success text-white"><i className="icofont-ui-user"></i></span>
                                    <div className="dropdown-body">
                                        <a href="/">
                                            <p><strong>Martin</strong> has added a <strong>customer</strong> Successfully
                                            </p>
                                        </a>
                                    </div>
                                    <span className="notify-time">3:20 am</span>
                                </li>
                                <li className="notification-item">
                                    <span className="notify-icon bg-success text-white"><i className="icofont-shopping-cart"></i></span>
                                    <div className="dropdown-body">
                                        <a href="/">
                                            <p><strong>Jennifer</strong> purchased Light Dashboard 2.0.</p>
                                        </a>
                                    </div>
                                    <span className="notify-time">3:20 am</span>
                                </li>
                                <li className="notification-item">
                                    <span className="notify-icon bg-danger text-white"><i className="icofont-book-mark"></i></span>
                                    <div className="dropdown-body">
                                        <a href="/">
                                            <p><strong>Robin</strong> marked a <strong>ticket</strong> as unsolved.
                                            </p>
                                        </a>
                                    </div>
                                    <span className="notify-time">3:20 am</span>
                                </li>
                                <li className="notification-item">
                                    <span className="notify-icon bg-success text-white"><i className="icofont-heart-alt"></i></span>
                                    <div className="dropdown-body">
                                        <a href="/">
                                            <p><strong>David</strong> purchased Light Dashboard 1.0.</p>
                                        </a>
                                    </div>
                                    <span className="notify-time">3:20 am</span>
                                </li>
                                <li className="notification-item">
                                    <span className="notify-icon bg-success text-white"><i className="icofont-image"></i></span>
                                    <div className="dropdown-body">
                                        <a href="/">
                                            <p><strong> James.</strong> has added a<strong>customer</strong> Successfully
                                            </p>
                                        </a>
                                    </div>
                                    <span className="notify-time">3:20 am</span>
                                </li>
                            </ul>
                            <a className="all-notification" href="/">See all notifications <i className="icofont-simple-right"></i></a>
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
                            <li><a className="" href="/"><i className="icofont-user"></i> Profile</a></li>
                            <li><a className="" href="/"><i className="icofont-inbox"></i> Inbox</a></li>
                            <li><a className="" href="/"><i className="icofont-logout"></i> Sign Out</a></li>
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
                <div className="nav flex-column nav-pills admin-tab-menu">
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

                        {/* <!-- Overview Top Start --> */}
                        <div className="admin-top-bar flex-wrap">
                            <div className="courses-select">
                                <select>
                                    <option data-display="All Courses">All Courses</option>
                                    <option value="1">option</option>
                                    <option value="2">option</option>
                                    <option value="3">option</option>
                                    <option value="4">Potato</option>
                                </select>
                            </div>

                            <div className="overview-box">
                                <div className="single-box">
                                    <h5 className="title">Total Revenue</h5>
                                    <div className="count">$568.00</div>
                                    <p><span>$235.00</span> This months</p>
                                </div>

                                <div className="single-box">
                                    <h5 className="title">Total Enrollment’s</h5>
                                    <div className="count">2,570</div>
                                    <p><span>345</span> This months</p>
                                </div>

                                <div className="single-box">
                                    <h5 className="title">Instgructor Rating</h5>
                                    <div className="count">
                                        4.5

                                        <span className="rating-star">
												<span className="rating-bar" style={{width: "80%"}}></span>
                                        </span>
                                    </div>
                                    <p><span>58</span> This months</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Overview Top End -->

                        <!-- Graph Top Start --> */}
                        <div className="graph">
                            <div className="graph-title">
                                <h4 className="title">Get top insights about your performance</h4>

                                <div className="months-select">
                                    <select>
                                        <option data-display="Last 12 months">Last 12 months</option>
                                        <option value="1">Last 6 months</option>
                                        <option value="1">Last 3 months</option>
                                        <option value="1">Last 2 months</option>
                                        <option value="1">Last 1 months</option>
                                        <option value="1">Last 1 week</option>
                                    </select>
                                </div>
                            </div>

                            <div className="graph-content">
                                <div id="uniqueReport"></div>
                            </div>

                            <div className="graph-btn">
                                <a className="btn btn-primary btn-hover-dark" href="/">Revenue Report <i className="icofont-rounded-down"></i></a>
                            </div>
                        </div>
                        {/* <!-- Graph Top End --> */}

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

export default Overview;