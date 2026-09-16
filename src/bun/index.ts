import { BrowserWindow } from "electrobun/main";

const views = {
	mvp: { title: "WKWebView placement", file: "mvp.html" },
	index: { title: "AmazeJS", file: "index.html" },
} as const;

const view = process.env["AMAZE_VIEW"] === "index" ? views.index : views.mvp;

new BrowserWindow({
	title: view.title,
	url: `views://mainview/${view.file}`,
	frame: {
		width: 800,
		height: 800,
		x: 200,
		y: 200,
	},
});

