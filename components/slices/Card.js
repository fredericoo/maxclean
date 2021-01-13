import Button from "components/Button";
import Image from "next/image";
import { RichText } from "prismic-reactjs";
import styles from "./Card.module.scss";

export default function Card({ item, handleCta }) {
	return (
		<article
			className={`
                        ${styles.card} 
                        ${item.negative ? styles.negative : ""} 
                        ${
													item.card_size
														? styles[`size--${item.card_size}`]
														: ""
												}
                    `}
		>
			<h2 className={styles["card__heading"]}>{item.title}</h2>
			{item.image.url && (
				<div className={styles["card__img"]}>
					<Image
						src={item.image.url}
						width={item.image.dimensions.width}
						height={item.image.dimensions.height}
					/>
				</div>
			)}

			<div className={styles["card__body"]}>
				{RichText.render(item.bodytext)}
			</div>
			<div className={styles["card__cta"]}>
				<Button
					onClick={(e) => {
						e.preventDefault;
						handleCta(item.popup);
					}}
					type="button"
				>
					{item.cta_text}
				</Button>
			</div>
		</article>
	);
}
