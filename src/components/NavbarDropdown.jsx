import React from "react";

import { FaHouse, FaList, FaPhoneFlip, FaDiamond } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

const NavbarDropdown = ({ setToggleDropdown }) => {
	return (
		<motion.ul
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={() => setToggleDropdown(false)}
			className="fixed top-0 left-0 z-40 flex flex-col justify-end w-full h-full gap-2 p-2 bg-opacity-10 rounded-xl backdrop-filter backdrop-blur-sm"
		>
			<NavLink
				to="/"
				className="flex flex-col items-center justify-center gap-2 px-4 py-4 text-orange-400 bg-black rounded-lg bg-opacity-60"
			>
				<FaDiamond className="text-lg rounded-full bg-opacity-80" />
				<span className="font-semibold tracking-widest text-normal">
					Oka <span className="text-white">Estate</span>
				</span>
			</NavLink>

			<NavLink
				to="/"
				className="flex items-center justify-center gap-4 px-4 py-2 text-white bg-black rounded-lg bg-opacity-60"
			>
				<FaHouse className="text-lg" />
				<span className="text-sm">Home</span>
			</NavLink>

			<NavLink
				to="/properties"
				className="flex items-center justify-center gap-4 px-4 py-2 text-white bg-black rounded-lg bg-opacity-60"
			>
				<FaList />
				<span className="text-sm">Listing</span>
			</NavLink>

			<NavLink
				to="/contact"
				className="flex items-center justify-center gap-4 px-4 py-2 text-white bg-black rounded-lg bg-opacity-60"
			>
				<FaPhoneFlip />
				<span className="text-sm">Contact</span>
			</NavLink>
		</motion.ul>
	);
};

export default NavbarDropdown;
