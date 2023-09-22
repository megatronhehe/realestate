import React from "react";

const Whyus = () => {
	return (
		<div className="flex flex-col gap-8">
			<ul className="flex flex-col gap-8">
				<li className="flex items-center gap-4">
					<h2 className="w-1/4">Reliable</h2>
					<p className="w-3/4 text-sm">
						We pride ourselves on delivering consistent and dependable solutions
						to our clients.
					</p>
				</li>
				<li className="flex items-center gap-4">
					<h2 className="w-1/4">P2P</h2>
					<p className="w-3/4 text-sm">
						Our peer-to-peer approach fosters trust and allows for personalized
						interactions between parties.
					</p>
				</li>
				<li className="flex items-center gap-4">
					<h2 className="w-1/4">Legal</h2>
					<p className="w-3/4 text-sm">
						We operate within the bounds of the law, adhering to all relevant
						regulations and guidelines.
					</p>
				</li>
				<li className="flex items-center gap-4">
					<h2 className="w-1/4">Trusted</h2>
					<p className="w-3/4 text-sm">
						we operate in transparent processes, honest communication, and
						ethical practices.
					</p>
				</li>
			</ul>
		</div>
	);
};

export default Whyus;
