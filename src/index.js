import { createRoot } from "react-dom/client";
import React from "react";
import Layout from "./Layout/Layout";

const { Header, Content } = Layout;
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<Layout>
		<Header></Header>
		<Content></Content>
	</Layout>
);
