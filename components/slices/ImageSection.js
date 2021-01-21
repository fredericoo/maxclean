import styles from "./ImageSection.module.scss";
import Image from "next/image";
import grid from "styles/grid.module.scss";

export default function ImageSection({ slice }) {
	return (
		<section className={`${styles.section} ${grid.col}`}>
			<figure
				className={`${styles.image} ${
					slice.primary.size ? styles[`size-${slice.primary.size}`] : ""
				}`}
			>
				<Image
					src={slice.primary.image.url}
					width={slice.primary.image.dimensions.width}
					height={slice.primary.image.dimensions.height}
					layout="responsive"
					alt={slice.primary.image.alt}
				/>
			</figure>
		</section>
	);
}
