import React from "react";
import styles from "./Header.less";

function Header({ type, children }) {
	return (
		<div className={styles[type + "_container"]}>
			<header className={styles.header_container}>
				{children}
			</header>
		</div>
	);
}

export default Header;
