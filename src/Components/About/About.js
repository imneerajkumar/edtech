import React, { useEffect, useState } from "react";
import { FiBookOpen } from "react-icons/fi";
import Navbar from "../Navbar";
import Download from "../Download";
import Footer from "../Footer";
import ScrollButton from "../ScrollButton";

function About(props) {
  const [scrollState, setScrollState] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", (e) => {
			var scroll = window.pageYOffset;
			if (scroll <= 100) {
				setScrollState(false);
			} else {
				setScrollState(true);
			}
		});
	});

  return (
    <div className="main-wrapper">
      <Navbar scrollState={scrollState} />
      {/* <!-- Overlay Start --> */}
      <div className="overlay"></div>
      {/* <!-- Overlay End --> */}

      {/* <!-- Page Banner Start --> */}
      <div className="section page-banner">
        <img className="shape-2" src="assets/images/shape/shape-23.png" alt="Shape" />
          <div className="container">
            {/* <!-- Page Banner Start --> */}
            <div className="page-banner-content">
                <ul className="breadcrumb">
                    <li><a href="/">Home</a></li>
                    <li className="active">About</li>
                </ul>
                <h2 className="title">About <span>Edule.</span></h2>
            </div>
            {/* <!-- Page Banner End --> */}
          </div>

          {/* <!-- Shape Icon Box Start --> */}
          <div className="shape-icon-box">
            <img className="icon-shape-1 animation-left" src="assets/images/shape/shape-5.png" alt="Shape" />
            <div className="box-content">
              <div className="box-wrapper">
                <FiBookOpen color="#fff" size={50} />
              </div>
            </div>
            <img className="icon-shape-2" src="assets/images/shape/shape-6.png" alt="Shape" />
          </div>
          {/* <!-- Shape Icon Box End --> */}

          <img className="shape-3" src="assets/images/shape/shape-24.png" alt="Shape" />
          <img className="shape-author" src="assets/images/author/author-11.jpg" alt="Shape" />
      </div>
      {/* <!-- Page Banner End --> */}

      {/* <!-- About Start --> */}
        <div className="section">

            <div className="section-padding-02 mt-n10">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">

                            {/* <!-- About Images Start --> */}
                            <div className="about-images">
                                <div className="images">
                                    <img src="assets/images/about.jpg" alt="About" />
                                </div>

                                <div className="about-years">
                                    <div className="years-icon">
                                        <img src="assets/images/logo-icon.png" alt="About" />
                                    </div>
                                    <p><strong>28+</strong> Years Experience</p>
                                </div>
                            </div>
                            {/* <!-- About Images End --> */}

                        </div>
                        <div className="col-lg-6">

                            {/* <!-- About Content Start --> */}
                            <div className="about-content">
                                <h5 className="sub-title">Welcome to Edule.</h5>
                                <h2 className="main-title">You can join with Edule and upgrade your skill for your <span>bright future.</span></h2>
                                <p>Lorem Ipsum has been the industr’s standard dummy text ever since unknown printer took galley type and scmbled make type specimen book. It has survived not only five centuries.</p>
                                <a href="/courses" className="btn btn-primary btn-hover-dark">Start A Course</a>
                            </div>
                            {/* <!-- About Content End --> */}

                        </div>
                    </div>
                </div>
            </div>

            <div className="section-padding-02 mt-n6">
                <div className="container">

                    {/* <!-- About Items Wrapper Start --> */}
                    <div className="about-items-wrapper">
                        <div className="row">
                            <div className="col-lg-4">
                                {/* <!-- About Item Start --> */}
                                <div className="about-item">
                                    <div className="item-icon-title">
                                        <div className="item-icon">
                                            <i className="flaticon-tutor"></i>
                                        </div>
                                        <div className="item-title">
                                            <h3 className="title">Top Instructors</h3>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled to make type specimen book has survived.</p>
                                    <p>Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled make.</p>
                                </div>
                                {/* <!-- About Item End --> */}
                            </div>
                            <div className="col-lg-4">
                                {/* <!-- About Item Start --> */}
                                <div className="about-item">
                                    <div className="item-icon-title">
                                        <div className="item-icon">
                                            <i className="flaticon-coding"></i>
                                        </div>
                                        <div className="item-title">
                                            <h3 className="title">Portable Program</h3>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled to make type specimen book has survived.</p>
                                    <p>Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled make.</p>
                                </div>
                                {/* <!-- About Item End --> */}
                            </div>
                            <div className="col-lg-4">
                                {/* <!-- About Item Start --> */}
                                <div className="about-item">
                                    <div className="item-icon-title">
                                        <div className="item-icon">
                                            <i className="flaticon-increase"></i>
                                        </div>
                                        <div className="item-title">
                                            <h3 className="title">Improve Quickly</h3>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled to make type specimen book has survived.</p>
                                    <p>Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled make.</p>
                                </div>
                                {/* <!-- About Item End --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- About Items Wrapper End --> */}

                </div>
            </div>

        </div>
        {/* <!-- About End --> */}

        {/* <!-- Call to Action Start --> */}
        <div className="section section-padding-02">
            <div className="container">

                {/* <!-- Call to Action Wrapper Start --> */}
                <div className="call-to-action-wrapper">
                    <img className="cat-shape-02" src="assets/images/shape/shape-13.svg" alt="Shape" />
                    <div className="row align-items-center">
                        <div className="col-md-6">

                            {/* <!-- Section Title Start --> */}
                            <div className="section-title shape-02">
                                <h5 className="sub-title">Become A Instructor</h5>
                                <h2 className="main-title">You can join with Edule as <span>a instructor?</span></h2>
                            </div>
                            {/* <!-- Section Title End --> */}

                        </div>
                        <div className="col-md-6">
                            <div className="call-to-action-btn">
                                <a className="btn btn-primary btn-hover-dark" href="/contact">Drop Information</a>
                            </div>
                        </div>
                    </div>
                {/* <!-- Call to Action Wrapper End --> */}

            </div>
        </div>
        {/* <!-- Call to Action End --> */}

        {/* <!-- Team Member's Start --> */}
        <div className="section section-padding mt-n1">
            <div className="container">

                {/* <!-- Section Title Start --> */}
                <div className="section-title shape-03 text-center">
                    <h5 className="sub-title">Team Member’s</h5>
                    <h2 className="main-title">Edule Skilled <span> Instructor</span></h2>
                </div>
                {/* <!-- Section Title End --> */}

                {/* <!-- Team Wrapper Start --> */}
                <div className="team-wrapper">
                    <div className="row row-cols-lg-5 row-cols-sm-3 row-cols-2 ">
                        <div className="col">

                            {/* <!-- Single Team Start --> */}
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src="assets/images/author/author-01.jpg" alt="Author" />
                                </div>
                                <div className="team-content">
                                    <div className="rating">
                                        <span className="count">4.9</span>
                                        <i className="icofont-star"></i>
                                        <span className="text">(rating)</span>
                                    </div>
                                    <h4 className="name">Margarita James</h4>
                                    <span className="designation">MSC, Instructor</span>
                                </div>
                            </div>
                            {/* <!-- Single Team End --> */}

                        </div>
                        <div className="col">
                            {/* <!-- Single Team Start --> */}
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src="assets/images/author/author-02.jpg" alt="Author" />
                                </div>
                                <div className="team-content">
                                    <div className="rating">
                                        <span className="count">4.9</span>
                                        <i className="icofont-star"></i>
                                        <span className="text">(rating)</span>
                                    </div>
                                    <h4 className="name">Mitchell Colon</h4>
                                    <span className="designation">BBA, Instructor</span>
                                </div>
                            </div>
                            {/* <!-- Single Team End --> */}

                        </div>
                        <div className="col">

                            {/* <!-- Single Team Start --> */}
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src="assets/images/author/author-03.jpg" alt="Author" />
                                </div>
                                <div className="team-content">
                                    <div className="rating">
                                        <span className="count">4.9</span>
                                        <i className="icofont-star"></i>
                                        <span className="text">(rating)</span>
                                    </div>
                                    <h4 className="name">Sonya Gordon</h4>
                                    <span className="designation">MBA, Instructor</span>
                                </div>
                            </div>
                            {/* <!-- Single Team End --> */}

                        </div>
                        <div className="col">
                            {/* <!-- Single Team Start --> */}
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src="assets/images/author/author-04.jpg" alt="Author" />
                                </div>
                                <div className="team-content">
                                    <div className="rating">
                                        <span className="count">4.9</span>
                                        <i className="icofont-star"></i>
                                        <span className="text">(rating)</span>
                                    </div>
                                    <h4 className="name">Archie Neal</h4>
                                    <span className="designation">BBS, Instructor</span>
                                </div>
                            </div>
                            {/* <!-- Single Team End --> */}
                        </div>

                        <div className="col">
                            {/* <!-- Single Team Start --> */}
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src="assets/images/author/author-05.jpg" alt="Author" />
                                </div>
                                <div className="team-content">
                                    <div className="rating">
                                        <span className="count">4.9</span>
                                        <i className="icofont-star"></i>
                                        <span className="text">(rating)</span>
                                    </div>
                                    <h4 className="name">Randal Ramsey</h4>
                                    <span className="designation">MBBS, Instructor</span>
                                </div>
                            </div>
                            {/* <!-- Single Team End --> */}
                        </div>
                        <div className="col">
                            {/* <!-- Single Team Start --> */}
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src="assets/images/author/author-06.jpg" alt="Author" />
                                </div>
                                <div className="team-content">
                                    <div className="rating">
                                        <span className="count">4.9</span>
                                        <i className="icofont-star"></i>
                                        <span className="text">(rating)</span>
                                    </div>
                                    <h4 className="name">Rochelle Thomas</h4>
                                    <span className="designation">MSC, Instructor</span>
                                </div>
                            </div>
                            {/* <!-- Single Team End --> */}

                        </div>
                        <div className="col">

                            {/* <!-- Single Team Start --> */}
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src="assets/images/author/author-07.jpg" alt="Author" />
                                </div>
                                <div className="team-content">
                                    <div className="rating">
                                        <span className="count">4.9</span>
                                        <i className="icofont-star"></i>
                                        <span className="text">(rating)</span>
                                    </div>
                                    <h4 className="name">Della Salazar</h4>
                                    <span className="designation">BBA, Instructor</span>
                                </div>
                            </div>
                            {/* <!-- Single Team End --> */}

                        </div>
                        <div className="col">

                            {/* <!-- Single Team Start --> */}
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src="assets/images/author/author-08.jpg" alt="Author" />
                                </div>
                                <div className="team-content">
                                    <div className="rating">
                                        <span className="count">4.9</span>
                                        <i className="icofont-star"></i>
                                        <span className="text">(rating)</span>
                                    </div>
                                    <h4 className="name">Ricardo Patrick</h4>
                                    <span className="designation">MBA, Instructor</span>
                                </div>
                            </div>
                            {/* <!-- Single Team End --> */}

                        </div>
                        <div className="col">
                            {/* <!-- Single Team Start --> */}
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src="assets/images/author/author-09.jpg" alt="Author" />
                                </div>
                                <div className="team-content">
                                    <div className="rating">
                                        <span className="count">4.9</span>
                                        <i className="icofont-star"></i>
                                        <span className="text">(rating)</span>
                                    </div>
                                    <h4 className="name">Kurt Stewart</h4>
                                    <span className="designation">BBS, Instructor</span>
                                </div>
                            </div>
                            {/* <!-- Single Team End --> */}

                        </div>
                        <div className="col">
                            {/* <!-- Single Team Start --> */}
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src="assets/images/author/author-10.jpg" alt="Author" />
                                </div>
                                <div className="team-content">
                                    <div className="rating">
                                        <span className="count">4.9</span>
                                        <i className="icofont-star"></i>
                                        <span className="text">(rating)</span>
                                    </div>
                                    <h4 className="name">Rodney Terry</h4>
                                    <span className="designation">MBBS, Instructor</span>
                                </div>
                            </div>
                            {/* <!-- Single Team End --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Team Wrapper End --> */}

            </div>
        </div>
        {/* <!-- Team Member's End --> */}
      </div>

        <Download />
        <ScrollButton scrollState={scrollState} />
		<Footer />
    </div>
  );
}

export default About;