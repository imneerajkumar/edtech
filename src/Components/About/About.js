import React, { useEffect, useState } from "react";
import { FiAward,  FiUsers } from "react-icons/fi";
import {  AiFillCode, AiFillSafetyCertificate, AiFillStar } from "react-icons/ai";
import Navbar from "../Navbar";
import Download from "../Download";
import Footer from "../Footer";
import ScrollButton from "../ScrollButton";
import FeedbackModal from "./FeedbackModal";

const instructors = [
    {
        emailId: "instructor1@gmail.com",
        name: "Instructor1",
        image: "assets/images/author/author-02.jpg",
    },
    {
        emailId: "instructor2@gmail.com",
        name: "Instructor3",
        image: "assets/images/author/author-03.jpg",
    },
    {
        emailId: "instructor3@gmail.com",
        name: "Instructor3",
        image: "assets/images/author/author-04.jpg",
    },
    {
        emailId: "instructor4@gmail.com",
        name: "Instructor4",
        image: "assets/images/author/author-02.jpg",
    },
    {
        emailId: "instructor5@gmail.com",
        name: "Instructor5",
        image: "assets/images/author/author-03.jpg",
    },
    {
        emailId: "instructor6@gmail.com",
        name: "Instructor6",
        image: "assets/images/author/author-04.jpg",
    },
];

function About(props) {
  const [scrollState, setScrollState] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([
    {
        name: "Student 1",
        feedback: "Lorem Ipsum has been the industry's standard dummy text since the 1500 when unknown printer took a galley type and scrambled to make type specimen’s book has survived not five centuries but also the leap into electronic type and book."
    },
    {
        name: "Person 1",
        feedback: "Lorem Ipsum has been the industry's standard dummy text since the 1500 when unknown printer took a galley type and scrambled to make type specimen’s book has survived not five centuries but also the leap into electronic type and book."
    },
  ]);

  const handleShow = (id) => {
    console.log(id);
    // dispatch getfeedback of instructor emailId(id)
    // setData()
    setShow(true);
  }
	
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
            <img className="icon-shape-1 " src="assets/images/shape/shape-5.png" alt="Shape" />
            <div className="box-content">
              <div className="box-wrapper">
                <FiAward color="#fff" size={"50%"} />
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
                                            <i style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}><FiUsers /></i>
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
                                            <i style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}><AiFillCode /></i>
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
                                            <i style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}><AiFillSafetyCertificate /></i>
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
        <FeedbackModal show={show} handleClose={() => {setShow(false)}} data={data} />
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
                        {instructors.map((item) => (
                            <div className="col" key={item.emailId}>
                                <div className="single-team" >
                                    <div className="team-thumb">
                                        <img src={item.image} alt="Author" onClick={() => handleShow(item.emailId)}/>
                                    </div>
                                    <div className="team-content">
                                        <div 
                                            className="rating" 
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                        >
                                            <span className="count">4.9</span>
                                            <AiFillStar color="orange" />
                                            <span className="text">(rating)</span>
                                        </div>
                                        <h4 className="name">{item.name}</h4>
                                        <span className="designation">MSC, Instructor</span>
                                    </div>
                                </div>
                            </div>
                        ))}
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