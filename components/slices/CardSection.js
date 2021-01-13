import styles from "./CardSection.module.scss";
import grid from "../../styles/grid.module.scss";

import Masonry from "react-masonry-css";
import Card from "./Card";

const CardSection = ({ slice, handleCta }) => {
	return (
		<section className={`${styles.section} ${grid.inner}`}>
			<Masonry
				breakpointCols={{ default: 2, 1024: 2, 768: 1 }}
				className={styles.masonry}
				columnClassName={styles["masonry__column"]}
			>
				{slice.items.map((item, index) => (
					<Card key={`card-${index}`} handleCta={handleCta} item={item} />
				))}
			</Masonry>
		</section>
	);
};

export default CardSection;
