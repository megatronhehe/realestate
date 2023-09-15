import React, { useState, useEffect } from "react";

import { FaBars, FaDiamond } from "react-icons/fa6";

const Navbar = () => {
	const [isMobileMode, setIsMobileMode] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

	return (
		<nav className="fixed top-0 left-0 z-10 flex items-center justify-between w-full p-4 text-gray-200 bg-black bg-opacity-60 backdrop-filter backdrop-blur-sm">
			<h1 className="flex items-center gap-2 text-lg font-semibold tracking-wide">
				<FaDiamond />
				Oka Estate
			</h1>
			{!isMobileMode ? (
				<ul className="flex gap-6 text-sm font-extralight ">
					<li>Home</li>
					<li>Listings</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			) : (
				<ul className="flex gap-6 text-xl ">
					<li>
						<FaBars />
					</li>
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
