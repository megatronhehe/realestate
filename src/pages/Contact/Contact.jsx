import React from "react";

import { motion } from "framer-motion";

import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa6";

const Contact = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="h-full"
		>
			<div className="absolute top-0 left-0 flex items-center justify-center w-full h-full p-6 text-gray-600 bg-white">
				<div className="flex flex-col items-center gap-8">
					<h2 className="text-4xl">Contact us</h2>
					<ul className="flex flex-col items-center justify-center">
						<li>08 xxxx xxxx</li>
						<li>business@okaestate.com</li>
					</ul>
					<ul className="flex gap-6 text-4xl">
						<li className="duration-200 hover:text-orange-400 hover:scale-110">
							<FaInstagram />
						</li>
						<li className="duration-200 hover:text-orange-400 hover:scale-110">
							<FaWhatsapp />
						</li>
						<li className="duration-200 hover:text-orange-400 hover:scale-110">
							<FaTiktok />
						</li>
					</ul>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
