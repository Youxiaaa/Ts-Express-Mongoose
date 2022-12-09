import express from 'express'
import path from 'path';
import dotenv from 'dotenv';
import todoRouter from './router/todoRouter'

// 獲得動態環境變數
dotenv.config({ path: path.resolve(__dirname, `./env/${process.env.NODE_ENV}.env`) })

const app = express()

// 設定傳輸資料格式
app.use(express.json())
// 設定路由
app.use('/todos', todoRouter)

app.listen(3000, () => {
  console.log(`server is running on 3000 port and already to service`)
})