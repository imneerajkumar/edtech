import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ scrollState }) => {
	return (
		<div>
			<div className="header-section">
				{/* <!-- Header Top Start --> */}
				<div className="header-top d-none d-lg-block">
					<div className="container">
						{/* <!-- Header Top Wrapper Start --> */}

						{/* <!-- Header Top Wrapper End --> */}
					</div>
				</div>

				<div
					id="nav-header"
					className={`header-main ${scrollState && "sticky"}`}
				>
					<div className="container">
						{/* <!-- Header Main Start --> */}
						<div className="header-main-wrapper">
							{/* <!-- Header Logo Start --> */}
							<div className="header-logo">
								<Link to="/">
									<img src="assets/images/logo.png" alt="Logo" />
								</Link>
							</div>
							{/* <!-- Header Logo End --> */}

							{/* <!-- Header Menu Start --> */}
							<div className="header-menu d-none d-lg-block">
								<ul className="nav-menu">
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="/about">About</Link>
									</li>
									<li>
										<Link to="/courses">Courses</Link>
									</li>
									<li>
										<Link to="/blogs">Blogs</Link>
									</li>
									<li>
										<Link to="/contact">Contact Us</Link>
									</li>
								</ul>
							</div>
							{/* <!-- Header Menu End --> */}

							{/* <!-- Header Sing In & Up Start --> */}
							<div className="header-sign-in-up d-none d-lg-block">
								<ul>
									<li>
										<Link className="sign-in" to="/login">
											Sign In
										</Link>
									</li>
									<li>
										<Link className="sign-up" to="/register">
											Sign Up
										</Link>
									</li>
								</ul>
							</div>
							{/* <!-- Header Sing In & Up End --> */}

							{/* <!-- Header Mobile Toggle Start --> */}
							<div className="header-toggle d-lg-none">
								<Link className="menu-toggle" to="/">
									<span></span>
									<span></span>
									<span></span>
								</Link>
							</div>
							{/* <!-- Header Mobile Toggle End --> */}
						</div>
						{/* <!-- Header Main End --> */}
					</div>
				</div>
				{/* <!-- Header Main End --> */}
			</div>

			{/* <!-- Mobile Menu Start --> */}
			<div className="mobile-menu">
				{/* <!-- Menu Close Start --> */}
				<Link className="menu-close" to="/">
					<i className="icofont-close-line"></i>
				</Link>
				{/* <!-- Menu Close End --> */}

				{/* <!-- Mobile Top Medal Start --> */}
				<div className="mobile-top">
					<p>
						<i className="flaticon-phone-call"></i>{" "}
						<Link to="tel:9702621413">(970) 262-1413</Link>
					</p>
					<p>
						<i className="flaticon-email"></i>{" "}
						<Link to="mailto:address@gmail.com">address@gmail.com</Link>
					</p>
				</div>
				{/* <!-- Mobile Top Medal End --> */}

				{/* <!-- Mobile Sing In & Up Start --> */}
				<div className="mobile-sign-in-up">
					<ul>
						<li>
							<Link className="sign-in" to="/login">
								Sign In
							</Link>
						</li>
						<li>
							<Link className="sign-up" to="/register">
								Sign Up
							</Link>
						</li>
					</ul>
				</div>
				{/* <!-- Mobile Sing In & Up End --> */}

				{/* <!-- Mobile Menu Start --> */}
				<div className="mobile-menu-items">
					<ul className="nav-menu">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/courses">Courses</Link>
						</li>
						<li>
							<Link to="/blogs">Blogs</Link>
						</li>
						<li>
							<Link to="/contact">Contact Us</Link>
						</li>
					</ul>
				</div>
				{/* <!-- Mobile Menu End --> */}

				{/* <!-- Mobile Menu End --> */}
				<div className="mobile-social">
					<ul className="social">
						<li>
							<Link to="/">
								<i className="flaticon-facebook"></i>
							</Link>
						</li>
						<li>
							<Link to="/">
								<i className="flaticon-twitter"></i>
							</Link>
						</li>
						<li>
							<Link to="/">
								<i className="flaticon-skype"></i>
							</Link>
						</li>
						<li>
							<Link to="/">
								<i className="flaticon-instagram"></i>
							</Link>
						</li>
					</ul>
				</div>
				{/* <!-- Mobile Menu End --> */}
			</div>
		</div>
	);
};

export default Navbar;
