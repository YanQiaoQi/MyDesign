import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import styles from "./Layout.less";

function Layout({ children }) {
	return (
		<div className={styles.layout_container}>
			{children}
		</div>
	);
}
Layout.Header = Header;
Layout.Content = Content;

export default Layout;
