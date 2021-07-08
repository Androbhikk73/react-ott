import React from "react";
import Slider from "react-slick";
import "./Potrait.css";
import { site_url } from "../../../../../constant";

const MultiPotrait = ({ videoData, sectionType, posterType }) => {
	const [sShow, setSShow] = React.useState(0);
	React.useEffect(() => {
		var show = videoData.length <= 5 ? videoData.length : 7;
		setSShow(show);
	}, [videoData]);

	const settings = {
		dots: false,
		infinite: false,
		initialSlide: 0,
		speed: 500,
		slidesToShow: sShow,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings} className='d-flex px-2 py-3'>
			{videoData.map((v, i) => {
				var spliTitle = v.title.split(" ");
				spliTitle = spliTitle.join("-");
				spliTitle = spliTitle.toLowerCase();
				var imgPath = v.posterImage.includes("/") ? v.posterImage : `artists/${v.posterImage}`;
				var art_class = v.posterImage.includes("/") ? "" : "art-class";
				var free_item_class = v.isPaid ? "" : sectionType === "2" ? "" : "is-paid-false";

				return (
					<a href={`${site_url}video/${v.videoId}/${spliTitle}`} key={i}>
						<div
							className='section-video-item slick'
							style={{
								width: `${posterType === "0" ? "188px" : "175px"}`,
							}}>
							<div
								className={`poster ${art_class} ${free_item_class}`}
								style={{
									backgroundImage: `url(${site_url}uploads/${imgPath})`,
								}}></div>
							<div
								className={art_class}
								style={{
									marginTop: `${posterType === "0" ? "135%" : "100%"}`,
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
		</Slider>
	);
};

export default MultiPotrait;
