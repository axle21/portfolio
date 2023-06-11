import React from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";

const ContactMeSection = () => {
return (
<section id="contact">
<div className="my-12 pb-12 md:pt-16 ">
<h1 className="my-10 text-center font-bold text-4xl">
Contact me
<hr className="w-6 h-1 mx-auto my-4 bg-sky-600 border-0 rounded"></hr>
</h1>
<div className="flex flex-col space-y-8">
<div className="flex items-center justify-center w-full">
<AiOutlineHome size={30} />
<p className="pl-4 font-bold text-base">
    Metro Manila, Philippines
</p>
</div>
<div className="flex items-center justify-center w-full">
<AiOutlinePhone size={30} />
<p className="pl-4 font-bold text-base">(+63) 906-2433-195</p>
</div>
<div className="flex items-center justify-center w-full">
<AiOutlineMail size={30} />
<p className="pl-4 font-bold text-base">
                                                                    rodriguez.imaxle@gmail.com
</p>
</div>
</div>
</div>
</section>
);
};

export default ContactMeSection;
