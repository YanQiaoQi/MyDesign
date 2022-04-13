import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function Layout({ children }) {
	return <div>{children}</div>;
}
Layout.Header = Header;
Layout.Content = Content;

console.log(Layout);
export default Layout;
