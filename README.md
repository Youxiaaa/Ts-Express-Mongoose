# Ts-Express-Mongoose

## 基於 TypeScript 的 Express 和 mongoose 的開發模板。

## 執行方式
```bash
// 安裝依賴
npm i
// 開啟本地開發環境
npm run dev
// 開啟本地生產環境
npm run dev:prod
// 開啟pm2服務
npm run pm2
```

## 環境版本號
```bash
node => 18.12.1
npm => 9.4.0
```

## 相關依賴
```bash
- bcrypt //加密
- cors  //跨域
- dayjs  //日期處理 
- dotenv  //環境變數
- jsonwebtoken  //JWT Token
- multer  //上傳檔案
- swagger-jsdoc //Swagger設定
- swagger-ui-express //Swagger
```

## 目錄結構
- config => 基礎設定檔
- controller => API Controllers 主要邏輯處理
- middleware => API Middlewares 中間組件
- models => MongoDB Models
- router => API Routers 路由控制
- swaggerDocs => Swagger setting yaml
