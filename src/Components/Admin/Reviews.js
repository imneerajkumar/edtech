import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutEducator } from "../../store/actions/educatorAction";
import { AiFillFlag, AiOutlineUser } from 'react-icons/ai';
import { FiLogOut, FiMail, FiHeart } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from "@mui/material";
import Footer from '../Footer';

function Reviews(props) {
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
                        <button className="action notification" data-bs-toggle="dropdown">
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
                    <Link to="/admin"><img src="assets/images/menu-icon/icon-5.png" alt="Icon" /></Link>
                    <Link to="/messages"><img src="assets/images/menu-icon/icon-2.png" alt="Icon" /></Link>
                    <Link to="/overview"><img src="assets/images/menu-icon/icon-4.png" alt="Icon" /></Link>
                    <Link to="/students"><img src="assets/images/menu-icon/icon-1.png" alt="Icon" /></Link>
                    <Link to="/engagement"><img src="assets/images/menu-icon/icon-3.png" alt="Icon" /></Link>
                </div>
            </div>
            {/* <!-- Sidebar Wrapper End --> */}

          <div className="page-content-wrapper py-0">
              {/* <!-- Admin Tab Menu Start --> */}
              <div className="nav flex-column nav-pills admin-tab-menu">
                  <Link to="/overview">Overview</Link>
                  <Link to="/students">Student’s</Link>
                  <Link to="/reviews" className='active'>Review’s</Link>
                  <Link to='/engagement'>Course Engagement</Link>
              </div>
              {/* <!-- Admin Tab Menu End -->

              <!-- Page Content Wrapper Start --> */}
              <div className="main-content-wrapper">
                  <div className="container-fluid">

                      {/* <!-- Admin Top Bar Start --> */}
                      <div className="admin-top-bar flex-wrap">

                          <div className="top-bar-filter">
                              <ul className="filter-check">
                                  <li>
                                      <div>
                                          <select>
                                              <option data-display="All Courses">All Courses</option>
                                              <option value="1">option</option>
                                              <option value="2">option</option>
                                              <option value="3">option</option>
                                              <option value="4">option</option>
                                          </select>
                                      </div>
                                  </li>
                                  <li>
                                      <input type="checkbox" id="answered" />
                                      <label for="answered"><span></span> Not Answered</label>
                                  </li>
                                  <li>
                                      <input type="checkbox" id="comment" />
                                      <label for="comment"><span></span> Comment</label>
                                  </li>
                                  <li>
                                      <label>Rating:</label>{"  "}
                                      <div className="rating-select">
                                          <select>
                                              <option data-display="All">All</option>
                                              <option value="1">5 Star</option>
                                              <option value="2">4 Star</option>
                                              <option value="3">3 Star</option>
                                              <option value="4">2 Star</option>
                                              <option value="5">1 Star</option>
                                          </select>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      {/* <!-- Admin Top Bar End -->

                      <!-- Message Start --> */}
                      <div className="message mt-8">
                          <div className="message-icon">
                              <img src="assets/images/menu-icon/icon-6.png" alt="" />
                          </div>
                          <div className="message-content">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                          </div>
                      </div>
                      {/* <!-- Message End -->

                      <!-- Courses Rating Wrapper Start --> */}
                      <div className="courses-rating-wrapper">

                          {/* <!-- Single Courses Rating Start --> */}
                          <div className="single-courses-rating">

                              {/* <!-- Courses Start --> */}
                              <div className="courses">
                                  <div className="courses-thumb">
                                      <a href="/course-details"><img src="assets/images/courses/admin-courses-01.jpg" alt="Courses" /></a>
                                  </div>
                                  <div className="courses-content">
                                      <h4 className="title"><a href="/course-details">Build An eCommerce Site With WooCommerce and WooLentor.</a></h4>
                                      <div className="average-rating">
                                          <span className="label">Course Rating:</span>
                                          <span className="count">
                        4.5 

                        <span className="rating-star">
                          <span className="rating-bar" style={{width: "80%"}}></span>
                                          </span>
                                          </span>
                                      </div>
                                  </div>
                                  <div className="courses-btn">
                                      <button className="btn btn-primary">View Summary</button>
                                  </div>
                              </div>
                              {/* <!-- Courses End -->

                              <!-- Rating Start --> */}
                              <div className="rating">
                                  <div className="rating-author">
                                      <img src="assets/images/author/author-12.jpg" alt="Author" />
                                  </div>
                                  <div className="rating-content">
                                      <h4 className="name">Natosha Sibley</h4>
                                      <span className="date">Updated: March 28, 2021</span>

                                      <div className="average-rating">
                                          <span className="rating-star">
                        <span className="rating-bar" style={{width: "80%"}}></span>
                                          </span>
                                      </div>

                                      <button className="btn">Respond</button>
                                  </div>
                                  <i className="waving"><AiFillFlag /></i>
                              </div>
                              {/* <!-- Rating End --> */}

                          </div>
                          {/* <!-- Single Courses Rating End -->

                          <!-- Single Courses Rating Start --> */}
                          <div className="single-courses-rating">

                              {/* <!-- Courses Start --> */}
                              <div className="courses">
                                  <div className="courses-thumb">
                                      <a href="/course-details"><img src="assets/images/courses/admin-courses-01.jpg" alt="Courses" /></a>
                                  </div>
                                  <div className="courses-content">
                                      <h4 className="title"><a href="/course-details">Build An WholeSale WooCommerce Store using Whols Plugin</a></h4>
                                      <div className="average-rating">
                                          <span className="label">Course Rating:</span>
                                          <span className="count">
                        4.5 

                        <span className="rating-star">
                          <span className="rating-bar" style={{width: "80%"}}></span>
                                          </span>
                                          </span>
                                      </div>
                                  </div>
                                  <div className="courses-btn">
                                      <button className="btn btn-primary">View Summary</button>
                                  </div>
                              </div>
                              {/* <!-- Courses End -->

                              <!-- Rating Start --> */}
                              <div className="rating">
                                  <div className="rating-author">
                                      <img src="assets/images/author/author-13.jpg" alt="Author" />
                                  </div>
                                  <div className="rating-content">
                                      <h4 className="name">Clarine Sander</h4>
                                      <span className="date">Updated: March 28, 2021</span>

                                      <div className="average-rating">
                                          <span className="rating-star">
                        <span className="rating-bar" style={{width: "80%"}}></span>
                                          </span>
                                      </div>

                                      <button className="btn">Respond</button>
                                  </div>
                                   <i className="waving"><AiFillFlag /></i>
                              </div>
                              {/* <!-- Rating End --> */}
                          </div>
                          {/* <!-- Single Courses Rating End -->

                          <!-- Single Courses Rating Start --> */}
                          <div className="single-courses-rating">

                              {/* <!-- Courses Start --> */}
                              <div className="courses">
                                  <div className="courses-thumb">
                                      <a href="/course-details"><img src="assets/images/courses/admin-courses-01.jpg" alt="Courses" /></a>
                                  </div>
                                  <div className="courses-content">
                                      <h4 className="title"><a href="/course-details">Build An WholeSale WooCommerce Store using Whols Plugin</a></h4>
                                      <div className="average-rating">
                                          <span className="label">Course Rating:</span>
                                          <span className="count">
                        4.5 

                        <span className="rating-star">
                          <span className="rating-bar" style={{width: "80%"}}></span>
                                          </span>
                                          </span>
                                      </div>
                                  </div>
                                  <div className="courses-btn">
                                      <button className="btn btn-primary">View Summary</button>
                                  </div>
                              </div>
                              {/* <!-- Courses End -->

                              <!-- Rating Start --> */}
                              <div className="rating">
                                  <div className="rating-author">
                                      <img src="assets/images/author/author-14.jpg" alt="Author" />
                                  </div>
                                  <div className="rating-content">
                                      <h4 className="name">Gaylene Klinger</h4>
                                      <span className="date">Updated: March 28, 2021</span>

                                      <div className="average-rating">
                                          <span className="rating-star">
                        <span className="rating-bar" style={{width: "80%"}}></span>
                                          </span>
                                      </div>

                                      <button className="btn">Respond</button>
                                  </div>
                                  <i className="waving"><AiFillFlag /></i>
                              </div>
                              {/* <!-- Rating End --> */}

                          </div>
                          {/* <!-- Single Courses Rating End -->

                          <!-- Single Courses Rating Start --> */}
                          <div className="single-courses-rating">

                              {/* <!-- Courses Start --> */}
                              <div className="courses">
                                  <div className="courses-thumb">
                                      <a href="/course-details"><img src="assets/images/courses/admin-courses-01.jpg" alt="Courses" /></a>
                                  </div>
                                  <div className="courses-content">
                                      <h4 className="title"><a href="/course-deatails">Build An eCommerce Site With WooCommerce and WooLentor.</a></h4>
                                      <div className="average-rating">
                                          <span className="label">Course Rating:</span>
                                          <span className="count">
                        4.5 

                        <span className="rating-star">
                          <span className="rating-bar" style={{width: "80%"}}></span>
                                          </span>
                                          </span>
                                      </div>
                                  </div>
                                  <div className="courses-btn">
                                      <button className="btn btn-primary">View Summary</button>
                                  </div>
                              </div>
                              {/* <!-- Courses End -->

                              <!-- Rating Start --> */}
                              <div className="rating">
                                  <div className="rating-author">
                                      <img src="assets/images/author/author-15.jpg" alt="Author" />
                                  </div>
                                  <div className="rating-content">
                                      <h4 className="name">Shawnda Hinds</h4>
                                      <span className="date">Updated: March 28, 2021</span>

                                      <div className="average-rating">
                                          <span className="rating-star">
                        <span className="rating-bar" style={{width: "80%"}}></span>
                                          </span>
                                      </div>

                                      <button className="btn">Respond</button>
                                  </div>
                                  <i className="waving"><AiFillFlag /></i>
                              </div>
                              {/* <!-- Rating End --> */}

                          </div>
                          {/* <!-- Single Courses Rating End --> */}

                      </div>
                      {/* <!-- Courses Rating Wrapper End --> */}

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

export default Reviews;