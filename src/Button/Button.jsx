import styles from "./Button.less";
import React from "react";

let defaultSettings = {
	title: "按钮",
	action: function () {},
	type: "common",
};

/**
 *
 * @param {object} settings
 *  @property {string} title  按钮显示的字符
 *  @property {function} action 点击按钮触发的事件
 *  @property {string} width 按钮的宽度
 *  @property {string} type 按钮自己定义自己的风格，在没有设置按钮自有风格时，按按钮整体风格来
 *          common
 *          signUp
 *          main
 * @returns
 */
function MyButton({
	title,
	action,
	type = "common",
	style,
} = defaultSettings) {
	return (
		<div
			className={styles[type]}
			onClick={action}
			style={style}>
			{title}
		</div>
	);
}

function ButtonList({ ui }) {
	let ButtonList = ui.map((item) => {
		return <MyButton key={item.title} {...item} />;
	});

	return (
		<div className={styles.ButtonList_container}>
			{ButtonList}
		</div>
	);
}

export default MyButton;
export { MyButton, ButtonList };
