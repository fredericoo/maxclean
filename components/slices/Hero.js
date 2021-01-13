import Image from "next/image";
import { RichText } from "prismic-reactjs";
import hero from "./Hero.module.scss";
import grid from "../../styles/grid.module.scss";
import { useRef, useEffect } from "react";
import { enlargeUponScroll } from "components/animate";
import AnimateText from "components/AnimateText/AnimateText";

const Hero = ({ slice }) => {
	const headerTextRef = useRef();
	const heroRef = useRef();
	const bgImageRef = useRef();

	useEffect(() => {
		enlargeUponScroll(bgImageRef.current, heroRef.current);
	}, [bgImageRef]);
	return (
		<section ref={heroRef} className={`${hero.section} ${grid.col}`}>
			<div className={hero.img}>
				{slice.primary.bg.url && (
					<div className={hero.animatedImg} ref={bgImageRef}>
						<Image
							src={slice.primary.bg.url}
							layout="fill"
							objectFit="cover"
							objectPosition="center"
							loading="eager"
						/>
					</div>
				)}
			</div>
			<header className={`${hero.header}`}>
				<h1 ref={headerTextRef} className="t--1">
					<AnimateText
						once
						propsFrom={{ yPercent: 120 }}
						propsTo={{ yPercent: 0 }}
						text={slice.primary.headline}
					/>
				</h1>
			</header>
			<div className={hero.body}>{RichText.render(slice.primary.bodytext)}</div>
		</section>
	);
};

export default Hero;
