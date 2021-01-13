import styles from "./TextColumn.module.scss";
import { RichText } from "prismic-reactjs";
import grid from "../../styles/grid.module.scss";

export default function TextColumn({ slice }) {
	return (
		<section className={`${styles.section} ${grid.inner}`}>
			<div className={styles.body}>
				{<RichText render={slice.primary.text} />}
			</div>
		</section>
	);
}
