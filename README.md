# Cursor Onboarding Deck

**線上版：** https://the-pocket-company.github.io/cursor-onboarding-deck/

給 Cursor 初學者的環境教學投影片（共 20 頁，繁體中文）。

內容涵蓋：

- 註冊 GitHub、把 Git 連進 Cursor
- 系統長相：GCP + Firebase App Hosting（git push 自動部署）、Firestore、Cloud SQL、Cloud Run
- 兩條路線：地端 localhost vs 雲端部署
- AI Coding 基礎：Agent / Plan 模式、清楚描述需求、釐清 → Plan → Build 迭代、有效執行原則
- 用 Rules / Skills 客製化 Cursor（附可複製、可下載的繁體中文範本）

## 線上瀏覽

直接開上面的網址即可。

操作：

- `←` / `→` 或空白鍵：換頁
- 數字鍵 `1`–`9`：跳頁
- `P`：列印或另存 PDF

## 本機瀏覽

用瀏覽器開 `index.html`，或用任意靜態伺服器服務此資料夾。
（第 20 頁的「複製」按鈕需以 `http(s)` 開啟才會作用。）

## 可複製的範本

`assets/` 內含繁體中文的 AI Coding 行為準則，對應投影片第 20 頁的複製／下載：

- `ai-coding-guidelines.mdc` → 放到 `.cursor/rules/`
- `ai-coding-guidelines-skill.md` → 放到 `.cursor/skills/<名稱>/SKILL.md`

## 部署

push 到 `main` 後，GitHub Actions（`.github/workflows/deploy-pages.yml`）會自動發佈到 `gh-pages` 分支。

Pages 設定：`Settings` → `Pages` → `Source: Deploy from a branch` → `gh-pages` / `root`。

入口檔案為 `index.html`。
