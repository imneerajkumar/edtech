import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutEducator } from "../../store/actions/educatorAction";
import { Avatar } from "@mui/material";
import { AiOutlineUser } from 'react-icons/ai';
import { FiLogOut, FiMail, FiHeart } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import Chart from "react-apexcharts";
import Footer from '../Footer';

function Engagement(props) {
    const dispatch = useDispatch();
	const navigate = useNavigate();
    const educatorAuthReducer = useSelector((state) => state.educatorAuthReducer);
	const { educatorInfo, loading } = educatorAuthReducer;
	const [avatar, setAvatar] = useState("");
	
    useEffect(() => {
		if (educatorInfo) {
			setAvatar(educatorInfo.name.toUpperCase());
		}
	}, [educatorInfo, loading, avatar]);

    const logoutHandle = () => {
		if (educatorInfo) {
			dispatch(logoutEducator());
		}
		navigate("/");
	};

    const state = {
     options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Jan'22", "Feb'22", "Mar'22", "Apr'22", "May'22", "Jun'22", "Jul'22", "Aug'22", "Sep'22", "Oct'22", "Nov'22", "Dec'22"]
        },
        fill: {
            colors: ['#309255']
        }
      },
      series: [
        {
          name: "Minutes",
          data: [7000, 5500, 4500, 2800, 6200, 3800, 7000, 5500, 4500, 2800, 6200, 3800]
        }
      ]
    };

  return (
    <div className="main-wrapper main-wrapper-02">
         {/* <!-- Login Header Start --> */}
        <div className="section login-header" style={{backgroundColor: "#309255"}}>
            {/* <!-- Login Header Wrapper Start --> */}
            <div className="login-header-wrapper navbar navbar-expand">

                {/* <!-- Header Logo Start --> */}
                <div className="login-header-logo">
                    <a href="/"><img src="assets/images/logo-icon.png" alt="Logo" /></a>
                </div>
                {/* <!-- Header Logo End --> */}

                {/* <!-- Header Search Start --> */}
                <div className="login-header-search dropdown">
                    <div className="search-input dropdown-menu"></div>
                </div>
                {/* <!-- Header Search End --> */}

                {/* <!-- Header Action Start --> */}
                <div className="login-header-action ml-auto">
                    <div className="dropdown">
                        <button className="action notification" style={{display:"flex"}} data-bs-toggle="dropdown">
                            <FiMail color="white" />
                        </button>
                        <div className="dropdown-menu dropdown-notification">
                            <ul className="notification-items-list">
                                <li className="notification-item">
                                    <span className="notify-icon bg-success text-white"><i><AiOutlineUser /></i></span>
                                    <div className="dropdown-body">
                                        <span>
                                            <p><strong>Martin</strong> has added a <strong>customer</strong> Successfully
                                            </p>
                                        </span>
                                    </div>
                                    <span className="notify-time">3:20 am</span>
                                </li>
                                <li className="notification-item">
                                    <span className="notify-icon bg-success text-white"><i><AiOutlineUser /></i></span>
                                    <div className="dropdown-body">
                                        <span>
                                            <p><strong>Jennifer</strong> purchased Light Dashboard 2.0.</p>
                                        </span>
                                    </div>
                                    <span className="notify-time">3:20 am</span>
                                </li>
                                <li className="notification-item">
                                    <span className="notify-icon bg-danger text-white"><i><FiHeart /></i></span>
                                    <div className="dropdown-body">
                                        <span>
                                            <p><strong>Robin</strong> marked a <strong>ticket</strong> as unsolved.
                                            </p>
                                        </span>
                                    </div>
                                    <span className="notify-time">3:20 am</span>
                                </li>
                                <li className="notification-item">
                                    <span className="notify-icon bg-success text-white"><i><AiOutlineUser /></i></span>
                                    <div className="dropdown-body">
                                        <span>
                                            <p><strong>David</strong> purchased Light Dashboard 1.0.</p>
                                        </span>
                                    </div>
                                    <span className="notify-time">3:20 am</span>
                                </li>
                                <li className="notification-item">
                                    <span className="notify-icon bg-success text-white"><i><AiOutlineUser /></i></span>
                                    <div className="dropdown-body">
                                        <span>
                                            <p><strong> James.</strong> has added a<strong>customer</strong> Successfully
                                            </p>
                                        </span>
                                    </div>
                                    <span className="notify-time">3:20 am</span>
                                </li>
                            </ul>
                            <span className="all-notification">See all notifications</span>
                        </div>
                    </div>

                    <span className="action author">
                        <Avatar
                            sx={{
                                bgcolor: "#fff",
                                color: "#309255",
                                width: "60px",
                                height: "60px",
                                fontSize: "1.5rem",
                            }}
                        >{avatar.slice(0, 1)}
                        </Avatar>
                    </span>

                    <div className="dropdown">
                        <button className="action more" data-bs-toggle="dropdown">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <button 
                                    style={{ border: "none", backgroundColor: "#fff" }}
                                    onClick={() => navigate("/profile")}
                                >
                                    <AiOutlineUser />
                                    {"   "}{educatorInfo.name}
                                </button>
                            </li>
                            <li>
                                <button style={{border: "none", backgroundColor: "#fff"}} onClick={() => navigate('/messages')}>
                                    <FiMail />
                                    {"   "}Inbox
                                </button>
                            </li>
                            <li> 
                                <button style={{border: "none", backgroundColor: "#fff"}} onClick={logoutHandle}>
                                    <FiLogOut /> 
                                    {"   "}Log Out
                                </button>
                            </li>
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
            <div className="sidebar-wrapper" style={{backgroundColor: "#309255"}}>
                <div className="menu-list">
                    <Link to="/overview">
                        <img src="assets/images/menu-icon/icon-1.png" alt="Icon" />
                    </Link>
                    <Link to="/students">
                        <img src="assets/images/menu-icon/icon-2.png" alt="Icon" />
                    </Link>
                    <Link to="/reviews">
                        <img src="assets/images/menu-icon/icon-5.png" alt="Icon" />
                    </Link>
                    <Link to="/engagement" className="active">
                        <img src="assets/images/menu-icon/icon-3.png" alt="Icon" />
                    </Link>
                    <Link to="/admin">
                        <img src="assets/images/menu-icon/icon-4.png" alt="Icon" />
                    </Link>
                </div>
            </div>
            {/* <!-- Sidebar Wrapper End --> */}

            <div className="page-content-wrapper py-0">

                {/* <!-- Admin Tab Menu Start --> */}
                <div className="nav flex-column nav-pills admin-tab-menu">
                  <Link to="/overview">Overview</Link>
                  <Link to="/students">Student’s</Link>
                  <Link to="/reviews">Review’s</Link>
                  <Link to='/engagement' className='active'>Course Engagement</Link>
                  <Link to='/createMeet'>Start Live Class</Link>
                  <Link to="/add-course">Add a new Course</Link>
                </div>
                {/* <!-- Admin Tab Menu End --> */}

                {/* <!-- Page Content Wrapper Start --> */}
                <div className="main-content-wrapper">
                    <div className="container-fluid">

                        {/* <!-- Engagement Top Start --> */}
                        <div className="admin-top-bar">
                            <div className="courses-select">
                                <select className="nice-select">
                                    <option data-display="All Courses">All Courses</option>
                                    <option value="1">option</option>
                                    <option value="2">option</option>
                                    <option value="3">option</option>
                                    <option value="4">option</option>
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
                            <div className="mixed-chart">
                                <Chart
                                options={state.options}
                                series={state.series}
                                type="bar"
                                width="100%"
                                />
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
                                                <h4 className="title"><a href="/course-details">Build An eCommerce Site With WooCommerce and WooLentor</a></h4>
                                            </div>
                                        </div>
                                        <div className="taught">
                                            <span>11,001</span>
                                        </div>
                                        <div className="student">
                                            <span>520</span>
                                        </div>
                                        <div className="button">
                                            <a className="btn" href="/course-details">View Details</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="courses">
                                            <div className="thumb">
                                                <img src="assets/images/courses/admin-courses-01.jpg" alt="Courses" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title"><a href="/course-details">Build An WholeSale WooCommerce Store using Whols Plugin</a></h4>
                                            </div>
                                        </div>
                                        <div className="taught">
                                            <span>11,001</span>
                                        </div>
                                        <div className="student">
                                            <span>520</span>
                                        </div>
                                        <div className="button">
                                            <a className="btn" href="/course-details">View Details</a>
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