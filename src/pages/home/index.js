import React from "react";
import axios from "axios";
import {
	NavBar,
	Carousel,
	MultiPotrait,
	SingleImage,
	MultiLandscape,
} from "./components";
import { base_url, req_header } from "../../constant";

const Home = () => {
	const [videoGenre, setVideoGenre] = React.useState([]);
	const [songGenre, setSongGenre] = React.useState([]);
	const [carouselData, setCarouselData] = React.useState([]);
	const [section, setSection] = React.useState([]);

	const fetchGenre = React.useCallback(async () => {
		await axios
			.post(
				`${base_url}general/getgenres`,
				{},
				{
					headers: req_header,
				}
			)
			.then((res) => {
				let modelMovieGenre = res.data.modelMovieGenre;
				let genres = res.data.data;
				var mg,
					gD = [];
				mg = modelMovieGenre.split(",");

				genres.map((g) => (mg.includes(g.id) ? gD.push(g) : null));
				setVideoGenre(gD);
			});
	}, []);

	const fetchSection = React.useCallback(async () => {
		await axios
			.post(
				`${base_url}General/GetSection`,
				{ categoryId: 1 },
				{
					headers: req_header,
				}
			)
			.then((res) => {
				let resCarouselData = res.data.carousel;
				let resSectionData = res.data.section;
				setCarouselData(resCarouselData);
				setSection(resSectionData);
			});
	}, []);

	React.useEffect(() => {
		var songType = [
			{
				link: "audio-songs",
				title: "Audio",
			},
			{
				link: "audio-story",
				title: "Audio Story",
			},
			{
				link: "playlist",
				title: "Playlist",
			},
			{
				link: "video-songs",
				title: "Video",
			},
		];
		setSongGenre(songType);

		// Get Movie Genre
		fetchGenre();
		// Get Section Data
		fetchSection();
	}, [fetchGenre, fetchSection]);

	return (
		<>
			<NavBar videoGenre={videoGenre} songGenre={songGenre} />
			<Carousel cData={carouselData} />
			<MultiPotrait />
			<SingleImage />
			<MultiLandscape />
		</>
	);
};

export default Home;
