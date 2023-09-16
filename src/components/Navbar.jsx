import React, { useState, useEffect } from "react";

import { FaBars, FaDiamond } from "react-icons/fa6";
import NavbarDropdown from "./NavbarDropdown";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ curSectionIndicator }) => {
	const [isMobileMode, setIsMobileMode] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [toggleNavbar, setToggleNavbar] = useState(false);
	const [curSection, setCurSection] = useState("");

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (windowWidth <= 640) {
			setIsMobileMode(true);
		} else {
			setIsMobileMode(false);
		}
	}, [windowWidth]);

	const scrollToSection = (section) => {
		const element = document.getElementById(section);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setToggleNavbar(false);
		}
	};

	useEffect(() => {
		scrollToSection(curSection);
	}, [curSection]);

	return (
		<>
			<nav className="fixed top-0 left-0 z-10 flex items-center justify-between w-full text-gray-200 bg-black bg-opacity-60 backdrop-filter backdrop-blur-sm">
				<h1 className="flex items-center gap-2 text-lg font-semibold tracking-wide ">
					<FaDiamond />
					Oka Estate
				</h1>
				{!isMobileMode ? (
					<ul className="flex text-sm font-extralight ">
						<li
							className={`px-4 py-2 duration-200 
							${
								curSectionIndicator === "home"
									? "bg-orange-400 rounded-xl"
									: "rounded-none"
							}`}
						>
							<Link to="/" onClick={() => setCurSection("home")}>
								Home
							</Link>
						</li>

						<li
							className={`px-4 py-2 duration-200 
							${
								curSectionIndicator === "featured"
									? "bg-orange-400 rounded-xl"
									: "rounded-none"
							}`}
						>
							<Link to="/" onClick={() => setCurSection("featured")}>
								Featured
							</Link>
						</li>

						<li
							className={` py-2 duration-200 
							`}
						>
							<NavLink
								to="/properties"
								onClick={() => setCurSection("")}
								className={({ isActive }) =>
									`py-2 px-4 duration-200 ${
										isActive ? "bg-orange-400 rounded-xl" : "rounded-none"
									}`
								}
							>
								Listing
							</NavLink>
						</li>

						<li
							className={`px-4 py-2 duration-200 
							${
								curSectionIndicator === "about"
									? "bg-orange-400 rounded-xl"
									: "rounded-none"
							}`}
						>
							<Link to="/" onClick={() => setCurSection("about")}>
								About
							</Link>
						</li>

						<li
							className={`px-4 py-2 duration-200 
						${
							curSectionIndicator === "contact"
								? "bg-orange-400 rounded-xl"
								: "rounded-none"
						}`}
						>
							<Link to="/" onClick={() => setCurSection("contact")}>
								Contact
							</Link>
						</li>
					</ul>
				) : (
					<ul className="flex gap-6 text-xl ">
						<li onClick={() => setToggleNavbar(true)}>
							<FaBars />
						</li>
					</ul>
				)}
			</nav>

			{toggleNavbar && (
				<NavbarDropdown
					toggleNavbar={toggleNavbar}
					setToggleNavbar={setToggleNavbar}
				/>
			)}
		</>
	);
};

export default Navbar;
