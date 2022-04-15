import React from "react";
import { createRoot } from "react-dom/client";

import Layout from "./Layout/Layout";
import { ButtonList } from "./Button/Button";

const { Header, Content } = Layout;
let ui = [
	{
		title: "features",
		action: null,
		type: "common",
	},
	{
		title: "a",
		action: null,
		type: "common",
	},
];
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<Layout>
		<Header type='fixed'>
			<ButtonList ui={ui} />
			<ButtonList ui={ui} />
		</Header>
	</Layout>
);
