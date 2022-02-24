import React, { useEffect } from "react";
import Download from "../Download";
import Footer from "../Footer";
// import ReactPlayer from "react-player";

function Courses(props) {
	// const [collap, setcollap] = useState(true);
	useEffect(() => {
		const element = document.getElementById("myvid");
		console.log(element);
		//         $(document).ready(function()

		// {
		// 	var vid = $('#myvid');

		// 	//default video source
		//     $(vid).attr("src", $("a.link:first").attr("href"));

		//     // addclassName playing to first video link
		//     $("a.link:first").addclassName("playing");

		// $("a.link").on("click" , function  (event) {

		// 	// prevent link default
		//     event.preventDefault();

		//     // change video source
		//     $(vid).attr("src", $(this).attr("href"));

		//     // remouve className playing from unplayed video href
		//     $(".vids a").removeclassName("playing");

		//     // add className playing to video href
		//     $(this).addclassName("playing");

		//     // add className paused to give the play/pause button the right look
		//     $('.btnPlay').addclassName('paused');

		//     // play the video
		//     vid[0].play();

		//     // adjust prev button state
		//     if ($("a.link:first").hasclassName("playing")) {
		//     $(".prevvid").addclassName("disabled");
		//     }
		//     else {
		//         $(".prevvid").removeclassName("disabled");
		//     }

		//     // adjust next button state
		//     if ($("a.link:last").hasclassName("playing")) {
		//     $(".nextvid").addclassName("disabled");
		//     }
		//     else {
		//         $(".nextvid").removeclassName("disabled");
		//     }

		// });
	});
	return (
		<div className="main-wrapper">
			<div className="section login-header">
				{/* <!-- Login Header Wrapper Start --> */}
				<div className="login-header-wrapper navbar navbar-expand">
					{/* <!-- Header Logo Start --> */}
					<div className="login-header-logo logo-2">
						<a href="/">
							<img src="assets/images/logo-icon.png" alt="Logo" />
						</a>
						<a href="/">
							<img src="assets/images/text-logo.png" alt="Logo" />
						</a>
					</div>
					{/* <!-- Header Logo End --> */}

					{/* <!-- Header Search Start --> */}
					<div className="login-header-search search-2 dropdown">
						<button className="search-toggle" data-bs-toggle="dropdown">
							<i className="flaticon-loupe"></i>
						</button>

						<div className="search-input dropdown-menu">
							<form action="#">
								<input type="text" placeholder="Search here" />
							</form>
						</div>
					</div>
					{/* <!-- Header Search End -->

              <!-- Header Action Start --> */}
					<div className="login-header-action action-2 ml-auto">
						<div className="dropdown">
							<button className="action notification" data-bs-toggle="dropdown">
								<i className="flaticon-notification"></i>
								<span className="active"></span>
							</button>
							<div className="dropdown-menu dropdown-notification">
								<ul className="notification-items-list">
									<li className="notification-item">
										<span className="notify-icon bg-success text-white">
											<i className="icofont-ui-user"></i>
										</span>
										<div className="dropdown-body">
											<a href="/after-enroll">
												<p>
													<strong>Martin</strong> has added a{" "}
													<strong>customer</strong> Successfully
												</p>
											</a>
										</div>
										<span className="notify-time">3:20 am</span>
									</li>
									<li className="notification-item">
										<span className="notify-icon bg-success text-white">
											<i className="icofont-shopping-cart"></i>
										</span>
										<div className="dropdown-body">
											<a href="/after-enroll">
												<p>
													<strong>Jennifer</strong> purchased Light Dashboard
													2.0.
												</p>
											</a>
										</div>
										<span className="notify-time">3:20 am</span>
									</li>
									<li className="notification-item">
										<span className="notify-icon bg-danger text-white">
											<i className="icofont-book-mark"></i>
										</span>
										<div className="dropdown-body">
											<a href="/after-enroll">
												<p>
													<strong>Robin</strong> marked a{" "}
													<strong>ticket</strong> as unsolved.
												</p>
											</a>
										</div>
										<span className="notify-time">3:20 am</span>
									</li>
									<li className="notification-item">
										<span className="notify-icon bg-success text-white">
											<i className="icofont-heart-alt"></i>
										</span>
										<div className="dropdown-body">
											<a href="/after-enroll">
												<p>
													<strong>David</strong> purchased Light Dashboard 1.0.
												</p>
											</a>
										</div>
										<span className="notify-time">3:20 am</span>
									</li>
									<li className="notification-item">
										<span className="notify-icon bg-success text-white">
											<i className="icofont-image"></i>
										</span>
										<div className="dropdown-body">
											<a href="/after-enroll">
												<p>
													<strong> James.</strong> has added a
													<strong>customer</strong> Successfully
												</p>
											</a>
										</div>
										<span className="notify-time">3:20 am</span>
									</li>
								</ul>
								<a className="all-notification" href="/after-enroll">
									See all notifications <i className="icofont-simple-right"></i>
								</a>
							</div>
						</div>

						<a className="action author" href="/after-enroll">
							<img src="assets/images/author/author-07.jpg" alt="Author" />
						</a>

						<div className="dropdown">
							<button className="action more" data-bs-toggle="dropdown">
								<span></span>
								<span></span>
								<span></span>
							</button>
							<ul className="dropdown-menu">
								<li>
									<a className="" href="/after-enroll">
										<i className="icofont-user"></i> Profile
									</a>
								</li>
								<li>
									<a className="" href="/after-enroll">
										<i className="icofont-inbox"></i> Inbox
									</a>
								</li>
								<li>
									<a className="" href="/after-enroll">
										<i className="icofont-logout"></i> Sign Out
									</a>
								</li>
							</ul>
						</div>
					</div>
					{/* <!-- Header Action End --> */}
				</div>
				{/* <!-- Login Header Wrapper End --> */}
			</div>
			{/* <!-- Login Header End --> */}

			{/* <!-- Courses Enroll Start --> */}
			<div className="section">
				{/* <!-- Courses Enroll Wrapper Start --> */}
				<div className="courses-enroll-wrapper">
					{/* <!-- Courses Video Player Start --> */}
					<div className="courses-video-player">
						{/* <!-- Courses Video Container Start --> */}
						<div className="vidcontainer">
							<video id="myvid"></video>

							<div className="video-play-bar">
								<div className="topControl">
									<div className="progress">
										<span className="bufferBar"></span>
										<span className="timeBar"></span>
									</div>
									<div className="time">
										<span className="current"></span> /
										<span className="duration"></span>
									</div>
								</div>

								<div className="controllers">
									<div className="controllers-left">
										<button className="prevvid disabled" title="Previous video">
											<i className="icofont-ui-previous"></i>
										</button>
										<button
											className="btnPlay"
											title="Play/Pause video"
										></button>
										<button className="nextvid" title="Next video">
											<i className="icofont-ui-next"></i>
										</button>
										<button
											className="sound sound2"
											title="Mute/Unmute sound"
										></button>
										<div className="volume" title="Set volume">
											<span className="volumeBar"></span>
										</div>
									</div>

									<div className="controllers-right">
										<button className="btnspeed" title="Video speed">
											<i className="fa fa-gear"></i>
										</button>
										<ul className="speedcnt">
											<li className="spdx50">1.5</li>
											<li className="spdx25">1.25</li>
											<li className="spdx1 selected">Normal</li>
											<li className="spdx050">0.5</li>
										</ul>
										<button className="btnFS" title="full screen"></button>
									</div>
								</div>
							</div>

							<div className="bigplay" title="play the video">
								<i className="fa fa-play"></i>
							</div>

							<div className="loading">
								<div className="spinner-border spinner">
									<span className="visually-hidden">Loading...</span>
								</div>
							</div>
						</div>
						{/* <!-- Courses Video Container End --> */}

						{/* <!-- Courses Enroll Content Start --> */}
						<div className="courses-enroll-content">
							{/* <!-- Courses Enroll Title Start --> */}
							<div className="courses-enroll-title">
								<h2 className="title">
									Finance & Investment Series: Learn to Budget and Calculate
									Your Net Worth.
								</h2>
								<p>
									<i className="icofont-eye-alt"></i> <span>8,350</span>{" "}
									Students are watching
								</p>
							</div>
							{/* <!-- Courses Enroll Title End --> */}

							{/* <!-- Courses Enroll Tab Start --> */}
							<div className="courses-enroll-tab">
								<div className="enroll-tab-menu">
									<ul className="nav">
										<li>
											<button
												className="active"
												data-bs-toggle="tab"
												data-bs-target="#tab1"
											>
												Overview
											</button>
										</li>
										<li>
											<button data-bs-toggle="tab" data-bs-target="#tab2">
												Description
											</button>
										</li>
										<li>
											<button data-bs-toggle="tab" data-bs-target="#tab3">
												Certificates
											</button>
										</li>
										<li>
											<button data-bs-toggle="tab" data-bs-target="#tab4">
												Instructor
											</button>
										</li>
									</ul>
								</div>
								<div className="enroll-share">
									<a href="/after-enroll">
										<i className="icofont-share-alt"></i> Share
									</a>
								</div>
							</div>
							{/* <!-- Courses Enroll Tab End --> */}

							{/* <!-- Courses Enroll Tab Content Start --> */}
							<div className="courses-enroll-tab-content">
								<div className="tab-content">
									<div className="tab-pane fade show active" id="tab1">
										{/* <!-- Overview Start --> */}
										<div className="overview">
											<div className="row">
												<div className="col-lg-4">
													<div className="enroll-tab-title">
														<h3 className="title">Course Details</h3>
													</div>
												</div>
												<div className="col-lg-8">
													<div className="enroll-tab-content">
														<p>
															Lorem Ipsum is simply dummy text of the printing
															and typesetting industry. Lorem Ipsum has been
															industry's standard dummy text ever since the
															1500s when andom unknown printer took a galley of
															type scrambled it to make a type specimen book. It
															has survived not’s only and five centuries, but
															also the lea into electronic typesetting,
															remaining priting essentially unchanged. It was
															popularsed in the 1960 with containing Lorem Ipsum
															passages desktop publishing software.
														</p>

														<table className="table">
															<tbody>
																<tr>
																	<th>
																		Instructor <span>:</span>
																	</th>
																	<td>Pamela Foster</td>
																</tr>
																<tr>
																	<th>
																		Duration <span>:</span>
																	</th>
																	<td>08 hr 15 mins</td>
																</tr>
																<tr>
																	<th>
																		Lectures <span>:</span>
																	</th>
																	<td>2,16</td>
																</tr>
																<tr>
																	<th>
																		Level <span>:</span>
																	</th>
																	<td>Secondary</td>
																</tr>
																<tr>
																	<th>
																		Language <span>:</span>
																	</th>
																	<td>English</td>
																</tr>
																<tr>
																	<th>
																		Caption’s <span>:</span>
																	</th>
																	<td>Yes</td>
																</tr>
															</tbody>
														</table>

														<p>
															Lorem Ipsum is simply dummy text of the printing
															and typesetting industry. Lorem Ipsum has been
															industry's standard dummy text ever since the
															1500s when andom unknown printer took a galley of
															type scrambled it to make a type specimen book.
														</p>

														<p>
															Lorem Ipsum is simply dummy text of the printing
															and typesetting industry. Lorem Ipsum has been
															industry's standard dummy text ever since the
															1500s when andom unknown printer took a galley of
															type scrambled it to make a type specimen book.
														</p>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Overview End --> */}
									</div>
									<div className="tab-pane fade" id="tab2">
										{/* <!-- Description Start --> */}
										<div className="description">
											<div className="row">
												<div className="col-lg-4">
													<div className="enroll-tab-title">
														<h3 className="title">Description</h3>
													</div>
												</div>
												<div className="col-lg-8">
													<div className="enroll-tab-content">
														<p>
															Lorem Ipsum is simply dummy text of the printing
															and typesetting industry. Lorem Ipsum has been
															industry's standard dummy text ever since the
															1500s when andom unknown printer took a galley of
															type scrambled it to make a type specimen book. It
															has survived not’s only and five centuries, but
															also the lea into electronic typesetting,
															remaining priting essentially unchanged. It was
															popularsed in the 1960 with containing Lorem Ipsum
															passages desktop publishing software.
														</p>

														<p className="text">
															“Lorem Ipsum is simply dummy text of the printing
															and typesetting industry. Lorem Ipsum has
															industry's standard dummy text ever since the
															1500s when andom unknown printer took a galley
															scrambled it to make a type specimen book.”
														</p>

														<p>
															Lorem Ipsum is simply dummy text of the printing
															and typesetting industry. Lorem Ipsum has been
															industry's standard dummy text ever since the
															1500s when andom unknown printer took a galley of
															type scrambled it to make a type specimen book. It
															has survived not’s only and five centuries, but
															also the lea into electronic typesetting,
															remaining priting essentially unchanged. It was
															popularsed in the 1960 with containing Lorem Ipsum
															passages desktop publishing software.
														</p>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Description End --> */}
									</div>
									<div className="tab-pane fade" id="tab3">
										{/* <!-- Certificates Start --> */}
										<div className="certificates">
											<div className="row">
												<div className="col-lg-4">
													<div className="enroll-tab-title">
														<h3 className="title">EduLe Certificates</h3>
													</div>
												</div>
												<div className="col-lg-8">
													<div className="enroll-tab-content">
														<p>
															Lorem Ipsum is simply dummy text of the printing
															and typesetting industry. Lorem Ipsum has been
															industry's standard dummy text ever since the
															1500s when andom unknown printer took a galley of
															type scrambled it to make a type specimen book. It
															has survived not’s only and five centuries, but
															also the lea into electronic typesetting,
															remaining priting essentially unchanged. It was
															popularsed in the 1960 with containing Lorem Ipsum
															passages desktop publishing software.
														</p>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Certificates End --> */}
									</div>
									<div className="tab-pane fade" id="tab4">
										{/* <!-- Instructor Start --> */}
										<div className="instructor">
											<div className="row">
												<div className="col-lg-4">
													<div className="enroll-tab-title">
														<h3 className="title">Instructor</h3>
													</div>
												</div>
												<div className="col-lg-8">
													<div className="enroll-tab-content">
														{/* <!-- Single Instructor Start --> */}
														<div className="single-instructor">
															<div className="review-author">
																<div className="author-thumb">
																	<img
																		src="assets/images/author/author-06.jpg"
																		alt="Author"
																	/>
																</div>
																<div className="author-content">
																	<h4 className="name">Sara Alexander</h4>
																	<span className="designation">
																		Product Designer, USA
																	</span>
																	<span className="rating-star">
																		<span
																			className="rating-bar"
																			style={{ width: "80%" }}
																		></span>
																	</span>
																</div>
															</div>
															<p>
																Lorem Ipsum is simply dummy text of the printing
																and typesetting industry. Lorem Ipsum has been
																industry's standard dummy text ever since the
																1500s when andom unknown printer took a galley
																of type scrambled it to make a type specimen
																book.
															</p>
														</div>
														{/* <!-- Single Instructor End --> */}

														{/* <!-- Single Instructor Start --> */}
														<div className="single-instructor">
															<div className="review-author">
																<div className="author-thumb">
																	<img
																		src="assets/images/author/author-07.jpg"
																		alt="Author"
																	/>
																</div>
																<div className="author-content">
																	<h4 className="name">Karol Bachman</h4>
																	<span className="designation">
																		Product Designer, USA
																	</span>
																	<span className="rating-star">
																		<span
																			className="rating-bar"
																			style={{ width: "80%" }}
																		></span>
																	</span>
																</div>
															</div>
															<p>
																Lorem Ipsum is simply dummy text of the printing
																and typesetting industry. Lorem Ipsum has been
																industry's standard dummy text ever since the
																1500s when andom unknown printer took a galley
																of type scrambled it to make a type specimen
																book.
															</p>
														</div>
														{/* <!-- Single Instructor End --> */}

														{/* <!-- Single Instructor Start --> */}
														<div className="single-instructor">
															<div className="review-author">
																<div className="author-thumb">
																	<img
																		src="assets/images/author/author-03.jpg"
																		alt="Author"
																	/>
																</div>
																<div className="author-content">
																	<h4 className="name">Gertude Culbertson</h4>
																	<span className="designation">
																		Product Designer, USA
																	</span>
																	<span className="rating-star">
																		<span
																			className="rating-bar"
																			style={{ width: "80%" }}
																		></span>
																	</span>
																</div>
															</div>
															<p>
																Lorem Ipsum is simply dummy text of the printing
																and typesetting industry. Lorem Ipsum has been
																industry's standard dummy text ever since the
																1500s when andom unknown printer took a galley
																of type scrambled it to make a type specimen
																book.
															</p>
														</div>
														{/* <!-- Single Instructor End --> */}
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Instructor End --> */}
									</div>
								</div>
							</div>
							{/* <!-- Courses Enroll Tab Content End --> */}
						</div>
						{/* <!-- Courses Enroll Content End --> */}
					</div>
					{/* <!-- Courses Video Player End --> */}

					{/* <!-- Courses Video Playlist Start --> */}
					<div className="courses-video-playlist">
						<div className="playlist-title">
							<h3 className="title">Course Content</h3>
							<span>80 Lessons (8h 15m)</span>
						</div>

						{/* <!-- Video Playlist Start  --> */}
						<div className="video-playlist">
							<div className="accordion" id="videoPlaylist">
								{/* <!-- Accordion Items Start  --> */}
								<div className="accordion-item">
									<button
										className="collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseOne"
									>
										<p>
											Lesson-01: Mindful Growth & the Creative Journey, Find
											Your Spark & Map Your Future
										</p>
										<span className="total-duration">01 hour 48 minutes</span>
									</button>

									<div
										id="collapseOne"
										className="accordion-collapse collapse"
										data-bs-parent="#videoPlaylist"
									>
										<nav className="vids">
											<a
												className="link active"
												href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119"
											>
												<p>01. The Complete Medicine MasterclassName</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119"
											>
												<p>02. Standard dummy text ever since the</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119"
											>
												<p>03. Printer took a galley of type and scrambled</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119"
											>
												<p>04. It to make a type specimen book & break</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
											>
												<p>
													05. Survived not only five centuries also the leap
												</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
											>
												<p>06. Into typesettingremaining essentially</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
											>
												<p>07. Unchanged. It was popularised in the 1960s</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
											>
												<p>08. The release of Letraset sheets containing</p>
												<span className="total-duration">08 minutes</span>
											</a>
										</nav>
									</div>
								</div>
								{/* <!-- Accordion Items End  -->

                          <!-- Accordion Items Start  --> */}
								<div className="accordion-item">
									<button
										className="collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseTwo"
									>
										<p>
											Lesson-02: Science Fiction & Fantasy: Creating Unique and
											Powerful Worlds
										</p>
										<span className="total-duration">01 hour 48 minutes</span>
									</button>

									<div
										id="collapseTwo"
										className="accordion-collapse collapse"
										data-bs-parent="#videoPlaylist"
									>
										<nav className="vids">
											<a
												className="link"
												href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119"
											>
												<p>09. The Complete Medicine MasterclassName</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119"
											>
												<p>10. Standard dummy text ever since the</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119"
											>
												<p>11. Printer took a galley of type and scrambled</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119"
											>
												<p>12. It to make a type specimen book & break</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
											>
												<p>
													13. Survived not only five centuries also the leap
												</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
											>
												<p>14. Into typesettingremaining essentially</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
											>
												<p>15. Unchanged. It was popularised in the 1960s</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
											>
												<p>16. The release of Letraset sheets containing</p>
												<span className="total-duration">08 minutes</span>
											</a>
										</nav>
									</div>
								</div>
								{/* <!-- Accordion Items End  -->

                          <!-- Accordion Items Start  --> */}
								<div className="accordion-item">
									<button
										className="collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseThree"
									>
										<p>
											Lesson-03: Autobiographical Fiction: Write a Short tory
											from Personal Experience
										</p>
										<span className="total-duration">01 hour 48 minutes</span>
									</button>

									<div
										id="collapseThree"
										className="accordion-collapse collapse"
										data-bs-parent="#videoPlaylist"
									>
										<nav className="vids">
											<a
												className="link"
												href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119"
											>
												<p>17. The Complete Medicine MasterclassName</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119"
											>
												<p>18. Standard dummy text ever since the</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119"
											>
												<p>19. Printer took a galley of type and scrambled</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119"
											>
												<p>20. It to make a type specimen book & break</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
											>
												<p>
													21. Survived not only five centuries also the leap
												</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
											>
												<p>22. Into typesettingremaining essentially</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
											>
												<p>23. Unchanged. It was popularised in the 1960s</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
											>
												<p>24. The release of Letraset sheets containing</p>
												<span className="total-duration">08 minutes</span>
											</a>
										</nav>
									</div>
								</div>
								{/* <!-- Accordion Items End  -->

                          <!-- Accordion Items Start  --> */}
								<div className="accordion-item">
									<button
										className="collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseFour"
									>
										<p>
											Lesson-04: Writing for Self-Discovery: 6 Journaling
											Prompts for Gratitude and Growth
										</p>
										<span className="total-duration">01 hour 48 minutes</span>
									</button>

									<div
										id="collapseFour"
										className="accordion-collapse collapse"
										data-bs-parent="#videoPlaylist"
									>
										<nav className="vids">
											<a
												className="link"
												href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119"
											>
												<p>25. The Complete Medicine MasterclassName</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119"
											>
												<p>26. Standard dummy text ever since the</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119"
											>
												<p>27. Printer took a galley of type and scrambled</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119"
											>
												<p>28. It to make a type specimen book & break</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
											>
												<p>
													29. Survived not only five centuries also the leap
												</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
											>
												<p>30. Into typesettingremaining essentially</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
											>
												<p>31. Unchanged. It was popularised in the 1960s</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
											>
												<p>32. The release of Letraset sheets containing</p>
												<span className="total-duration">08 minutes</span>
											</a>
										</nav>
									</div>
								</div>
								{/* <!-- Accordion Items End  -->

                          <!-- Accordion Items Start  --> */}
								<div className="accordion-item">
									<button
										className="collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseFive"
									>
										<p>
											Lesson-05: Copywriting For Beginners: How To Write Web
											Copy That Sells Without Being Cheesy
										</p>
										<span className="total-duration">01 hour 48 minutes</span>
									</button>

									<div
										id="collapseFive"
										className="accordion-collapse collapse"
										data-bs-parent="#videoPlaylist"
									>
										<nav className="vids">
											<a
												className="link"
												href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119"
											>
												<p>33. The Complete Medicine MasterclassName</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119"
											>
												<p>34. Standard dummy text ever since the</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119"
											>
												<p>35. Printer took a galley of type and scrambled</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119"
											>
												<p>36. It to make a type specimen book & break</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
											>
												<p>
													37. Survived not only five centuries also the leap
												</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
											>
												<p>38. Into typesettingremaining essentially</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
											>
												<p>39. Unchanged. It was popularised in the 1960s</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
											>
												<p>40. The release of Letraset sheets containing</p>
												<span className="total-duration">08 minutes</span>
											</a>
										</nav>
									</div>
								</div>
								{/* <!-- Accordion Items End  -->

                          <!-- Accordion Items Start  --> */}
								<div className="accordion-item">
									<button
										className="collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseSix"
									>
										<p>
											Lesson-06: How to Write a Personal Statement - The
											Complete Medicine MasterclassName
										</p>
										<span className="total-duration">01 hour 48 minutes</span>
									</button>

									<div
										id="collapseSix"
										className="accordion-collapse collapse"
										data-bs-parent="#videoPlaylist"
									>
										<nav className="vids">
											<a
												className="link"
												href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119"
											>
												<p>41. The Complete Medicine MasterclassName</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119"
											>
												<p>42. Standard dummy text ever since the</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119"
											>
												<p>43. Printer took a galley of type and scrambled</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119"
											>
												<p>44. It to make a type specimen book & break</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
											>
												<p>
													45. Survived not only five centuries also the leap
												</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
											>
												<p>46. Into typesettingremaining essentially</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
											>
												<p>47. Unchanged. It was popularised in the 1960s</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
											>
												<p>48. The release of Letraset sheets containing</p>
												<span className="total-duration">08 minutes</span>
											</a>
										</nav>
									</div>
								</div>
								{/* <!-- Accordion Items End  -->

                          <!-- Accordion Items Start  --> */}
								<div className="accordion-item">
									<button
										className="collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseSaven"
									>
										<p>
											Lesson-07: Autobiographical Fiction: Write a Short tory
											from Personal Experience
										</p>
										<span className="total-duration">01 hour 48 minutes</span>
									</button>

									<div
										id="collapseSaven"
										className="accordion-collapse collapse"
										data-bs-parent="#videoPlaylist"
									>
										<nav className="vids">
											<a
												className="link"
												href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119"
											>
												<p>49. The Complete Medicine MasterclassName</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119"
											>
												<p>50. Standard dummy text ever since the</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119"
											>
												<p>51. Printer took a galley of type and scrambled</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119"
											>
												<p>52. It to make a type specimen book & break</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
											>
												<p>
													53. Survived not only five centuries also the leap
												</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
											>
												<p>54. Into typesettingremaining essentially</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
											>
												<p>55. Unchanged. It was popularised in the 1960s</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
											>
												<p>56. The release of Letraset sheets containing</p>
												<span className="total-duration">08 minutes</span>
											</a>
										</nav>
									</div>
								</div>
								{/* <!-- Accordion Items End  -->

                          <!-- Accordion Items Start  --> */}
								<div className="accordion-item">
									<button
										className="collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseEight"
									>
										<p>
											Lesson-08: Writing for Self-Discovery: 6 Journaling
											Prompts for Gratitude and Growth
										</p>
										<span className="total-duration">01 hour 48 minutes</span>
									</button>

									<div
										id="collapseEight"
										className="accordion-collapse collapse"
										data-bs-parent="#videoPlaylist"
									>
										<nav className="vids">
											<a
												className="link"
												href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119"
											>
												<p>57. The Complete Medicine MasterclassName</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119"
											>
												<p>58. Standard dummy text ever since the</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119"
											>
												<p>59. Printer took a galley of type and scrambled</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119"
											>
												<p>60. It to make a type specimen book & break</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
											>
												<p>
													61. Survived not only five centuries also the leap
												</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
											>
												<p>62. Into typesettingremaining essentially</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
											>
												<p>63. Unchanged. It was popularised in the 1960s</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
											>
												<p>64. The release of Letraset sheets containing</p>
												<span className="total-duration">08 minutes</span>
											</a>
										</nav>
									</div>
								</div>
								{/* <!-- Accordion Items End  -->

                          <!-- Accordion Items Start  --> */}
								<div className="accordion-item">
									<button
										className="collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseNine"
									>
										<p>
											Lesson-09: Copywriting For Beginners: How To Write Web
											Copy That Sells Without Being Cheesy
										</p>
										<span className="total-duration">01 hour 48 minutes</span>
									</button>

									<div
										id="collapseNine"
										className="accordion-collapse collapse"
										data-bs-parent="#videoPlaylist"
									>
										<nav className="vids">
											<a
												className="link"
												href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119"
											>
												<p>65. The Complete Medicine MasterclassName</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119"
											>
												<p>66. Standard dummy text ever since the</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119"
											>
												<p>67. Printer took a galley of type and scrambled</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119"
											>
												<p>68. It to make a type specimen book & break</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
											>
												<p>
													69. Survived not only five centuries also the leap
												</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
											>
												<p>70. Into typesettingremaining essentially</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
											>
												<p>71. Unchanged. It was popularised in the 1960s</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
											>
												<p>72. The release of Letraset sheets containing</p>
												<span className="total-duration">08 minutes</span>
											</a>
										</nav>
									</div>
								</div>
								{/* <!-- Accordion Items End  -->

                          <!-- Accordion Items Start  --> */}
								<div className="accordion-item">
									<button
										className="collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseTen"
									>
										<p>
											Lesson-10: How to Write a Personal Statement - The
											Complete Medicine MasterclassName
										</p>
										<span className="total-duration">01 hour 48 minutes</span>
									</button>

									<div
										id="collapseTen"
										className="accordion-collapse collapse"
										data-bs-parent="#videoPlaylist"
									>
										<nav className="vids">
											<a
												className="link"
												href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119"
											>
												<p>73. The Complete Medicine MasterclassName</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119"
											>
												<p>74. Standard dummy text ever since the</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119"
											>
												<p>75. Printer took a galley of type and scrambled</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119"
											>
												<p>76. It to make a type specimen book & break</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
											>
												<p>
													77. Survived not only five centuries also the leap
												</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
											>
												<p>78. Into typesettingremaining essentially</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
											>
												<p>79. Unchanged. It was popularised in the 1960s</p>
												<span className="total-duration">08 minutes</span>
											</a>

											<a
												className="link"
												href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
											>
												<p>80. The release of Letraset sheets containing</p>
												<span className="total-duration">08 minutes</span>
											</a>
										</nav>
									</div>
								</div>
								{/* <!-- Accordion Items End  --> */}
							</div>
						</div>
						{/* <!-- Video Playlist End  --> */}
					</div>
					{/* <!-- Courses Video Playlist End --> */}
				</div>
				{/* <!-- Courses Enroll Wrapper End --> */}
			</div>
			{/* <!-- Courses Enroll End --> */}

			<Download />
			<Footer />
		</div>
	);
}

export default Courses;
