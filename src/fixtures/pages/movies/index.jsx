import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { base_url, site_url, req_header } from "../../../constant";
import "./Movie.css";

const Movies = () => {
	let { id } = useParams();
	const [movieList, setMovieList] = React.useState([]);

	const getMovieList = React.useCallback(async () => {
		await axios
			.post(
				`${base_url}general/SearchVideo`,
				{ genres: id },
				{
					headers: req_header,
				}
			)
			.then((res) => {
				let mList = res.data.data;
				// console.log(mList);
				setMovieList(mList);
			})
			.catch((e) => console.error(e));
	}, [id]);

	React.useEffect(() => {
		// Get Movie List by Genre
		getMovieList();
	}, [getMovieList]);

	return (
		<Container fluid className="px-2 py-2">
			{movieList.length > 0 ? (
				<>
					<div className="d-flex px-1 pt-2 justify-content-between align-items-center heading-container">
						<h5 className="heading-content">
							Search Movies for Action
						</h5>
					</div>
					<div className="d-flex px-2 py-3">
						{movieList.map((v, i) => {
							var free_item_class = v.isPaid
								? ""
								: "is-paid-false";

							return (
								<a href="/" key={i}>
									<div
										className="section-video-item slick"
										style={{
											width: "188px",
										}}
									>
										<div
											className={`poster ${free_item_class}`}
											style={{
												backgroundImage: `url(${site_url}uploads/${v.posterImage})`,
											}}
										></div>
										<div
											style={{
												marginTop: "135%",
											}}
										></div>
										<div className="video-outer">
											<div className="video-info">
												<div className="info-title">
													{v.title}
												</div>
											</div>
										</div>
									</div>
								</a>
							);
						})}
					</div>
				</>
			) : (
				<></>
			)}

			{/* {					
movieList.map((_, i) => {
						return (
							<div key={i}>
								<div className='d-flex px-1 pt-2 justify-content-between align-items-center heading-container'>
									<h5 className='heading-content'>{_.title}</h5>
									<a href={`${site_url}section/${_.id}`} className='heading-content'>
										View All
									</a>
								</div>

								{(() => {
									if (_.sectionType === "1") {
										if (_.posterType === "1") {
											return <MultiLandscape videoData={_.videos} />;
										} else {
											return <MultiPotrait videoData={_.videos} sectionType={_.sectionType} posterType={_.posterType} />;
										}
									} else {
										if (_.posterType === "1") {
											return <SingleImage videoData={_.videos} />;
										} else {
											return <MultiPotrait videoData={_.videos} sectionType={_.sectionType} posterType={_.posterType} />;
										}
									}
								})()}
							</div>
						);
					} else {
						return null;
					}
				})} */}
		</Container>
	);
};

export default Movies;
