import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { base_url, req_header } from "../constant";
import { NavBar, Footer } from "./components";
import { Home } from "./pages";

const Fixture = () => {
	const [videoGenre, setVideoGenre] = React.useState([]);
	const [songGenre, setSongGenre] = React.useState([]);

	const fetchGenre = React.useCallback(async () => {
		await axios
			.post(
				`${base_url}general/getgenres`,
				{},
				{
					headers: req_header,
				},
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
	}, [fetchGenre]);

	return (
		<Router>
			<NavBar videoGenre={videoGenre} songGenre={songGenre} />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
};

export default Fixture;
