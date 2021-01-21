import styles from "./Quote.module.scss";
import grid from "styles/grid.module.scss";
import { RichText } from "prismic-reactjs";
import AnimateText from "components/AnimateText/AnimateText";

export default function Quote({ slice }) {
	return (
		<section className={`${styles.section} ${grid.col}`}>
			<blockquote className={`${styles.quote} t--2`}>
				<AnimateText
					propsTo={{
						color: "#000000",
						duration: 2,
						stagger: 0.02,
					}}
					scrub
					text={RichText.asText(slice.primary.quote)}
				/>
			</blockquote>
			<cite className={styles.author}>
				{<RichText render={slice.primary.author} />}
			</cite>
		</section>
	);
}
