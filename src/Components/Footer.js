import React from "react";
import { Link } from "react-router-dom";
import {
	FiInstagram,
	FiTwitter,
	FiFacebook,
	FiPhoneCall,
	FiMail,
} from "react-icons/fi";
import { AiOutlineSkype } from "react-icons/ai";

const Footer = () => {
	return (
		<div>
			{" "}
			<div className="section footer-section">
				{/* <!-- Footer Widget Section Start --> */}
				<div className="footer-widget-section">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6 order-md-1 order-lg-1">
								{/* <!-- Footer Widget Start --> */}
								<div className="footer-widget">
									<div className="widget-logo">
										<a href="/">
											<img src="assets/images/logo.png" alt="Logo" />
										</a>
									</div>

									<div className="widget-address">
										<h4 className="footer-widget-title">New Delhi</h4>
										<p>Delhi, India.</p>
									</div>

									<ul className="widget-info">
										<li>
											<p
												style={{
													display: "flex",
													alignItems: "center",
													padding: "3px",
												}}
											>
												<FiMail size={22} color="#309255" />{" "}
												<a
													style={{ marginTop: 0, marginBottom: "2px" }}
													href="mailto:address@gmail.com"
												>
													address@gmail.com
												</a>
											</p>
										</li>
										<li>
											<p
												style={{
													display: "flex",
													alignItems: "center",
													padding: "3px",
												}}
											>
												<FiPhoneCall color="#309255" size={22} />
												<a
													style={{ marginTop: 0, marginBottom: "2px" }}
													href="tel:9876543210"
												>
													9876543210
												</a>{" "}
											</p>
										</li>
									</ul>

									<ul className="widget-social">
										<li>
											<a href="https://www.facebook.com/" target="_blank">
												<FiFacebook size={24} />
											</a>
										</li>
										<li>
											<a href="https://twitter.com/" target="_blank">
												<FiTwitter size={24} />
											</a>
										</li>
										<li>
											<a href="https://www.skype.com/en/" target="_blank">
												<AiOutlineSkype size={26} />{" "}
											</a>
										</li>
										<li>
											<a href="https://www.instagram.com/" target="_blank">
												<FiInstagram size={22} />
											</a>
										</li>
									</ul>
								</div>
								{/* <!-- Footer Widget End --> */}
							</div>
							<div className="col-lg-6 order-md-3 order-lg-2">
								{/* <!-- Footer Widget Link Start --> */}
								<div className="footer-widget-link">
									{/* <!-- Footer Widget Start --> */}
									<div className="footer-widget">
										<h4 className="footer-widget-title">Category</h4>

										<ul className="widget-link">
											<li>
												<a href="/">Creative Writing</a>
											</li>
											<li>
												<a href="/">Film & Video</a>
											</li>
											<li>
												<a href="/">Graphic Design</a>
											</li>
											<li>
												<a href="/">UI/UX Design</a>
											</li>
											<li>
												<a href="/">Business Analytics</a>
											</li>
											<li>
												<a href="/">Marketing</a>
											</li>
										</ul>
									</div>
									{/* <!-- Footer Widget End --> */}

									{/* <!-- Footer Widget Start --> */}
									<div className="footer-widget">
										<h4 className="footer-widget-title">Quick Links</h4>

										<ul className="widget-link">
											<li>
												<Link to="/policy">Privacy Policy</Link>
											</li>
											<li>
												<Link to="/policy">Terms & Conditions</Link>
											</li>
											<li>
												<Link to="/policy">User Guidelines</Link>
											</li>
											<li>
												<Link to="/policy">Refund Policy</Link>
											</li>
											<li>
												<Link to="/policy">Referral</Link>
											</li>
										</ul>
									</div>
									{/* <!-- Footer Widget End --> */}
								</div>
								{/* <!-- Footer Widget Link End --> */}
							</div>
							<div className="col-lg-3 col-md-6 order-md-2 order-lg-3">
								{/* <!-- Footer Widget Start --> */}
								<div className="footer-widget">
									<h4 className="footer-widget-title">Subscribe</h4>

									<div className="widget-subscribe">
										<p>
											Lorem Ipsum has been them an industry printer took a
											galley make book.
										</p>

										<div className="widget-form">
											<form action="#">
												<input type="text" placeholder="Email here" />
												<button className="btn btn-primary btn-hover-dark">
													Subscribe Now
												</button>
											</form>
										</div>
									</div>
								</div>
								{/* <!-- Footer Widget End --> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
