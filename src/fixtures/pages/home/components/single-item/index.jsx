import React from "react";
import "./Single.css";
import { site_url } from "../../../../../constant";

const SingleItem = ({ videoData }) => {
	return (
		<div className='px-2 py-3'>
			{videoData.map((v, i) => {
				var spliTitle = v.title.split(" ");
				spliTitle = spliTitle.join("-");
				spliTitle = spliTitle.toLowerCase();

				return (
					<a href={`https://www.klikk.tv/video/${v.videoId}/${spliTitle}`} key={i}>
						<div
							className='single-image-container'
							style={{
								backgroundImage: `url(${site_url}uploads/${v.landscapePosterImage})`,
							}}></div>
					</a>
				);
			})}
		</div>
	);
};

export default SingleItem;
