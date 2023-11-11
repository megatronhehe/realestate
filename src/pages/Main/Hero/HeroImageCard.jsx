import React from "react";

export default function HeroImageCard({ image, selectedIndex }) {
	const { index, src } = image;

	return (
		<div
			className={`w-full overflow-hidden duration-200 bg-black h-44 rounded-xl ${
				selectedIndex === index ? "scale-110" : "scale-100"
			}`}
		>
			<img
				src={src}
				alt="hero-image"
				className={`object-cover h-full duration-200 ${
					selectedIndex === index ? "scale-125" : "scale-100"
				}`}
			/>
		</div>
	);
}
