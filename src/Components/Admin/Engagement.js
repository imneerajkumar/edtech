import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLogOut, FiMail, FiSearch, FiHeart, FiMessageSquare } from 'react-icons/fi';
import Footer from '../Footer';

function Engagement(props) {
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

                        {/* <!-- Engagement Top Start --> */}
                        <div className="admin-top-bar">
                            <div className="courses-select">
                                <select>
                                    <option data-display="All Courses">All Courses</option>
                                    <option value="1">option</option>
                                    <option value="2">option</option>
                                    <option value="3">option</option>
                                    <option value="4">Potato</option>
                                </select>
                            </div>

                            <div className="engagement-meta">
                                <p className="meta"><img src="assets/images/icon/icon-1.png" alt="Icon" /> 11,001 Minutes Taught</p>
                                <p className="meta"><img src="assets/images/icon/icon-2.png" alt="Icon" /> 520 Active Students</p>
                            </div>
                        </div>
                        {/* <!-- Engagement Top End -->

                        <!-- Graph Top Start --> */}
                        <div className="graph">
                            <div className="graph-title">
                                <h4 className="title">Minutes Taught</h4>

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
                                <div id="uniqueVisits"></div>
                            </div>
                        </div>
                        {/* <!-- Graph Top End -->

                        <!-- Engagement Courses Start --> */}
                        <div className="engagement-courses">

                            <div className="courses-top">
                                <ul>
                                    <li>All Course’s</li>
                                    <li>Minutes Taught</li>
                                    <li>Active Student’s</li>
                                </ul>
                            </div>

                            <div className="courses-list">
                                <ul>
                                    <li>
                                        <div className="courses">
                                            <div className="thumb">
                                                <img src="assets/images/courses/admin-courses-01.jpg" alt="Courses" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title"><a href="/">Build An eCommerce Site With WooCommerce and WooLentor</a></h4>
                                            </div>
                                        </div>
                                        <div className="taught">
                                            <span>11,001</span>
                                        </div>
                                        <div className="student">
                                            <span>520</span>
                                        </div>
                                        <div className="button">
                                            <a className="btn" href="/">View Details</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="courses">
                                            <div className="thumb">
                                                <img src="assets/images/courses/admin-courses-01.jpg" alt="Courses" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title"><a href="/">Build An WholeSale WooCommerce Store using Whols Plugin</a></h4>
                                            </div>
                                        </div>
                                        <div className="taught">
                                            <span>11,001</span>
                                        </div>
                                        <div className="student">
                                            <span>520</span>
                                        </div>
                                        <div className="button">
                                            <a className="btn" href="/">View Details</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        {/* <!-- Engagement Courses End --> */}

                    </div>
                </div>
                {/* <!-- Page Content Wrapper End --> */}

            </div>
        {/* <!-- Courses Admin End --> */}
        </div>
        <Footer />
    </div>
  );
}

export default Engagement;