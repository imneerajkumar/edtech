import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutEducator } from "../../store/actions/educatorAction";
import { AiOutlineUser } from 'react-icons/ai';
import { FiLogOut, FiMail, FiHeart } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from "@mui/material";
import Chart from "react-apexcharts";
import Footer from '../Footer';

function Overview(props) {
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
        series: [{
            name: "Income: $",
            data: [200, 410, 355, 515, 495, 623, 691, 381, 248, 438, 360, 235]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Earnings in each month',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#E5F4EB', 'transparent'],
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          colors: ['#309255']
        },  
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
                                <button style={{border: "none", backgroundColor: "#fff"}}>
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
                    <Link to="/overview" className="active">
                        <img src="assets/images/menu-icon/icon-1.png" alt="Icon" />
                    </Link>
                    <Link to="/students">
                        <img src="assets/images/menu-icon/icon-2.png" alt="Icon" />
                    </Link>
                    <Link to="/reviews">
                        <img src="assets/images/menu-icon/icon-5.png" alt="Icon" />
                    </Link>
                    <Link to="/engagement">
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
                  <Link to="/overview" className='active'>Overview</Link>
                  <Link to="/students">Student’s</Link>
                  <Link to="/reviews">Review’s</Link>
                  <Link to='/engagement'>Course Engagement</Link>
                  <Link to='/createMeet'>Start Live Class</Link>
                </div>
                {/* <!-- Admin Tab Menu End -->

                <!-- Page Content Wrapper Start --> */}
                <div className="main-content-wrapper">
                    <div className="container-fluid">
                        <div className="overview-box">
                            <div className="single-box">
                                <h5 className="title">Total Revenue</h5>
                                <div className="count">$5680.00</div>
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
                                <p><span>58</span> This month</p>
                            </div>
                        </div>

                        <div className="graph">
                            <div className="mixed-chart">
                                <Chart
                                    options={state.options}
                                    series={state.series}
                                    type="line" 
                                    height={350}
                                    width="100%"
                                />
                            </div>
                        </div>

                        {/*<!-- Engagement Courses End --> */}
                        <div className="engagement-courses table-responsive">

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
                                            <button className="btn">View Details</button>
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
                                            <button className="btn">View Details</button>
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
        </div>
        {/* <!-- Courses Admin End --> */}
        <Footer />
    </div>
  );
}

export default Overview;