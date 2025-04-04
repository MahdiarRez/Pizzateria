import PizzaPic from "./PizzaHomeP.jpg";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function SectionOne() {
	const [isMobile, setIsMobile] = useState(true);
	useEffect(() => {
		if (window.innerWidth > 773) setIsMobile(false);
	}, []);

	return (
		<div
			style={{ backgroundImage: `url(${PizzaPic})` }}
			className={`bg-cover bg-right h-[500px] lg:h-FullHeight lg:min-h-[722px]`}>
			<div className="backdrop-brightness-75 min-h-full lg:min-h-[722px] lg:h-full w-full flex justify-evenly items-center flex-col py-16 sm:py-12 lg:py-40">
				<ul className="steps steps-horizontal text-xs text-white md:mb-3 md:text-lg lg:mb-7">
					<li className="step step-error">Login</li>
					<li className="step step-error">Choose pizza</li>
					<li className="step step-error">Order</li>
					<li className="step step-error">Follow up order</li>
				</ul>

				{!isMobile ? (
					<motion.h2
						viewport={{ once: true, amount: 0.7 }}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							type: "just",
						}}
						className="text-center text-3xl text-white font-normal tracking-wider sm:text-5xl md:text-6xl">
						Ensure Your <span className="text-RED font-semibold">Food</span> is{" "}
						<br /> Delivered with Speed
					</motion.h2>
				) : (
					<h2 className="text-center text-3xl text-white font-normal tracking-wider sm:text-5xl md:text-6xl">
						Ensure Your <span className="text-RED font-semibold">Food</span> is{" "}
						<br /> Delivered with Speed
					</h2>
				)}
				{!isMobile ? (
					<motion.p
						viewport={{ once: true, amount: 0.7 }}
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							type: "just",
						}}
						className="text-center text-white text-xs tracking-wide font-semibold sm:text-lg leading-5">
						Our mission is to satisfy your appetite with delectable <br />{" "}
						dishes, delivered swiftly and at no extra cost
					</motion.p>
				) : (
					<p className="text-center text-white text-xs tracking-wide font-semibold sm:text-lg leading-5">
						Our mission is to satisfy your appetite with delectable <br />{" "}
						dishes, delivered swiftly and at no extra cost
					</p>
				)}
				<Link to="/menu">
					<button
						type="button"
						className="rounded-full md:hover:px-9 uppercase bg-RED animate-fade-up sm:hover:bg-PINK transition-all duration-300 hover:text-black text-white text-xs font-normal border-none py-3 tracking-wide px-5 md:text-base md:px-7 cursor-pointer">
						Order Quickly
					</button>
				</Link>
			</div>
		</div>
	);
}

export default SectionOne;
