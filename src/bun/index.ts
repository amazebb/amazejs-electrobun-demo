import { BrowserWindow } from "electrobun/main";

// Create the main application window
new BrowserWindow({
    title: "Electrobun + AmazeJS - Demo",
    url: "views://mainview/mvp.html",
    frame: {
        width: 800,
        height: 800,
        x: 200,
        y: 200,
    },
});

