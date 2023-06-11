import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

const currentYear = new Date().getFullYear();

const Footer = () => {
	return (
		<div>
			<footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
				<hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
				<div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
					<div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
						<span>© {currentYear}</span>
						<a href="/" className="hover:underline">
							Axle Rodriguez
						</a>
					</div>
					<div className="flex flex-row items-center justify-center space-x-2 mb-1">
						<a href="https://github.com/axle21" rel="noreferrer" target="_blank">
							<AiOutlineGithub
								className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
								size={30}
							/>
						</a>
						<a href="https://www.linkedin.com/in/im-axle-rodriguez/" rel="noreferrer" target="_blank">
							<AiOutlineLinkedin
								className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
								size={30}
							/>
						</a>
						<a href="https://www.instagram.com/im.axle/" rel="noreferrer" target="_blank">
							<AiOutlineInstagram
								className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
								size={30}
							/>
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
