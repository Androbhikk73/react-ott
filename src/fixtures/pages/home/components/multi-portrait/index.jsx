import React from "react";
// import OwlCarousel from "react-owl-carousel";
import "./Potrait.css";
import { site_url } from "../../../../../constant";

const MultiPotrait = ({ videoData, posterType }) => {
	return (
		<div className='px-2 py-3'>
			<div className='row'>
				{videoData.map((v, i) => {
					var spliTitle = v.title.split(" ");
					spliTitle = spliTitle.join("-");
					spliTitle = spliTitle.toLowerCase();
					var imgPath = v.posterImage.includes("/") ? v.posterImage : `artists/${v.posterImage}`;
					var art_class = v.posterImage.includes("/") ? "" : "art-class";

					return (
						<div className='col-lg-2' key={i}>
							<a href={`${site_url}video/${v.videoId}/${spliTitle}`}>
								<div className='section-video-item'>
									<div
										className={`poster ${art_class} ${v.isPaid ? "" : "is-paid-false"}`}
										style={{
											backgroundImage: `url(${site_url}uploads/${imgPath})`,
										}}>
										<div className={`empty ${art_class}`}></div>
										<div className='video-outer'>
											<div className='video-info'>
												<div className='info-title'>{v.title}</div>
											</div>
										</div>
									</div>
								</div>
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MultiPotrait;
