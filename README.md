# Electrobun AmazeJS World

A simple Electrobun app to get you started with the framework.

## What You'll See

This hello world app demonstrates:
- **Native Window**: A cross-platform desktop window
- **Web-based UI**: Modern HTML, CSS, and JavaScript interface
- **Simple Architecture**: Clean separation between Cottontail process and UI

## Getting Started

This project is pinned to Electrobun **2.0.2-beta.27**, which is the current
git HEAD of [electrobun](https://github.com/blackboardsh/electrobun). Stable
Electrobun **2.0.1** does not build under current Hutch: the CLI copies
`bin/cottontail-core` when it sees FFI, and 2.0.1's bundled Cottontail 0.5.0
does not have that file (`CopySourceMissing`).

`hutch upgrade` / `hutch upgrade canary` only moves the **global** Hutch
launcher (and the Cottontail that runs scripts). It does not change
`electrobun.version` in this file. Production Hutch stays on PATH even after
canary is installed; this app has to name the matching trio itself.

`hutch.config.ts` therefore pins all three:

```ts
// @hutch cli=0.27.0-canary.8 cottontail=0.7.0-canary.10
export default {
  electrobun: { version: "2.0.2-beta.27" },
  // ...
};
```

Install canary Hutch once if it is not already in `~/.hutch/releases`:

```bash
hutch upgrade canary
```

Then from this directory:

```bash
hutch electrobun prepare   # downloads Electrobun 2.0.2-beta.27
hutch run install
```

Both HTML files are already in the bundle. `AMAZE_VIEW` picks which one the window loads — do not rewrite `src/bun/index.ts`.

```bash
./view.sh mvp      # WKWebView / CSS-anchor placement (default)
./view.sh index    # amazejs table
./view.sh mvp build
```

`hutch run dev` with no env is `mvp`.

The pragma makes this project re-exec Hutch 0.27.0-canary.8 even if
`hutch self version` still prints 0.26.0. `hutch electrobun update` will not
get you here — it only advances the pin to latest **stable**, still 2.0.1.

Build for production:

```bash
hutch run build
```

## Project Structure

```
src/
├── bun/
│   └── index.ts      # Main process - creates and manages windows
└── mainview/
    ├── index.html    # Your app's UI
    ├── index.css     # Styles
    └── index.ts      # View logic
```

## Next Steps

Ready to build something more complex? Check out:

- **[Documentation](https://framework.blackboard.sh/electrobun/)** - Learn about all Electrobun features
- **[Examples](https://github.com/blackboardsh/electrobun/tree/main/playground)** - See advanced features like RPC, menus, and system tray
- **[GitHub](https://github.com/blackboardsh/electrobun)** - Star the repo and join the community

### Add More Features

Want to extend this app? Try adding:
- RPC communication between Cottontail and webview
- Native menus and system tray
- File dialogs and system integration
- Multiple windows and views

Happy building! 🚀
