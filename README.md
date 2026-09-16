# Electrobun AmazeJS World

A simple [Electrobun](https://github.com/blackboardsh/electrobun.git) app working with [AmazeJS!](https://github.com/amazebb/amazejs.git)

## What You'll See

This app demonstrates:
- **Native Window**: A cross-platform desktop window
- **Web-based UI**: Modern HTML, CSS, and JavaScript interface

## Getting Started

Install Hutch / Electrobun:

```bash
curl -fsSL https://hutch.blackboard.sh/hutch/install.sh | sh
```

This repo runs under the nightly canary:

```bash
hutch upgrade canary
```

Then from this directory:

```bash
hutch run install
```

Both HTML files are already in the bundle. `AMAZE_VIEW` picks which one the window loads — do not rewrite `src/bun/index.ts`.

```bash
./view.sh mvp      # WKWebView / CSS-anchor placement (default)
./view.sh index    # amazejs table
./view.sh mvp build
```

`hutch run dev` with no env is `mvp`.

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
