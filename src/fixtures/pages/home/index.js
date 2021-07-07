import React from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Carousel, MultiPotrait, SingleImage, MultiLandscape } from "./components";
import { base_url, req_header } from "../../../constant";
import "./Home.css";

const Home = () => {
	const [carouselData, setCarouselData] = React.useState([]);
	const [section, setSection] = React.useState([]);

	const fetchSection = React.useCallback(async () => {
		await axios
			.post(
				`${base_url}General/GetSection`,
				{ categoryId: 1 },
				{
					headers: req_header,
				},
			)
			.then((res) => {
				let resCarouselData = res.data.carousel;
				let resSectionData = res.data.section;
				setCarouselData(resCarouselData);
				setSection(resSectionData);
			});
	}, []);

	React.useEffect(() => {
		// Get Section Data
		fetchSection();
	}, [fetchSection]);

	return (
		<>
			{/* <Carousel cData={carouselData} /> */}

			<Container fluid className='py-2'>
				{section.map((_, i) => {
					if (_.videos.length > 0) {
						return (
							<div key={i}>
								<div className='d-flex px-1 pt-2 justify-content-between align-items-center heading-container'>
									<h5 className='heading-content'>{_.title}</h5>
									<h6 className='heading-content'>View All</h6>
								</div>

								{(() => {
									if (_.sectionType === "1") {
										if (_.posterType === "1") {
											return <MultiLandscape videoData={_.videos} />;
										} else {
											return <MultiPotrait videoData={_.videos} posterType={_.posterType} />;
										}
									} else {
										return <SingleImage videoData={_.videos} />;
									}
								})()}
							</div>
						);
					} else {
						return null;
					}
				})}
			</Container>
		</>
	);
};

export default Home;

// Potrait { "sectionType": "1", "posterType": "0", }
// Landscape { "sectionType": "1", "posterType": "1",  }
// Single Image { "sectionType": "0", "posterType": "1",  } //
// Audio Story { "sectionType": "1", "posterType": "2", }
