import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

import { FaDiamond } from "react-icons/fa6";

const NavbarPC = () => {
	return (
		<>
			<nav className="sticky top-0 z-40 flex items-center justify-between w-full px-8 text-gray-200 bg-black">
				<NavLink
					to="/"
					className="flex items-center gap-2 text-lg font-semibold tracking-wide"
				>
					<h1 className="flex items-center gap-2">
						<FaDiamond className="text-orange-400" />
						Pristine<span className="font-extralight">Realty</span>
					</h1>
				</NavLink>

				<ul className="flex text-sm font-extralight ">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`border-b-4 py-4 text-center w-20 duration-200 ${
								isActive ? "border-orange-400 font-semibold" : "border-black"
							}`
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/properties"
						className={({ isActive }) =>
							`border-b-4 py-4 text-center w-20 duration-200 ${
								isActive ? "border-orange-400 font-semibold" : "border-black"
							}`
						}
					>
						Listing
					</NavLink>
					<NavLink
						to="/contact"
						className={({ isActive }) =>
							`border-b-4 py-4 text-center w-20 duration-200 ${
								isActive ? "border-orange-400 font-semibold" : "border-black"
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
