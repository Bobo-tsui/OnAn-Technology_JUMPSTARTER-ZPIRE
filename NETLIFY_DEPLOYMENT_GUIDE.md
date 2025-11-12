# OnAn Technology 網站 - Netlify 部署指南

## 部署步驟

### 方法一：通過 Netlify UI 部署（推薦）

1. **解壓縮文件**
   - 下載並解壓 `onan-technology-website.tar.gz`
   - 您會得到 `onan-technology` 資料夾

2. **登入 Netlify**
   - 前往 [https://www.netlify.com](https://www.netlify.com)
   - 登入您的帳號（或註冊新帳號）

3. **部署網站**
   - 點擊 "Add new site" → "Deploy manually"
   - 將整個 `onan-technology` 資料夾拖放到上傳區域
   - Netlify 會自動檢測到 `netlify.toml` 配置文件

4. **自動構建**
   - Netlify 會自動執行構建命令
   - **Build command**: `pnpm install && pnpm run build:client`
   - **Publish directory**: `dist/public`
   - **Node version**: 18

5. **等待部署完成**
   - 部署通常需要 3-5 分鐘
   - 完成後您會獲得一個 `.netlify.app` 網址

### 方法二：通過 Git 連接部署

1. **將代碼推送到 Git 倉庫**
   ```bash
   cd onan-technology
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-git-repo-url>
   git push -u origin main
   ```

2. **在 Netlify 連接 Git 倉庫**
   - 點擊 "Add new site" → "Import an existing project"
   - 選擇您的 Git 提供商（GitHub/GitLab/Bitbucket）
   - 選擇您的倉庫
   - Netlify 會自動讀取 `netlify.toml` 配置

## 構建配置

專案已包含 `netlify.toml` 配置文件：

```toml
[build]
  command = "pnpm install && pnpm run build:client"
  publish = "dist/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

## 環境變數配置（可選）

在 Netlify 的 Site settings → Environment variables 中可添加以下變數：

```
VITE_APP_TITLE=OnAn Technology - Posthumous Restoration Service
VITE_APP_LOGO=/logo.svg
```

## 自訂域名設置

1. 前往 Site settings → Domain management
2. 點擊 "Add custom domain"
3. 輸入您的域名並按照指示配置 DNS

## 重要說明

### ✅ 已包含的內容
- ✅ `netlify.toml` 配置文件（自動構建配置）
- ✅ `build:client` 腳本（純前端構建）
- ✅ 所有圖片資源（`client/public/images/`）
- ✅ PWA manifest 和圖標
- ✅ SPA 路由重定向規則

### 📁 目錄結構
```
onan-technology/
├── client/               # 前端源代碼
│   ├── src/             # React 組件和頁面
│   ├── public/          # 靜態資源
│   │   └── images/      # 所有圖片文件
│   └── index.html       # HTML 模板
├── netlify.toml         # Netlify 配置
├── package.json         # 依賴和腳本
└── NETLIFY_DEPLOYMENT_GUIDE.md  # 本文件
```

### 🔧 構建流程
1. Netlify 讀取 `netlify.toml`
2. 執行 `pnpm install` 安裝依賴
3. 執行 `pnpm run build:client` 構建前端
4. 將 `dist/public/` 目錄發布為網站
5. 配置 SPA 路由重定向

## 故障排除

### 構建失敗
**問題**: "Build command failed"
**解決方案**:
- 確認 Node.js 版本為 18 或更高
- 檢查 Netlify 構建日誌中的具體錯誤
- 確認 `netlify.toml` 文件存在於專案根目錄

### 頁面 404 錯誤
**問題**: 刷新頁面時出現 404
**解決方案**:
- 確認 `netlify.toml` 中的 redirects 規則已配置
- 檢查 Publish directory 是否設置為 `dist/public`

### 圖片無法顯示
**問題**: 網站顯示但圖片加載失敗
**解決方案**:
- 確認所有圖片在 `client/public/images/` 目錄中
- 檢查圖片路徑使用絕對路徑（如 `/images/hero-background.png`）
- 清除瀏覽器緩存後重試

### 構建時間過長
**問題**: 構建超過 10 分鐘
**解決方案**:
- 檢查網絡連接
- 確認沒有安裝不必要的依賴
- 聯繫 Netlify 支援檢查帳號限制

## 性能優化建議

1. **啟用 Netlify CDN**: 自動啟用，無需額外配置
2. **圖片優化**: 考慮使用 Netlify Image CDN（需升級方案）
3. **緩存策略**: 靜態資源已自動配置長期緩存
4. **HTTPS**: Netlify 自動提供免費 SSL 證書

## 聯絡資訊

如有任何問題，請聯絡：bobo.tsuipuichi@gmail.com

## 版本資訊

- 專案版本: f56caeff
- 最後更新: 2025年11月11日
- 框架: React 19 + Vite + Tailwind CSS 4
- 構建工具: Vite 7.1.9
- 包管理器: pnpm
