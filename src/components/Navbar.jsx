import React from "react";

import { FaBars, FaMagnifyingGlass, FaDiamond } from "react-icons/fa6";

const Navbar = () => {
	return (
		<nav className="fixed top-0 z-10 left-0 w-full p-4 flex items-center justify-between text-gray-200 bg-black bg-opacity-60 backdrop-filter backdrop-blur-sm">
			<h1 className="text-lg tracking-wide flex items-center gap-2 font-semibold">
				<FaDiamond />
				Oka Estate
			</h1>
			<ul className="flex gap-6 text-xl">
				<li>
					<FaMagnifyingGlass />
				</li>
				<li>
					<FaBars />
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
