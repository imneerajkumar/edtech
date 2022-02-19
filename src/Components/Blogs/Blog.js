import React, { useEffect, useState } from "react";
import { FiBookOpen } from "react-icons/fi";
import Navbar from "../Navbar";
import Download from "../Download";
import Footer from "../Footer";

function Blog(props) {
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
                      <li className="active">Blog</li>
                  </ul>
                  <h2 className="title">Our <span>Blog</span></h2>
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
      {/* <!-- Page Banner End -->

      <!-- Blog Start --> */}
      <div className="section section-padding mt-n10">
          <div className="container">

              {/* <!-- Blog Wrapper Start --> */}
              <div className="blog-wrapper">
                  <div className="row">
                      <div className="col-lg-4 col-md-6">

                          {/* <!-- Single Blog Start --> */}
                          <div className="single-blog">
                              <div className="blog-image">
                                  <a href="/blog-detail"><img src="assets/images/blog/blog-01.jpg" alt="Blog" /></a>
                              </div>
                              <div className="blog-content">
                                  <div className="blog-author">
                                      <div className="author">
                                          <div className="author-thumb">
                                              <a href="/blog-detail"><img src="assets/images/author/author-01.jpg" alt="Author" /></a>
                                          </div>
                                          <div className="author-name">
                                              <a className="name" href="/blog-detail">Jason Williams</a>
                                          </div>
                                      </div>
                                      <div className="tag">
                                          <a href="/blog-detail">Science</a>
                                      </div>
                                  </div>

                                  <h4 className="title"><a href="/blog-detail">Data Science and Machine Learning with Python - Hands On!</a></h4>

                                  <div className="blog-meta">
                                      <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                      <span> <i className="icofont-heart"></i> 2,568+ </span>
                                  </div>

                                  <a href="/blog-detail" className="btn btn-secondary btn-hover-primary">Read More</a>
                              </div>
                          </div>
                          {/* <!-- Single Blog End --> */}

                      </div>
                      <div className="col-lg-4 col-md-6">

                          {/* <!-- Single Blog Start --> */}
                          <div className="single-blog">
                              <div className="blog-image">
                                  <a href="/blog-detail"><img src="assets/images/blog/blog-02.jpg" alt="Blog" /></a>
                              </div>
                              <div className="blog-content">
                                  <div className="blog-author">
                                      <div className="author">
                                          <div className="author-thumb">
                                              <a href="/blog-detail"><img src="assets/images/author/author-02.jpg" alt="Author" /></a>
                                          </div>
                                          <div className="author-name">
                                              <a className="name" href="/blog-detail">Pamela Foster</a>
                                          </div>
                                      </div>
                                      <div className="tag">
                                          <a href="/blog-detail">UX Design</a>
                                      </div>
                                  </div>

                                  <h4 className="title"><a href="/blog-detail">Create Amazing Color Schemes for Your UX Design Projects</a></h4>

                                  <div className="blog-meta">
                                      <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                      <span> <i className="icofont-heart"></i> 2,568+ </span>
                                  </div>

                                  <a href="/blog-detail" className="btn btn-secondary btn-hover-primary">Read More</a>
                              </div>
                          </div>
                          {/* <!-- Single Blog End --> */}

                      </div>
                      <div className="col-lg-4 col-md-6">

                          {/* <!-- Single Blog Start --> */}
                          <div className="single-blog">
                              <div className="blog-image">
                                  <a href="/blog-detail"><img src="assets/images/blog/blog-03.jpg" alt="Blog" /></a>
                              </div>
                              <div className="blog-content">
                                  <div className="blog-author">
                                      <div className="author">
                                          <div className="author-thumb">
                                              <a href="/blog-detail"><img src="assets/images/author/author-03.jpg" alt="Author" /></a>
                                          </div>
                                          <div className="author-name">
                                              <a className="name" href="/blog-detail">Patricia Collins</a>
                                          </div>
                                      </div>
                                      <div className="tag">
                                          <a href="/blog-detail">Business</a>
                                      </div>
                                  </div>

                                  <h4 className="title"><a href="/blog-detail">Culture & Leadership: Strategies for a Successful Business</a></h4>

                                  <div className="blog-meta">
                                      <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                      <span> <i className="icofont-heart"></i> 2,568+ </span>
                                  </div>

                                  <a href="/blog-detail" className="btn btn-secondary btn-hover-primary">Read More</a>
                              </div>
                          </div>
                          {/* <!-- Single Blog End --> */}

                      </div>
                      <div className="col-lg-4 col-md-6">
                          {/* <!-- Single Blog Start --> */}
                          <div className="single-blog">
                              <div className="blog-image">
                                  <a href="/blog-detail"><img src="assets/images/blog/blog-04.jpg" alt="Blog" /></a>
                              </div>
                              <div className="blog-content">
                                  <div className="blog-author">
                                      <div className="author">
                                          <div className="author-thumb">
                                              <a href="/blog-detail"><img src="assets/images/author/author-04.jpg" alt="Author" /></a>
                                          </div>
                                          <div className="author-name">
                                              <a className="name" href="/blog-detail">Archie Neal</a>
                                          </div>
                                      </div>
                                      <div className="tag">
                                          <a href="/blog-detail">Science</a>
                                      </div>
                                  </div>

                                  <h4 className="title"><a href="/blog-detail">Data Science and Machine Learning with Python - Hands On!</a></h4>

                                  <div className="blog-meta">
                                      <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                      <span> <i className="icofont-heart"></i> 2,568+ </span>
                                  </div>

                                  <a href="/blog-detail" className="btn btn-secondary btn-hover-primary">Read More</a>
                              </div>
                          </div>
                          {/* <!-- Single Blog End --> */}

                      </div>
                      <div className="col-lg-4 col-md-6">

                          {/* <!-- Single Blog Start --> */}
                          <div className="single-blog">
                              <div className="blog-image">
                                  <a href="/blog-detail"><img src="assets/images/blog/blog-05.jpg" alt="Blog" /></a>
                              </div>
                              <div className="blog-content">
                                  <div className="blog-author">
                                      <div className="author">
                                          <div className="author-thumb">
                                              <a href="/blog-detail"><img src="assets/images/author/author-05.jpg" alt="Author" /></a>
                                          </div>
                                          <div className="author-name">
                                              <a className="name" href="/blog-detail">Randal Ramsey</a>
                                          </div>
                                      </div>
                                      <div className="tag">
                                          <a href="/blog-detail">UX Design</a>
                                      </div>
                                  </div>

                                  <h4 className="title"><a href="/blog-detail">Create Amazing Color Schemes for Your UX Design Projects</a></h4>

                                  <div className="blog-meta">
                                      <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                      <span> <i className="icofont-heart"></i> 2,568+ </span>
                                  </div>

                                  <a href="/blog-detail" className="btn btn-secondary btn-hover-primary">Read More</a>
                              </div>
                          </div>
                          {/* <!-- Single Blog End --> */}
                      </div>
                      <div className="col-lg-4 col-md-6">
                          {/* <!-- Single Blog Start --> */}
                          <div className="single-blog">
                              <div className="blog-image">
                                  <a href="/blog-detail"><img src="assets/images/blog/blog-06.jpg" alt="Blog" /></a>
                              </div>
                              <div className="blog-content">
                                  <div className="blog-author">
                                      <div className="author">
                                          <div className="author-thumb">
                                              <a href="/blog-detail"><img src="assets/images/author/author-06.jpg" alt="Author" /></a>
                                          </div>
                                          <div className="author-name">
                                              <a className="name" href="/blog-detail">Rochelle Thomas</a>
                                          </div>
                                      </div>
                                      <div className="tag">
                                          <a href="/blog-detail">Business</a>
                                      </div>
                                  </div>

                                  <h4 className="title"><a href="/blog-detail">Culture & Leadership: Strategies for a Successful Business</a></h4>

                                  <div className="blog-meta">
                                      <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                      <span> <i className="icofont-heart"></i> 2,568+ </span>
                                  </div>

                                  <a href="/blog-detail" className="btn btn-secondary btn-hover-primary">Read More</a>
                              </div>
                          </div>
                          {/* <!-- Single Blog End --> */}
                      </div>
                      <div className="col-lg-4 col-md-6">
                          <div className="single-blog">
                              <div className="blog-image">
                                  <a href="/blog-detail"><img src="assets/images/blog/blog-07.jpg" alt="Blog" /></a>
                              </div>
                              <div className="blog-content">
                                  <div className="blog-author">
                                      <div className="author">
                                          <div className="author-thumb">
                                              <a href="/blog-detail"><img src="assets/images/author/author-07.jpg" alt="Author" /></a>
                                          </div>
                                          <div className="author-name">
                                              <a className="name" href="/blog-detail">Della Salazar</a>
                                          </div>
                                      </div>
                                      <div className="tag">
                                          <a href="/blog-detail">Science</a>
                                      </div>
                                  </div>

                                  <h4 className="title"><a href="/blog-detail">Data Science and Machine Learning with Python - Hands On!</a></h4>

                                  <div className="blog-meta">
                                      <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                      <span> <i className="icofont-heart"></i> 2,568+ </span>
                                  </div>

                                  <a href="/blog-detail" className="btn btn-secondary btn-hover-primary">Read More</a>
                              </div>
                          </div>
                          {/* <!-- Single Blog End --> */}

                      </div>
                      <div className="col-lg-4 col-md-6">
                          {/* <!-- Single Blog Start --> */}
                          <div className="single-blog">
                              <div className="blog-image">
                                  <a href="/blog-detail"><img src="assets/images/blog/blog-08.jpg" alt="Blog" /></a>
                              </div>
                              <div className="blog-content">
                                  <div className="blog-author">
                                      <div className="author">
                                          <div className="author-thumb">
                                              <a href="/blog-detail"><img src="assets/images/author/author-08.jpg" alt="Author" /></a>
                                          </div>
                                          <div className="author-name">
                                              <a className="name" href="/blog-detail">Ricardo Patrick</a>
                                          </div>
                                      </div>
                                      <div className="tag">
                                          <a href="/blog-detail">UX Design</a>
                                      </div>
                                  </div>

                                  <h4 className="title"><a href="/blog-detail">Create Amazing Color Schemes for Your UX Design Projects</a></h4>

                                  <div className="blog-meta">
                                      <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                      <span> <i className="icofont-heart"></i> 2,568+ </span>
                                  </div>

                                  <a href="/blog-detail" className="btn btn-secondary btn-hover-primary">Read More</a>
                              </div>
                          </div>
                          {/* <!-- Single Blog End --> */}

                      </div>
                      <div className="col-lg-4 col-md-6">

                          {/* <!-- Single Blog Start --> */}
                          <div className="single-blog">
                              <div className="blog-image">
                                  <a href="/blog-detail"><img src="assets/images/blog/blog-09.jpg" alt="Blog" /></a>
                              </div>
                              <div className="blog-content">
                                  <div className="blog-author">
                                      <div className="author">
                                          <div className="author-thumb">
                                              <a href="/blog-detail"><img src="assets/images/author/author-09.jpg" alt="Author" /></a>
                                          </div>
                                          <div className="author-name">
                                              <a className="name" href="/blog-detail">Kurt Stewart</a>
                                          </div>
                                      </div>
                                      <div className="tag">
                                          <a href="/blog-detail">Business</a>
                                      </div>
                                  </div>

                                  <h4 className="title"><a href="/blog-detail">Culture & Leadership: Strategies for a Successful Business</a></h4>

                                  <div className="blog-meta">
                                      <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                      <span> <i className="icofont-heart"></i> 2,568+ </span>
                                  </div>

                                  <a href="/blog-detail" className="btn btn-secondary btn-hover-primary">Read More</a>
                              </div>
                          </div>
                          {/* <!-- Single Blog End --> */}
                      </div>
                  </div>
              </div>
              {/* <!-- Blog Wrapper End -->

              <!-- Page Pagination End --> */}
              <div className="page-pagination">
                  <ul className="pagination justify-content-center">
                      <li><a href="/blogs"><i className="icofont-rounded-left"></i></a></li>
                      <li><a className="active" href="/blogs">1</a></li>
                      <li><a href="/blogs">2</a></li>
                      <li><a href="/blogs">3</a></li>
                      <li><a href="/blogs"><i className="icofont-rounded-right"></i></a></li>
                  </ul>
              </div>
              {/* <!-- Page Pagination End --> */}
          </div>
      </div>
      {/* <!-- Blog End --> */}
      <Download />
		  <Footer />
    </div>
  );
}

export default Blog;