import React, { useEffect, useState } from "react";
import { FiAward  } from "react-icons/fi";
import Navbar from "../Navbar";
import Download from "../Download";
import Footer from "../Footer";
import ScrollButton from "../ScrollButton";

function Profile(props) {
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
      <div className="overlay"></div>
      <div className="section page-banner">
        <img className="shape-2" src="assets/images/shape/shape-23.png" alt="Shape" />
          <div className="container">
            <div className="page-banner-content">
                <ul className="breadcrumb">
                    <li><a href="/">Home</a></li>
                    <li className="active">Profile</li>
                </ul>
                <h2 className="title">About <span>Neeraj Kumar.</span></h2>
            </div>
          </div>

          <div className="shape-icon-box">
            <img className="icon-shape-1 " src="assets/images/shape/shape-5.png" alt="Shape" />
            <div className="box-content">
              <div className="box-wrapper">
                <FiAward color="#fff" size={"50%"} />
              </div>
            </div>
            <img className="icon-shape-2" src="assets/images/shape/shape-6.png" alt="Shape" />
          </div>

          <img className="shape-3" src="assets/images/shape/shape-24.png" alt="Shape" />
          <img className="shape-author" src="assets/images/author/author-11.jpg" alt="Shape" />
        </div>

        <div className="section">
            
        </div>

        <Download />
        <ScrollButton scrollState={scrollState} />
		<Footer />
    </div>
  );
}

export default Profile;