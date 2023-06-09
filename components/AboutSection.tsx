import React from "react";
import Image from "next/image";

const skills = [
	"HTML",
	"CSS",
	"JavaScript/TypeScript",
	"React",
	"Next.js",
	"Git",
	"Chakra UI",
	"Ant Design",
	"Tailwind CSS",
	"Docker",
	"RESTful API",
];

const AboutSection = () => {
	return (
		<section id="about">
			<div className="my-12 pb-12 md:pt-16 md:pb-48">
				<h1 className="text-center font-bold text-4xl">
					About Me
					<hr className="w-6 h-1 mx-auto my-4 bg-sky-600 border-0 rounded"></hr>
				</h1>

				<div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
					<div className="md:w-1/2 ">
						<h1 className="text-center text-2xl font-bold mb-6 md:text-left">Get to know me!</h1>
						<p>
							Hi, my name is Axle and I am{" "}
							<span className="font-bold text-sky-600">{"a man of focus"}</span>,
							<span className="font-bold text-sky-600">{" commitment"}</span>,
							<span className="font-bold text-sky-600">{" sheer will"}</span> and a
							<span className="font-bold text-sky-600">{" self-motivated "}</span>
							Front End Developer based in Manila, Philippines.
						</p>
						<br />
						<p>
							I graduated from ABE International Business College, Cubao Campus Quezon City in 2015 with a
							BS in Information Technology and have been working in the field ever since.
						</p>
						<br />
						<p>
							I have a wide range of hobbies and passions that keep me busy. From playing guitar, working
							out, traveling, to Hiking, I am always seeking new experiences and love to keep myself
							engaged and learning new things.
						</p>
						<br />
						<p>
							I believe that you should <span className="font-bold text-sky-600">never stop growing</span>{" "}
							and that&#39;s what I strive to do, I have a passion for technology and a desire to always
							push the limits of what is possible. I am excited to see where my career takes me and am
							always open to new opportunities. 🙂
						</p>
					</div>
					<div className="text-center md:w-1/2 md:text-left">
						<h1 className="text-2xl font-bold mb-6">My Skills</h1>
						<div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
							{skills.map((item, idx) => {
								return (
									<p
										key={idx}
										className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
									>
										{item}
									</p>
								);
							})}
						</div>
						<Image
							src="/puppy.png"
							alt=""
							width={325}
							height={325}
							className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
