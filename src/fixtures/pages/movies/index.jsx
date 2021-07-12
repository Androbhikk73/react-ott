import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { base_url, site_url, req_header } from "../../../constant";
import "./Movie.css";

const Movies = ({ videoGenre }) => {
	let { id } = useParams();
	const [type, setType] = React.useState("");
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
		videoGenre.map((g) => (g.id === id ? setType(g.title) : ""));

		// Get Movie List by Genre
		getMovieList();
	}, [getMovieList, videoGenre, id]);

	return (
		<Container fluid className='px-2 pt-5 pb-2 mt-3'>
			<div className='px-1 pt-2 align-items-center heading-container'>
				<h5 className='heading-content'>Search Movies for {type}</h5>
			</div>
			{movieList.length > 0 ? (
				<Container fluid className='mt-2 px-2 d-flex flex-wrap'>
					{movieList.map((v, i) => {
						var free_item_class = v.isPaid ? "" : "is-paid-false";

						return (
							<a href='/' key={i} className='my-2'>
								<div className='section-video-item slick'>
									<div
										className={`poster ${free_item_class}`}
										style={{
											backgroundImage: `url(${site_url}uploads/${v.posterImage})`,
										}}></div>
									<div
										style={{
											marginTop: "135%",
										}}></div>
									<div className='video-outer'>
										<div className='video-info'>
											<div className='info-title'>{v.title}</div>
										</div>
									</div>
								</div>
							</a>
						);
					})}
				</Container>
			) : (
				<Container className='d-flex justify-content-center align-items-center mt-2 no-data-container'>
					<div className='heading-content'>No Data Available Right Now!</div>
				</Container>
			)}
		</Container>
	);
};

export default Movies;
