import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import { site_url } from "../../../../../constant";

const OCarousel = ({ cData }) => {
	return (
		<Carousel controls={false}>
			{cData.map((item, i) => (
				<Carousel.Item key={i}>
					<img className='d-block w-100 carousel-image' src={`${site_url}uploads/${item.landscapePosterImage}`} alt={item.title} height='500' />
					<div className='carousel-caption-outer'>
						<Carousel.Caption>
							<h3>{item.title}</h3>
							<p>
								{item.genres}, {item.year}
							</p>
							{item.videoLink && (
								<a href={item.videoLink} className='btn btn-danger'>
									Watch Now
								</a>
							)}
						</Carousel.Caption>
					</div>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default OCarousel;
