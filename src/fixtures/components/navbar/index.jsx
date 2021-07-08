import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { X, List, Search, FileEarmarkPersonFill } from "react-bootstrap-icons";
import "./Navbar.css";
import { site_url } from "../../../constant";

const ONavbar = ({ videoGenre, songGenre }) => {
	const [show, setShow] = React.useState(false);
	const [menuOpen, setMenuOpen] = React.useState(false);

	const handleClose = () => {
		setShow(false);
		setMenuOpen(!menuOpen);
	};
	const handleShow = () => setShow(true);
	const _toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<>
			<Navbar
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
				fixed="top"
			>
				<Container fluid className={menuOpen && "bg-dark-sm"}>
					<LinkContainer to="/">
						<Navbar.Brand>
							<img
								src={`${site_url}siteasset/img/logo.png`}
								alt=""
								width="80"
								height="20"
							/>
						</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle
						aria-controls="responsive-navbar-nav"
						onClick={() => _toggleMenu()}
					>
						{menuOpen ? (
							<X className="bi-x" />
						) : (
							<List className="bi-list" />
						)}
					</Navbar.Toggle>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href={`${site_url}`}>Home</Nav.Link>
							<NavDropdown
								title="Movies"
								id="collasible-nav-dropdown"
							>
								{videoGenre.map((vG, i) => (
									// <NavDropdown.Item key={i} href={`${site_url}${vG.id}`}>
									<LinkContainer
										to={`/movies/${vG.id}`}
										key={i}
									>
										<NavDropdown.Item>
											{vG.title}
										</NavDropdown.Item>
									</LinkContainer>
								))}
							</NavDropdown>
							<Nav.Link href={`${site_url}shows`}>Shows</Nav.Link>
							<NavDropdown
								title="Songs"
								id="collasible-nav-dropdown"
							>
								{songGenre.map((sG, i) => (
									<LinkContainer
										to={`${site_url}${sG.link}`}
										key={i}
									>
										<NavDropdown.Item>
											{sG.title}
										</NavDropdown.Item>
									</LinkContainer>
								))}
							</NavDropdown>
							<Nav.Link href={`${site_url}kids`}>Kids</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href="#search">
								<Search size={20} />
							</Nav.Link>
							<Nav.Link
								eventKey={2}
								href="#"
								onClick={handleShow}
							>
								<FileEarmarkPersonFill
									size={20}
									color="#ff3349"
								/>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Offcanvas show={show} onHide={handleClose} placement={"end"}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Offcanvas</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					Some text as placeholder. In real life you can have the
					elements you have chosen. Like, text, images, lists, etc.
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default ONavbar;
