import React from "react";
import Slider from "react-slick";
import "./Landscape.css";
import { site_url } from "../../../../../constant";

const MultiLandscape = ({ videoData }) => {
	const [slShow, setSlShow] = React.useState(0);
	React.useEffect(() => {
		var show = videoData.length <= 4 ? videoData.length : 5;
		setSlShow(show);
	}, [videoData]);

	const settings = {
		dots: false,
		infinite: false,
		initialSlide: 0,
		speed: 500,
		slidesToShow: slShow,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings} className='d-flex px-2 py-3'>
			{videoData.map((v, i) => {
				var spliTitle = v.title.split(" ");
				spliTitle = spliTitle.join("-");
				spliTitle = spliTitle.toLowerCase();

				return (
					<a href={`${site_url}video/${v.videoId}/${spliTitle}`} key={i}>
						<div className='section-land-video-item slick'>
							<div
								className={`land-poster ${v.isPaid ? "" : "is-paid-false"}`}
								style={{
									backgroundImage: `url(${site_url}uploads/${v.posterImage})`,
								}}></div>
							<div className='land-empty'></div>
							<div className='land-video-outer'>
								<div className='land-video-info'>
									<div className='land-info-title'>{v.title}</div>
								</div>
							</div>
						</div>
					</a>
				);
			})}
		</Slider>
	);
};

export default MultiLandscape;
