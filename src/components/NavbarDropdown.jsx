import React from "react";

import { FaHouse, FaList, FaPhoneFlip, FaDiamond, FaX } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

const NavbarDropdown = ({ setToggleDropdown }) => {
	return (
		<motion.ul
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			onClick={() => setToggleDropdown(false)}
			className="fixed top-0 left-0 z-40 flex flex-col justify-center w-full h-full gap-4 p-2 text-white bg-orange-400"
		>
			<NavLink
				to="/"
				className="flex flex-col items-center self-center justify-center w-1/2 gap-2 px-4 py-4 border-b"
			>
				<FaDiamond />
				<span className="font-semibold tracking-widest text-normal">
					Pristine <span className="text-extralight">Realty</span>
				</span>
			</NavLink>

			<NavLink
				to="/"
				className="flex items-center justify-center gap-4 px-4 py-2 "
			>
				<FaHouse className="text-lg" />
				<span className="text-sm">Home</span>
			</NavLink>

			<NavLink
				to="/properties"
				className="flex items-center justify-center gap-4 px-4 py-2 "
			>
				<FaList />
				<span className="text-sm">Listing</span>
			</NavLink>

			<NavLink
				to="/contact"
				className="flex items-center justify-center gap-4 px-4 py-2 "
			>
				<FaPhoneFlip />
				<span className="text-sm">Contact</span>
			</NavLink>

			<button className="fixed top-6 right-6">
				<FaX />
			</button>
		</motion.ul>
	);
};

export default NavbarDropdown;
