import React, { useEffect, useState } from "react";
import { FiBookOpen, FiSearch } from "react-icons/fi";
import Navbar from "../Navbar";
import Download from "../Download";
import Footer from "../Footer";
import ScrollButton from "../ScrollButton";

function Courses(props) {
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
        {/* <!-- Overlay End -->

        <!-- Page Banner Start --> */}
        <div className="section page-banner">
					<img className="shape-2" src="assets/images/shape/shape-23.png" alt="Shape" />

					<div className="container">
						{/* <!-- Page Banner Start --> */}
						<div className="page-banner-content">
							<ul className="breadcrumb">
								<li><a href="/">Home</a></li>
								<li className="active">Courses</li>
							</ul>
							<h2 className="title">My <span>Courses</span></h2>
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

        {/* <!-- Courses Start --> */}
        <div className="section section-padding">
					<div className="container">
						{/* <!-- Courses Category Wrapper Start  --> */}
            <div className="courses-category-wrapper">
              <div className="courses-search search-2">
                <input type="text" placeholder="Search here" />
                <button>
									<FiSearch color="#fff" size={30} />
								</button>
              </div>

							<ul className="category-menu">
								<li><a className="active" href="/">All Courses</a></li>
								<li><a href="/">Collections</a></li>
								<li><a href="/">Wishlist</a></li>
								<li><a href="/">Archived</a></li>
							</ul>
            </div>
            {/* <!-- Courses Category Wrapper End  --> */}

            {/* <!-- Courses Wrapper Start  --> */}
						<div className="courses-wrapper-02">
							<div className="row">
								<div className="col-lg-4 col-md-6">
								{/* <!-- Single Courses Start --> */}
									<div className="single-courses">
										<div className="courses-images">
											<a href="course-details"><img src="assets/images/courses/courses-01.jpg" alt="Courses" /></a>
											<div className="courses-option dropdown">
												<button className="option-toggle" data-bs-toggle="dropdown" aria-expanded="false">
													<span></span>
													<span></span>
													<span></span>
												</button>
												<ul className="dropdown-menu">
													<li><a href="/"><i className="icofont-share-alt"></i> Share</a></li>
													<li><a href="/"><i className="icofont-plus"></i> Create Collection</a></li>
													<li><a href="/"><i className="icofont-star"></i> Favorite</a></li>
													<li><a href="/"><i className="icofont-archive"></i> Archive</a></li>
												</ul>
											</div>
                    </div>
                    <div className="courses-content">
                      <div className="courses-author">
                        <div className="author">
                          <div className="author-thumb">
														<a href="/"><img src="assets/images/author/author-01.jpg" alt="Author" /></a>
													</div>
													<div className="author-name">
														<a className="name" href="/">Jason Williams</a>
														<a className="name-2" href="/">Ohula Malsh</a>
													</div>
												</div>
											</div>

											<h4 className="title"><a href="course-details">Data Science and Machine Learning with Python - Hands On!</a></h4>

											<div className="courses-rating">
												<p>38% Complete</p>
												<div className="rating-progress-bar">
													<div className="rating-line" style={{width: "38%"}}></div>
												</div>

												<div className="rating-meta">
													<span className="rating-star">
														<span className="rating-bar" style={{width: "80%"}}></span>
													</span>
													<p>Your rating</p>
												</div>
											</div>
										</div>
									</div>
									{/* <!-- Single Courses End --> */}
								</div>
                        
								<div className="col-lg-4 col-md-6">
									{/* <!-- Single Courses Start --> */}
									<div className="single-courses">
										<div className="courses-images">
											<a href="course-details"><img src="assets/images/courses/courses-02.jpg" alt="Courses" /></a>
											<div className="courses-option dropdown">
												<button className="option-toggle" data-bs-toggle="dropdown" aria-expanded="false">
													<span></span>
													<span></span>
													<span></span>
												</button>
												<ul className="dropdown-menu">
													<li><a href="/"><i className="icofont-share-alt"></i> Share</a></li>
													<li><a href="/"><i className="icofont-plus"></i> Create Collection</a></li>
													<li><a href="/"><i className="icofont-star"></i> Favorite</a></li>
													<li><a href="/"><i className="icofont-archive"></i> Archive</a></li>
												</ul>
											</div>
										</div>
										<div className="courses-content">
											<div className="courses-author">
												<div className="author">
													<div className="author-thumb">
														<a href="/"><img src="assets/images/author/author-02.jpg" alt="Author" /></a>
													</div>
													<div className="author-name">
														<a className="name" href="/">Pamela Foster </a>
														<a className="name-2" href="/">Ohula Malsh</a>
													</div>
												</div>
											</div>

											<h4 className="title"><a href="course-details">Create Amazing Color Schemes for Your UX Design Projects</a></h4>

											<div className="courses-rating">
												<p>80% Complete</p>
												<div className="rating-progress-bar">
													<div className="rating-line" style={{width: "80%"}}></div>
												</div>

												<div className="rating-meta">
													<span className="rating-star">
														<span className="rating-bar" style={{width: "0%"}}></span>
													</span>
													<p><a href="/">Leave a rating</a></p>
												</div>
											</div>
										</div>
									</div>
									{/* <!-- Single Courses End --> */}
								</div>
											<div className="col-lg-4 col-md-6">
													{/* <!-- Single Courses Start --> */}
													<div className="single-courses">
															<div className="courses-images">
																	<a href="course-details"><img src="assets/images/courses/courses-03.jpg" alt="Courses" /></a>

																	<div className="courses-option dropdown">
																			<button className="option-toggle" data-bs-toggle="dropdown" aria-expanded="false">
																					<span></span>
																					<span></span>
																					<span></span>
																			</button>
																			<ul className="dropdown-menu">
																					<li><a href="/"><i className="icofont-share-alt"></i> Share</a></li>
																					<li><a href="/"><i className="icofont-plus"></i> Create Collection</a></li>
																					<li><a href="/"><i className="icofont-star"></i> Favorite</a></li>
																					<li><a href="/"><i className="icofont-archive"></i> Archive</a></li>
																			</ul>
																	</div>
															</div>
															<div className="courses-content">
																	<div className="courses-author">
																			<div className="author">
																					<div className="author-thumb">
																							<a href="/"><img src="assets/images/author/author-03.jpg" alt="Author" /></a>
																					</div>
																					<div className="author-name">
																							<a className="name" href="/">Rose Simmons</a>
																							<a className="name-2" href="/">Ohula Malsh</a>
																					</div>
																			</div>
																	</div>

																	<h4 className="title"><a href="course-details">Culture & Leadership: Strategies for a Successful Business</a></h4>

																	<div className="courses-rating">
																			<p>15% Complete</p>

																			<div className="rating-progress-bar">
																					<div className="rating-line" style={{width: "15%"}}></div>
																			</div>

																			<div className="rating-meta">
																					<span className="rating-star">
												<span className="rating-bar"style={{width: "80%"}}></span>
																					</span>
																					<p>Your rating</p>
																			</div>
																	</div>
															</div>
													</div>
													{/* <!-- Single Courses End --> */}
											</div>
											<div className="col-lg-4 col-md-6">
													{/* <!-- Single Courses Start --> */}
													<div className="single-courses">
															<div className="courses-images">
																	<a href="course-details"><img src="assets/images/courses/courses-04.jpg" alt="Courses" /></a>

																	<div className="courses-option dropdown">
																			<button className="option-toggle" data-bs-toggle="dropdown" aria-expanded="false">
																					<span></span>
																					<span></span>
																					<span></span>
																			</button>
																			<ul className="dropdown-menu">
																					<li><a href="/"><i className="icofont-share-alt"></i> Share</a></li>
																					<li><a href="/"><i className="icofont-plus"></i> Create Collection</a></li>
																					<li><a href="/"><i className="icofont-star"></i> Favorite</a></li>
																					<li><a href="/"><i className="icofont-archive"></i> Archive</a></li>
																			</ul>
																	</div>
															</div>
															<div className="courses-content">
																	<div className="courses-author">
																			<div className="author">
																					<div className="author-thumb">
																							<a href="/"><img src="assets/images/author/author-04.jpg" alt="Author" /></a>
																					</div>
																					<div className="author-name">
																							<a className="name" href="/">Jason Williams</a>
																							<a className="name-2" href="/">Ohula Malsh</a>
																					</div>
																			</div>
																	</div>

																	<h4 className="title"><a href="course-details">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>

																	<div className="courses-rating">
																			<p>45% Complete</p>

																			<div className="rating-progress-bar">
																					<div className="rating-line" style={{width: "45%"}}></div>
																			</div>

																			<div className="rating-meta">
																					<span className="rating-star">
												<span className="rating-bar" style={{width: "80%"}}></span>
																					</span>
																					<p>Your rating</p>
																			</div>
																	</div>
															</div>
													</div>
													{/* <!-- Single Courses End --> */}
											</div>
											<div className="col-lg-4 col-md-6">
													{/* <!-- Single Courses Start --> */}
													<div className="single-courses">
															<div className="courses-images">
																	<a href="course-details"><img src="assets/images/courses/courses-05.jpg" alt="Courses" /></a>

																	<div className="courses-option dropdown">
																			<button className="option-toggle" data-bs-toggle="dropdown" aria-expanded="false">
																					<span></span>
																					<span></span>
																					<span></span>
																			</button>
																			<ul className="dropdown-menu">
																					<li><a href="/"><i className="icofont-share-alt"></i> Share</a></li>
																					<li><a href="/"><i className="icofont-plus"></i> Create Collection</a></li>
																					<li><a href="/"><i className="icofont-star"></i> Favorite</a></li>
																					<li><a href="/"><i className="icofont-archive"></i> Archive</a></li>
																			</ul>
																	</div>
															</div>
															<div className="courses-content">
																	<div className="courses-author">
																			<div className="author">
																					<div className="author-thumb">
																							<a href="/"><img src="assets/images/author/author-05.jpg" alt="Author" /></a>
																					</div>
																					<div className="author-name">
																							<a className="name" href="/">Pamela Foster</a>
																							<a className="name-2" href="/">Ohula Malsh</a>
																					</div>
																			</div>
																	</div>

																	<h4 className="title"><a href="course-details">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>

																	<div className="courses-rating">
																			<p>38% Complete</p>

																			<div className="rating-progress-bar">
																					<div className="rating-line" style={{width: "38%"}}></div>
																			</div>

																			<div className="rating-meta">
																					<span className="rating-star">
												<span className="rating-bar" style={{width: "80%"}}></span>
																					</span>
																					<p>Your rating</p>
																			</div>
																	</div>
															</div>
													</div>
													{/* <!-- Single Courses End --> */}
											</div>
									</div>
							</div>
							{/* <!-- Courses Wrapper End  --> */}
					</div>
        </div>
        {/* <!-- Courses End -->*/}
      <Download />
			<ScrollButton scrollState={scrollState} />
		  <Footer />
    </div>
  );
}

export default Courses;