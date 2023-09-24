import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

import { FaDiamond } from "react-icons/fa6";

const NavbarPC = () => {
	return (
		<>
			<nav className="sticky top-0 z-40 flex items-center justify-between w-full px-8 text-gray-200 bg-black">
				<h1 className="flex items-center gap-2 text-lg font-semibold tracking-wide">
					<FaDiamond />
					Oka Estate
				</h1>

				<ul className="flex text-sm font-extralight ">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`border-b-4 py-4 px-6 ${
								isActive ? "border-orange-400" : "border-black"
							}`
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/properties"
						className={({ isActive }) =>
							`border-b-4 py-4 px-6 ${
								isActive ? "border-orange-400" : "border-black"
							}`
						}
					>
						Listing
					</NavLink>
					<NavLink
						to="/contact"
						className={({ isActive }) =>
							`border-b-4 py-4 px-6 ${
								isActive ? "border-orange-400" : "border-black"
							}`
						}
					>
						Contact
					</NavLink>
				</ul>
			</nav>
		</>
	);
};

export default NavbarPC;
