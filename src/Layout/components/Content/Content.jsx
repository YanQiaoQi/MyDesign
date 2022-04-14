import React from "react";
import styles from "./Content.less";

function Content({ children }) {
	return (
		<div className={styles.content_container}>
			{children}
		</div>
	);
}

export default Content;
