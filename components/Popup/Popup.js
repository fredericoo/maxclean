import styles from "./styles.module.scss";
import { RichText } from "prismic-reactjs";
import { forwardRef } from "react";

export const Popup = forwardRef(({ content, handleClose }, ref) => {
	return (
		<div ref={ref} className={styles.wrapper}>
			<div className={styles.dim} onClick={handleClose} />
			<div className={styles.inner}>
				<aside className={styles.popup}>
					<button type="button" onClick={handleClose} className={styles.close}>
						×
					</button>
					<div className={styles.body}>
						<RichText render={content} />
					</div>
				</aside>
			</div>
		</div>
	);
});
