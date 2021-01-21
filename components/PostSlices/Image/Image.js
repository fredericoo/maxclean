import styles from "./Image.module.scss";
import { RichText } from "prismic-reactjs";
import { default as NextImage } from "next/image";

const Image = ({ primary }) => (
	<section className={`grid grid--full ${styles.section}`}>
		{primary.image && primary.image.url && (
			<div
				className={`${styles.image} ${
					primary.full_width ? styles.fullWidth : ""
				}`}
			>
				<NextImage
					src={primary.image.url}
					width={primary.image.dimensions.width}
					height={primary.image.dimensions.height}
					layout="responsive"
					sizes="(max-width: 768px) 300px,
						(max-width: 1366px) 600px,
						800px"
				/>
			</div>
		)}
		{primary.text && (
			<div className={`s-sm ${styles.caption}`}>
				<RichText render={primary.text} />
			</div>
		)}
	</section>
);

export default Image;
