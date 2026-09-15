# ai-notes

## 概要

Reactの学習プログラムです。順を追ってfrontend,infrastructure,backendを作成していきます。

### frontendの作成

frontendはReactで作成します。

プロジェクトディレクトリの作成
```bash
mkdir ai-notes
cd ai-notes
```

create-viteコマンドはバージョン指定して実行

https://ja.vite.dev/guide/
https://github.com/vitejs/vite/releases?utm_source=chatgpt.com#release-create-vite@9.2.1

```bash
npm create vite@9.2.1 frontend -- --template react-ts
```

ESLintを選択
```bash
◆  Which linter to use?
│  ○ Oxlint
│  ● ESLint
│  ↑/↓ to navigate • Enter: confirm
```

Yesを選択
```bash
◆  Install with npm and start now?
│  ● Yes / ○ No
└
```

開発サーバーが起動する
```
  VITE v8.3.0  ready in 186 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
  ```

ZedでReactのデバッグ構成の作成

```bash
mkdir .zed
touch ./.zed/debug.json
```

debug.jsonは以下の通り編集
```json
[
  {
    "label": "Debug React",
    "adapter": "JavaScript",
    "type": "chrome",
    "request": "launch",
    "url": "http://localhost:5173",
    "webRoot": "${ZED_WORKTREE_ROOT}/frontend",
    "skipFiles": ["<node_internals>/**"]
  }
]
```

viteで開発サーバーを起動しておく
```bash
cd frontend
npm run dev
```

F5でデバッガの起動Chromeが起動する
