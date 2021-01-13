import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const enlargeUponScroll = (elem, trigger) => {
	gsap.registerPlugin(ScrollTrigger);
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: trigger,
			start: "top top",
			end: "bottom bottom",
			scrub: true,
			ease: "power3.out",
			// markers: true,
			// pin: elem,
			// pinSpacing: false,
		},
	});
	tl.fromTo(elem, { opacity: 0.5 }, { opacity: 0.8, scale: 1.1, ease: "none" });
};
