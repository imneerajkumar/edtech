import React from 'react';
import Footer from '../Footer';

function CourseAdmin(props) {
  return (
    <div className="main-wrapper main-wrapper-02">

        {/* <!-- Login Header Start --> */}
        <div className="section login-header">
            {/* <!-- Login Header Wrapper Start --> */}
            <div className="login-header-wrapper navbar navbar-expand">

                {/* <!-- Header Logo Start --> */}
                <div className="login-header-logo">
                    <a href="index.html"><img src="assets/images/logo-icon.png" alt="Logo" /></a>
                </div>
                {/* <!-- Header Logo End --> */}

                {/* <!-- Header Search Start --> */}
                <div className="login-header-search dropdown">
                    <button className="search-toggle" data-bs-toggle="dropdown"><i className="flaticon-loupe"></i></button>

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

            {/* <!-- Page Content Wrapper Start --> */}
            <div className="page-content-wrapper">
                <div className="container-fluid custom-container">

                    {/* <!-- Message Start --> */}
                    <div className="message">
                        <div className="message-icon">
                            <img src="assets/images/menu-icon/icon-6.png" alt="" />
                        </div>
                        <div className="message-content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                        </div>
                    </div>
                    {/* <!-- Message End --> */}

                    {/* <!-- Admin Courses Tab Start --> */}
                    <div className="admin-courses-tab">
                        <h3 className="title">Courses</h3>

                        <div className="courses-tab-wrapper">
                            <div className="courses-select">
                                <select>
                                    <option data-display="Newest First">Newest First</option>
                                    <option value="1">Oldest First</option>
                                </select>
                            </div>
                            <ul className="nav">
                                <li><button className="active" data-bs-toggle="tab" data-bs-target="#tab1"><i className="icofont-justify-left"></i></button></li>
                                <li><button data-bs-toggle="tab" data-bs-target="#tab2"><i className="icofont-align-left"></i></button></li>
                                <li><button data-bs-toggle="tab" data-bs-target="#tab3"><i className="icofont-eye-blocked"></i></button></li>
                            </ul>
                            <div className="tab-btn">
                                <a href="/" className="btn btn-primary btn-hover-dark">New Course</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Admin Courses Tab End -->

                    <!-- Admin Courses Tab Content Start --> */}
                    <div className="admin-courses-tab-content">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="tab1">

                                {/* <!-- Courses Item Start --> */}
                                <div className="courses-item">
                                    <div className="item-thumb">
                                        <a href="/">
                                            <img src="assets/images/courses/admin-courses-01.jpg" alt="Courses" />
                                        </a>
                                    </div>

                                    <div className="content-title">
                                        <div className="meta">
                                            <a href="/" className="action">Live</a>
                                            <a href="/" className="action">Free</a>
                                            <a href="/" className="action">Public</a>
                                        </div>
                                        <h3 className="title"><a href="/">Build An eCommerce Site With WooCommerce and WooLentor.</a></h3>
                                    </div>

                                    <div className="content-wrapper">

                                        <div className="content-box">
                                            <p>Earned</p>
                                            <span className="count">$5,68.00</span>
                                        </div>

                                        <div className="content-box">
                                            <p>Enrollment’s</p>
                                            <span className="count">1,852</span>
                                        </div>

                                        <div className="content-box">
                                            <p>Course Rating</p>
                                            <span className="count">
													4.5
													<span className="rating-star">
														<span className="rating-bar" style={{width: "80%"}}></span>
                                            </span>
                                            </span>
                                        </div>

                                        <div className="courses-select">
                                            <select>
                                                <option data-display="This Month">This Month</option>
                                                <option value="1">This Year</option>
                                                <option value="2">This Week</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                {/* <!-- Courses Item End -->

                                <!-- Courses Item Start --> */}
                                <div className="courses-item">
                                    <div className="item-thumb">
                                        <a href="/">
                                            <img src="assets/images/courses/admin-courses-01.jpg" alt="Courses" />
                                        </a>
                                    </div>

                                    <div className="content-title">
                                        <div className="meta">
                                            <a href="/" className="action">Live</a>
                                            <a href="/" className="action">Free</a>
                                            <a href="/" className="action">Public</a>
                                        </div>
                                        <h3 className="title"><a href="/">Build An eCommerce Site With WooCommerce and WooLentor.</a></h3>
                                    </div>

                                    <div className="content-wrapper">

                                        <div className="content-box">
                                            <p>Earned</p>
                                            <span className="count">$5,68.00</span>
                                        </div>

                                        <div className="content-box">
                                            <p>Enrollment’s</p>
                                            <span className="count">1,852</span>
                                        </div>

                                        <div className="content-box">
                                            <p>Course Rating</p>
                                            <span className="count">
													4.5
													<span className="rating-star">
														<span className="rating-bar" style={{width: "80%"}}></span>
                                            </span>
                                            </span>
                                        </div>

                                        <div className="courses-select">
                                            <select>
                                                <option data-display="This Month">This Month</option>
                                                <option value="1">This Year</option>
                                                <option value="2">This Week</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                {/* <!-- Courses Item End -->

                                <!-- Courses Item Start --> */}
                                <div className="courses-item">
                                    <div className="item-thumb">
                                        <a href="/">
                                            <img src="assets/images/courses/admin-courses-01.jpg" alt="Courses" />
                                        </a>
                                    </div>

                                    <div className="content-title">
                                        <div className="meta">
                                            <a href="/" className="action">Live</a>
                                            <a href="/" className="action">Free</a>
                                            <a href="/" className="action">Public</a>
                                        </div>
                                        <h3 className="title"><a href="/">Build An eCommerce Site With WooCommerce and WooLentor.</a></h3>
                                    </div>

                                    <div className="content-wrapper">

                                        <div className="content-box">
                                            <p>Earned</p>
                                            <span className="count">$5,68.00</span>
                                        </div>

                                        <div className="content-box">
                                            <p>Enrollment’s</p>
                                            <span className="count">1,852</span>
                                        </div>

                                        <div className="content-box">
                                            <p>Course Rating</p>
                                            <span className="count">
													4.5
													<span className="rating-star">
														<span className="rating-bar" style={{width: "80%"}}></span>
                                            </span>
                                            </span>
                                        </div>

                                        <div className="courses-select">
                                            <select>
                                                <option data-display="This Month">This Month</option>
                                                <option value="1">This Year</option>
                                                <option value="2">This Week</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                {/* <!-- Courses Item End --> */}

                            </div>
                            <div className="tab-pane fade" id="tab2">

                                {/* <!-- Courses Item Start --> */}
                                <div className="courses-item">
                                    <div className="item-thumb">
                                        <a href="/">
                                            <img src="assets/images/courses/admin-courses-01.jpg" alt="Courses" />
                                        </a>
                                    </div>

                                    <div className="content-title">
                                        <div className="meta">
                                            <a href="/" className="action">Live</a>
                                            <a href="/" className="action">Free</a>
                                            <a href="/" className="action">Public</a>
                                        </div>
                                        <h3 className="title"><a href="/">Build An eCommerce Site With WooCommerce and WooLentor.</a></h3>
                                    </div>

                                    <div className="content-wrapper">

                                        <div className="content-box">
                                            <p>Earned</p>
                                            <span className="count">$5,68.00</span>
                                        </div>

                                        <div className="content-box">
                                            <p>Enrollment’s</p>
                                            <span className="count">1,852</span>
                                        </div>

                                        <div className="content-box">
                                            <p>Course Rating</p>
                                            <span className="count">
													4.5
													<span className="rating-star">
														<span className="rating-bar" style={{width: "80%"}}></span>
                                            </span>
                                            </span>
                                        </div>

                                        <div className="courses-select">
                                            <select>
                                                <option data-display="This Month">This Month</option>
                                                <option value="1">This Year</option>
                                                <option value="2">This Week</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                {/* <!-- Courses Item End -->

                                <!-- Courses Item Start --> */}
                                <div className="courses-item">
                                    <div className="item-thumb">
                                        <a href="/">
                                            <img src="assets/images/courses/admin-courses-01.jpg" alt="Courses" />
                                        </a>
                                    </div>

                                    <div className="content-title">
                                        <div className="meta">
                                            <a href="/" className="action">Live</a>
                                            <a href="/" className="action">Free</a>
                                            <a href="/" className="action">Public</a>
                                        </div>
                                        <h3 className="title"><a href="/">Build An eCommerce Site With WooCommerce and WooLentor.</a></h3>
                                    </div>

                                    <div className="content-wrapper">

                                        <div className="content-box">
                                            <p>Earned</p>
                                            <span className="count">$5,68.00</span>
                                        </div>

                                        <div className="content-box">
                                            <p>Enrollment’s</p>
                                            <span className="count">1,852</span>
                                        </div>

                                        <div className="content-box">
                                            <p>Course Rating</p>
                                            <span className="count">
													4.5
													<span className="rating-star">
														<span className="rating-bar" style={{width: "80%"}}></span>
                                            </span>
                                            </span>
                                        </div>

                                        <div className="courses-select">
                                            <select>
                                                <option data-display="This Month">This Month</option>
                                                <option value="1">This Year</option>
                                                <option value="2">This Week</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                {/* <!-- Courses Item End -->

                                <!-- Courses Item Start --> */}
                                <div className="courses-item">
                                    <div className="item-thumb">
                                        <a href="/">
                                            <img src="assets/images/courses/admin-courses-01.jpg" alt="Courses" />
                                        </a>
                                    </div>

                                    <div className="content-title">
                                        <div className="meta">
                                            <a href="/" className="action">Live</a>
                                            <a href="/" className="action">Free</a>
                                            <a href="/" className="action">Public</a>
                                        </div>
                                        <h3 className="title"><a href="/">Build An eCommerce Site With WooCommerce and WooLentor.</a></h3>
                                    </div>

                                    <div className="content-wrapper">

                                        <div className="content-box">
                                            <p>Earned</p>
                                            <span className="count">$5,68.00</span>
                                        </div>

                                        <div className="content-box">
                                            <p>Enrollment’s</p>
                                            <span className="count">1,852</span>
                                        </div>

                                        <div className="content-box">
                                            <p>Course Rating</p>
                                            <span className="count">
													4.5
													<span className="rating-star">
														<span className="rating-bar" style={{width: "80%"}}></span>
                                            </span>
                                            </span>
                                        </div>

                                        <div className="courses-select">
                                            <select>
                                                <option data-display="This Month">This Month</option>
                                                <option value="1">This Year</option>
                                                <option value="2">This Week</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                {/* <!-- Courses Item End --> */}

                            </div>
                            <div className="tab-pane fade" id="tab3">

                                {/* <!-- Courses Item Start --> */}
                                <div className="courses-item">
                                    <div className="item-thumb">
                                        <a href="/">
                                            <img src="assets/images/courses/admin-courses-01.jpg" alt="Courses" />
                                        </a>
                                    </div>

                                    <div className="content-title">
                                        <div className="meta">
                                            <a href="/" className="action">Live</a>
                                            <a href="/" className="action">Free</a>
                                            <a href="/" className="action">Public</a>
                                        </div>
                                        <h3 className="title"><a href="/">Build An eCommerce Site With WooCommerce and WooLentor.</a></h3>
                                    </div>

                                    <div className="content-wrapper">

                                        <div className="content-box">
                                            <p>Earned</p>
                                            <span className="count">$5,68.00</span>
                                        </div>

                                        <div className="content-box">
                                            <p>Enrollment’s</p>
                                            <span className="count">1,852</span>
                                        </div>

                                        <div className="content-box">
                                            <p>Course Rating</p>
                                            <span className="count">
													4.5
													<span className="rating-star">
														<span className="rating-bar" style={{width: "80%"}}></span>
                                            </span>
                                            </span>
                                        </div>

                                        <div className="courses-select">
                                            <select>
                                                <option data-display="This Month">This Month</option>
                                                <option value="1">This Year</option>
                                                <option value="2">This Week</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                {/* <!-- Courses Item End -->

                                <!-- Courses Item Start -->
                                <div className="courses-item"> */}
                                    <div className="item-thumb">
                                        <a href="/">
                                            <img src="assets/images/courses/admin-courses-01.jpg" alt="Courses" />
                                        </a>
                                    </div>

                                    <div className="content-title">
                                        <div className="meta">
                                            <a href="/" className="action">Live</a>
                                            <a href="/" className="action">Free</a>
                                            <a href="/" className="action">Public</a>
                                        </div>
                                        <h3 className="title"><a href="/">Build An eCommerce Site With WooCommerce and WooLentor.</a></h3>
                                    </div>

                                    <div className="content-wrapper">

                                        <div className="content-box">
                                            <p>Earned</p>
                                            <span className="count">$5,68.00</span>
                                        </div>

                                        <div className="content-box">
                                            <p>Enrollment’s</p>
                                            <span className="count">1,852</span>
                                        </div>

                                        <div className="content-box">
                                            <p>Course Rating</p>
                                            <span className="count">
													4.5
													<span className="rating-star">
														<span className="rating-bar" style={{width: "80%"}}></span>
                                            </span>
                                            </span>
                                        </div>

                                        <div className="courses-select">
                                            <select>
                                                <option data-display="This Month">This Month</option>
                                                <option value="1">This Year</option>
                                                <option value="2">This Week</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                {/* <!-- Courses Item End -->

                                <!-- Courses Item Start --> */}
                                <div className="courses-item">
                                    <div className="item-thumb">
                                        <a href="/">
                                            <img src="assets/images/courses/admin-courses-01.jpg" alt="Courses" />
                                        </a>
                                    </div>

                                    <div className="content-title">
                                        <div className="meta">
                                            <a href="/" className="action">Live</a>
                                            <a href="/" className="action">Free</a>
                                            <a href="/" className="action">Public</a>
                                        </div>
                                        <h3 className="title"><a href="/">Build An eCommerce Site With WooCommerce and WooLentor.</a></h3>
                                    </div>

                                    <div className="content-wrapper">

                                        <div className="content-box">
                                            <p>Earned</p>
                                            <span className="count">$5,68.00</span>
                                        </div>

                                        <div className="content-box">
                                            <p>Enrollment’s</p>
                                            <span className="count">1,852</span>
                                        </div>

                                        <div className="content-box">
                                            <p>Course Rating</p>
                                            <span className="count">
													4.5
													<span className="rating-star">
														<span className="rating-bar" style={{width: "80%"}}></span>
                                            </span>
                                            </span>
                                        </div>

                                        <div className="courses-select">
                                            <select>
                                                <option data-display="This Month">This Month</option>
                                                <option value="1">This Year</option>
                                                <option value="2">This Week</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                {/* <!-- Courses Item End --> */}

                            </div>
                        </div>
                    </div>
                    {/* <!-- Admin Courses Tab Content End --> */}

                    {/* <!-- Courses Resources Start --> */}
                    <div className="courses-resources">
                        <h4 className="title">Here are our most popular instructor resources.</h4>

                        {/* <!-- Resources Wrapper Start --> */}
                        <div className="resources-wrapper">
                            <div className="row row-cols-xl-6 row-cols-md-3 row-cols-2">
                                <div className="col">

                                    {/* <!-- Single Resources Start --> */}
                                    <div className="single-resources">
                                        <div className="resources-icon">
                                            <a href="/">
                                                <img src="assets/images/resources-icon/icon-1-1.png" alt="Icon" />
                                                <img className="hover" src="assets/images/resources-icon/icon-2-1.png" alt="Icon" />
                                            </a>
                                        </div>
                                        <h5 className="title"><a href="/">Test Video</a></h5>
                                    </div>
                                    {/* <!-- Single Resources Start --> */}

                                </div>
                                <div className="col">

                                    {/* <!-- Single Resources Start --> */}
                                    <div className="single-resources">
                                        <div className="resources-icon">
                                            <a href="/">
                                                <img src="assets/images/resources-icon/icon-1-2.png" alt="Icon" />
                                                <img className="hover" src="assets/images/resources-icon/icon-2-2.png" alt="Icon" />
                                            </a>
                                        </div>
                                        <h5 className="title"><a href="/">Community</a></h5>
                                    </div>
                                    {/* <!-- Single Resources Start --> */}

                                </div>
                                <div className="col">

                                    {/* <!-- Single Resources Start --> */}
                                    <div className="single-resources">
                                        <div className="resources-icon">
                                            <a href="/">
                                                <img src="assets/images/resources-icon/icon-1-3.png" alt="Icon" />
                                                <img className="hover" src="assets/images/resources-icon/icon-2-3.png" alt="Icon" />
                                            </a>
                                        </div>
                                        <h5 className="title"><a href="/">Teaching Center</a></h5>
                                    </div>
                                    {/* <!-- Single Resources Start --> */}

                                </div>
                                <div className="col">

                                    {/* <!-- Single Resources Start --> */}
                                    <div className="single-resources">
                                        <div className="resources-icon">
                                            <a href="/">
                                                <img src="assets/images/resources-icon/icon-1-4.png" alt="Icon" />
                                                <img className="hover" src="assets/images/resources-icon/icon-2-4.png" alt="Icon" />
                                            </a>
                                        </div>
                                        <h5 className="title"><a href="/">Insight Courses</a></h5>
                                    </div>
                                    {/* <!-- Single Resources Start --> */}

                                </div>
                                <div className="col">

                                    {/* <!-- Single Resources Start --> */}
                                    <div className="single-resources">
                                        <div className="resources-icon">
                                            <a href="/">
                                                <img src="assets/images/resources-icon/icon-1-5.png" alt="Icon" />
                                                <img className="hover" src="assets/images/resources-icon/icon-2-5.png" alt="Icon" />
                                            </a>
                                        </div>
                                        <h5 className="title"><a href="/">Help & Support</a></h5>
                                    </div>
                                    {/* <!-- Single Resources Start --> */}

                                </div>
                                <div className="col">

                                    {/* <!-- Single Resources Start --> */}
                                    <div className="single-resources">
                                        <div className="resources-icon">
                                            <a href="/">
                                                <img src="assets/images/resources-icon/icon-1-6.png" alt="Icon" />
                                                <img className="hover" src="assets/images/resources-icon/icon-2-6.png" alt="Icon" />
                                            </a>
                                        </div>
                                        <h5 className="title"><a href="/">Insight Courses</a></h5>
                                    </div>
                                    {/* <!-- Single Resources Start --> */}

                                </div>
                            </div>
                        </div>
                        {/* <!-- Resources Wrapper End --> */}

                    </div>
                    {/* <!-- Courses Resources End --> */}

                </div>
            </div>
            {/* <!-- Page Content Wrapper End --> */}
        {/* <!-- Courses Admin End --> */}

        <Footer />
    </div>
  );
}

export default CourseAdmin;