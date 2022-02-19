import React, { useEffect, useState } from "react";
import { FiBookOpen } from "react-icons/fi";
import Navbar from "../Navbar";
import Download from "../Download";
import Footer from "../Footer";

function Contact(props) {
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
                    <li className="active">Contact Us</li>
                </ul>
                <h2 className="title">Contact <span>Us</span></h2>
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

      {/* <!-- Contact Map Start --> */}
        <div className="section section-padding-02">
            <div className="container">

                {/* <!-- Contact Map Wrapper Start --> */}
                <div className="contact-map-wrapper">
                    <iframe title="Address" id="gmap_canvas" src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                </div>
                {/* <!-- Contact Map Wrapper End --> */}

            </div>
        </div>
        {/* <!-- Contact Map End --> */}

        {/* <!-- Contact Start --> */}
        <div className="section section-padding">
            <div className="container">

                {/* <!-- Contact Wrapper Start --> */}
                <div className="contact-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6">

                            {/* <!-- Contact Info Start --> */}
                            <div className="contact-info">        
                                {/* <!-- Single Contact Info Start --> */}
                                <div className="single-contact-info">
                                    <div className="info-icon">
                                        <i className="flaticon-phone-call"></i>
                                    </div>
                                    <div className="info-content">
                                        <h6 className="title">Phone No.</h6>
                                        <p><a href="tel:88193326867">(88) 193 326 867</a></p>
                                    </div>
                                </div>
                                {/* <!-- Single Contact Info End -->
                                <!-- Single Contact Info Start --> */}
                                <div className="single-contact-info">
                                    <div className="info-icon">
                                        <i className="flaticon-email"></i>
                                    </div>
                                    <div className="info-content">
                                        <h6 className="title">Email Address.</h6>
                                        <p><a href="mailto:edule100@gmail.com">edule100@gmail.com</a></p>
                                    </div>
                                </div>
                                {/* <!-- Single Contact Info End -->
                                <!-- Single Contact Info Start --> */}
                                <div className="single-contact-info">
                                    <div className="info-icon">
                                        <i className="flaticon-pin"></i>
                                    </div>
                                    <div className="info-content">
                                        <h6 className="title">Office Address.</h6>
                                        <p>Talga, Alabama, USA</p>
                                    </div>
                                </div>
                                {/* <!-- Single Contact Info End --> */}
                            </div>
                            {/* <!-- Contact Info End --> */}

                        </div>
                        <div className="col-lg-6">

                            {/* <!-- Contact Form Start --> */}
                            <div className="contact-form">
                                <h3 className="title">Get in Touch <span>With Us</span></h3>

                                <div className="form-wrapper">
                                    <form id="contact-form" action="https://htmlmail.hasthemes.com/humayun/edule-contact.php" method="POST">
                                        {/* <!-- Single Form Start --> */}
                                        <div className="single-form">
                                            <input type="text" name="name" placeholder="Name" />
                                        </div>
                                        {/* <!-- Single Form End --> */}
                                        {/* <!-- Single Form Start --> */}
                                        <div className="single-form">
                                            <input type="email" name="email" placeholder="Email" />
                                        </div>
                                        {/* <!-- Single Form End --> */}
                                        {/* <!-- Single Form Start --> */}
                                        <div className="single-form">
                                            <input type="text" name="subject" placeholder="Subject" />
                                        </div>
                                        {/* <!-- Single Form End --> */}
                                        {/* <!-- Single Form Start --> */}
                                        <div className="single-form">
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>
                                        {/* <!-- Single Form End --> */}
                                        <p className="form-message"></p>
                                        {/* <!-- Single Form Start --> */}
                                        <div className="single-form">
                                            <button className="btn btn-primary btn-hover-dark w-100">Send Message <i className="flaticon-right"></i></button>
                                        </div>
                                        {/* <!-- Single Form End --> */}
                                    </form>
                                </div>
                            </div>
                            {/* <!-- Contact Form End --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Contact Wrapper End --> */}
            </div>
        </div>
        {/* <!-- Contact End --> */}

      <Download />
		  <Footer />
    </div>
  );
}

export default Contact;