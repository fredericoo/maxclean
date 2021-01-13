import { createRef, useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./AnimateText.module.scss";

const SlideInText = ({ text, once, scrub = false, propsFrom, propsTo }) => {
	gsap.registerPlugin(ScrollTrigger);

	const [charsRef, setCharsRef] = useState([]);
	const triggerRef = useRef();

	useEffect(() => {
		setCharsRef((charsRef) =>
			Array(text.split("").length)
				.fill()
				.map((_, i) => charsRef[i] || createRef())
		);
	}, [text]);

	useEffect(() => {
		gsap.fromTo(
			charsRef.map((char) => char.current),
			propsFrom,
			{
				stagger: 0.05,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					toggleActions: !once
						? "play reverse play reverse"
						: "play play play play",
					trigger: triggerRef.current,
					start: "top bottom-=10%",
					end: "bottom top+=10%",
					scrub,
					// markers: true,
				},
				...propsTo,
			}
		);
	}, [charsRef]);

	let refIndex = 0;
	return (
		<span ref={triggerRef} aria-label={text} role="heading">
			{text.split(" ").map((word, wordIndex) => (
				<span className={styles.word} aria-hidden="true" key={wordIndex}>
					{word.split("").map((char, index) => {
						refIndex++;
						return (
							<span
								ref={charsRef[refIndex - 1]}
								key={index}
								className={styles.char}
							>
								{char}
							</span>
						);
					})}
				</span>
			))}
		</span>
	);
};

export default SlideInText;
