import styles from "./Heading.module.scss";
import AnimateText from "components/AnimateText/AnimateText";
import grid from "styles/grid.module.scss";

const HT = ({ tag, children }) => {
	switch (tag) {
		case "h1":
			return <h1>{children}</h1>;
		case "h2":
			return <h2>{children}</h2>;
		case "h3":
			return <h3>{children}</h3>;
		case "h4":
			return <h4>{children}</h4>;
		case "h5":
			return <h5>{children}</h5>;
		case "h6":
			return <h6>{children}</h6>;
	}
};

export default function Heading({ slice }) {
	return (
		<section className={`${styles.section} ${grid.col}`}>
			<div className={styles.body}>
				<HT tag={slice.primary.tag || "h2"}>
					{
						<AnimateText
							propsFrom={{ color: "#0000ff", yPercent: 120 }}
							propsTo={{
								color: "#000000",
								duration: 1,
								stagger: 0.02,
								yPercent: 0,
							}}
							once
							text={slice.primary.text}
						/>
					}
				</HT>
			</div>
		</section>
	);
}
