import type { ElectrobunConfig } from "electrobun";

export default {
    app: {
        name: "amazej-demo",
        identifier: "amazejs.electrobun.dev",
        version: "0.0.1",
    },
    build: {
        mainProcess: "cottontail",
        cottontail: {
            entrypoint: "src/bun/index.ts",
        },
        copy: {
            "src/mainview/mvp.html": "views/mainview/mvp.html",
            "src/mainview/index.html": "views/mainview/index.html",
            "src/mainview/style.css": "views/mainview/style.css",
            "src/mainview/app.js": "views/mainview/app.js",
            "src/mainview/amazejs.js": "views/mainview/amazejs.js",
            "src/mainview/data": "views/mainview/data"
        },
        mac: {
            bundleCEF: false,
        },
        linux: {
            bundleCEF: false,
        },
        win: {
            bundleCEF: false,
        },
    },
} satisfies ElectrobunConfig;
