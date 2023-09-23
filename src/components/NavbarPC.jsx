import React, { useState, useEffect } from "react";

import { FaDiamond } from "react-icons/fa6";

const NavbarPC = () => {
	return (
		<>
			<nav className="sticky top-0 z-10 flex items-center justify-between w-full p-4 text-gray-200 bg-black ">
				<h1 className="flex items-center gap-2 text-lg font-semibold tracking-wide ">
					<FaDiamond />
					Oka Estate
				</h1>

				<ul className="flex gap-8 text-sm font-extralight ">
					<li>Home</li>
					<li>Listing</li>
					<li>Contact</li>
				</ul>
			</nav>
		</>
	);
};

export default NavbarPC;
