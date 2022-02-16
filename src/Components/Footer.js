import React from 'react'

const Footer = () => {
  return (
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
									<h4 className="footer-widget-title">Caribbean Ct</h4>
									<p>Haymarket, Virginia (VA).</p>
								</div>

								<ul className="widget-info">
									<li>
										<p>
											{" "}
											<i className="flaticon-email"></i>{" "}
											<a href="mailto:address@gmail.com">address@gmail.com</a>{" "}
										</p>
									</li>
									<li>
										<p>
											{" "}
											<i className="flaticon-phone-call"></i>{" "}
											<a href="tel:9702621413">(970) 262-1413</a>{" "}
										</p>
									</li>
								</ul>

								<ul className="widget-social">
									<li>
										<a href="/">
											<i className="flaticon-facebook"></i>
										</a>
									</li>
									<li>
										<a href="/">
											<i className="flaticon-twitter"></i>
										</a>
									</li>
									<li>
										<a href="/">
											<i className="flaticon-skype"></i>
										</a>
									</li>
									<li>
										<a href="/">
											<i className="flaticon-instagram"></i>
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
											<a href="/">Privacy Policy</a>
										</li>
										<li>
											<a href="/">Discussion</a>
										</li>
										<li>
											<a href="/">Terms & Conditions</a>
										</li>
										<li>
											<a href="/">Customer Support</a>
										</li>
										<li>
											<a href="/">Course FAQ’s</a>
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
										Lorem Ipsum has been them an industry printer took a galley
										make book.
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
	);
}

export default Footer