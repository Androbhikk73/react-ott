import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { site_url } from "../../../constant";

const KlikkFooter = () => {
	return (
		<footer className='footer-from-top bg-dark'>
			<div className='footer-top'>
				<Container>
					<Row>
						<Col lg='3' sm='6'>
							<div className='company-info'>
								<div className='d-flex company-logo'>
									<img src={`${site_url}siteasset/img/logo.png`} alt='' height={25} />
								</div>

								<ul className='list-none'>
									<li>
										<span>Email:</span>
										<a href='mailto:abc@abc.com'>abc@abc.com</a>
									</li>
									<li>
										<span>Address:</span>
										<p>Angel Television Pvt. Ltd., 1, Acharya Jagadish Chandra Bose Rd, near Rabindra Sadan Metro, Kolkata - 700020, West Bengal</p>
									</li>
								</ul>
							</div>
						</Col>
						<Col lg='9' sm='6'>
							<div className='grid-item-container'>
								<div className='grid-item'>
									<a href='/' target='_blank' style={{ padding: "0% 2% 0% 0%" }} className='grid-item-link'>
										About
									</a>
									<a href='/' target='_blank' style={{ padding: "0% 2% 0% 2%" }} className='grid-item-link'>
										Help
									</a>
									<a href='/' target='_blank' style={{ padding: "0% 2% 0% 2%" }} className='grid-item-link'>
										Career
									</a>
									<a href='/' target='_blank' style={{ padding: "0% 2% 0% 2%" }} className='grid-item-link'>
										Redeem
									</a>
									<a href='/' target='_blank' style={{ padding: "0% 2% 0% 2%" }} className='grid-item-link'>
										Pair TV
									</a>
									<a href='/' target='_blank' style={{ padding: "0% 0% 0% 2%" }} className='grid-item-link'>
										Forum
									</a>
								</div>
								<div className='text-center grid-item-two' style={{ padding: "0% 0% 1% 0%" }}>
									<a href='/' className='store-icon'>
										<img src='/images/company/apple-store.png' alt='' width={105} />
									</a>
									<a href='/' className='store-icon'>
										<img src='/images/company/G-play.png' alt='' width={105} />
									</a>
									<a href='/' className='store-icon'>
										<img src='/images/company/Fire-tv.png' alt='' width={105} />
									</a>
									<a href='/' className='store-icon'>
										<img src='/images/company/Android-tv.png' alt='' width={105} />
									</a>
									<a href='/' className='store-icon'>
										<img src='/images/company/Apple-tv.png' alt='' width={105} />
									</a>
									<a href='/' className='store-icon'>
										<img src='/images/company/Mi-tv.png' alt='' width={105} />
									</a>
									<a href='/' className='store-icon'>
										<img src='/images/company/Roku.png' alt='' width={105} />
									</a>
									<a href='/' className='store-icon'>
										<img src='/images/company/LG-Smart.png' alt='' width={105} />
									</a>
									<a href='/' className='store-icon'>
										<img src='/images/company/Tizen.png' alt='' width={105} />
									</a>
								</div>
								<div className='text-center' style={{ padding: "0% 0% 1% 0%" }}>
									<a href='/' target='_blank' className='important-links'>
										Report a Bug
									</a>
									<a href='/' target='_blank' className='important-links'>
										Request a Feature
									</a>
									<a href='/' target='_blank' className='important-links'>
										Content Complaints
									</a>
									<a href='/' target='_blank' className='important-links'>
										Movie Request
									</a>
									<a href='/' target='_blank' className='important-links'>
										Submit Your Story
									</a>
									<a href='/' target='_blank' className='important-links border-0'>
										Support
									</a>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			<div className='footer-bottom'>
				<Container className='p-0'>
					<div className='row align-items-center'>
						<div className='col-lg-6 col-md-6 col-12 col-sm-6'>
							<div className='copyright-text'>
								<p>Copyright &copy; 2020, Klikk. All Rights Reserved</p>
							</div>
						</div>
						<div className='col-lg-6 col-md-6 col-sm-6 d-none d-sm-block'>
							<ul className='list-none'>
								<li>
									<a href={`${site_url}`}>Policy</a>
								</li>
								<li>
									<a href={`${site_url}`}>Term & Conditions</a>
								</li>
								<li>
									<a href={`${site_url}`}>FAQs</a>
								</li>
							</ul>
						</div>
					</div>
				</Container>
			</div>
		</footer>
	);
};

export default KlikkFooter;
