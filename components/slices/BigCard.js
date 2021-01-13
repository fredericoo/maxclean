import styles from "./BigCard.module.scss";
import grid from "../../styles/grid.module.scss";

import Card from "./Card";

const SingleCard = ({ slice, handleCta }) => {
	return (
		<section className={`${styles.section} ${grid.inner}`}>
			<div className={styles.card}>
				<Card handleCta={handleCta} item={slice.primary} />
			</div>
		</section>
	);
};

export default SingleCard;
