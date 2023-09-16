import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";

const Contact = ({ setCurSectionIndicator }) => {
	const { ref, inView } = useInView({ threshold: 0.2 });

	useEffect(() => {
		if (inView) {
			setCurSectionIndicator("contact");
		}
	}, [inView]);

	return (
		<div ref={ref} className="h-full">
			<div className="absolute top-0 left-0 flex items-center justify-center w-full h-full p-6 text-gray-600 bg-white">
				<div className="flex flex-col items-center gap-4">
					<h2 className="text-4xl">Contact</h2>
					<ul className="flex flex-col items-center justify-center">
						<li>08 xxxx xxxx</li>
						<li>business@okaestate.com</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Contact;
