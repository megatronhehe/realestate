import React, { useState, useEffect } from "react";

import { useResponsive } from "../hooks/useResponsive";

import { FaBars, FaDiamond } from "react-icons/fa6";
import NavbarDropdown from "./NavbarDropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [toggleNavbar, setToggleNavbar] = useState(false);
	const [curSection, setCurSection] = useState("");

	const { isMobileMode } = useResponsive();

	return (
		<>
			<nav className="sticky top-0 z-10 flex items-center justify-between w-full p-4 text-gray-200 bg-black ">
				<h1 className="flex items-center gap-2 text-lg font-semibold tracking-wide ">
					<FaDiamond />
					Oka Estate
				</h1>
				{!isMobileMode ? (
					<ul className="flex gap-8 text-sm font-extralight ">
						<li>Home</li>
						<li>Listing</li>
						<li>Contact</li>
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
