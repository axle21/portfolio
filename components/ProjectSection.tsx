import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
	{
		name: "Superfund Tax Portal",
		description: "A tax portal where the company can able to manage taxation base on ato (australian tax office)",
		image: "/superfund-tax-portal.png",
		github: "#",
		link: "https://www.selfmade.com.au/",
	},
	{
		name: "Superfund Admin Portal",
		description:
			"An administration level web application for admin , adviser and agent to work and have an overview For the superfund such as add, edit, delete , upload and generate reports.",
		image: "/superfund-admin-portal.png",
		github: "#",
		link: "https://www.selfmade.com.au/",
	},
	{
		name: "Superfund Members Portal",
		description:
			"A User level web application for members to work and have an overview For the superfund such as signing document, add , edit , upload and generate reports.",
		image: "/superfund-member-portal.png",
		github: "#",
		link: "https://www.selfmade.com.au/",
	},
	{
		name: "Crypto Pairing",
		description:
			"Its main functionality is to Retrieve and display market data for a selected currency pair from Binance public API",
		image: "/crypto-pairing.png",
		github: "https://github.com/axle21/crypto-pairing",
		link: "https://crypto-pairing.vercel.app/",
	},
];

const ProjectSection = () => {
	return (
		<section id="projects">
			<div className="py-2" />
			<h1 className="my-10 text-center font-bold text-4xl">
				Current Projects
				<hr className="w-6 h-1 mx-auto my-4 bg-sky-600 border-0 rounded"></hr>
			</h1>
			<div className="flex flex-col space-y-28">
				{projects.map((project, idx) => {
					const { name, link, description, image, github } = project;
					return (
						<div key={idx}>
							<SlideUp offset="-300px 0px -300px 0px">
								<div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
									<div className=" md:w-1/2">
										<Link href={link}>
											<Image
												src={image}
												alt=""
												width={464}
												height={227}
												className="rounded-xl shadow-xl hover:opacity-70"
											/>
										</Link>
									</div>
									<div className="flex flex-col justify-center mt-8 md:mt-0 md:w-1/2">
										<h1 className="text-4xl font-bold mb-6">{name}</h1>
										<p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
											{description}
										</p>
										<div className="flex flex-row align-bottom space-x-4">
											<Link href={github} target="_blank">
												<BsGithub
													size={30}
													className="hover:-translate-y-1 transition-transform cursor-pointer"
												/>
											</Link>
											<Link href={link} target="_blank">
												<BsArrowUpRightSquare
													size={30}
													className="hover:-translate-y-1 transition-transform cursor-pointer"
												/>
											</Link>
										</div>
									</div>
								</div>
							</SlideUp>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ProjectSection;
