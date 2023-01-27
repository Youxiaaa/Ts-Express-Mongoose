import express from 'express'
const cors = require('cors')
// import path from 'path';
// import dotenv from 'dotenv';
import routers from './router'

// 獲得動態環境變數
// dotenv.config({ path: path.resolve(__dirname, `./env/${process.env.NODE_ENV}.env`) })
// 設定跨域來源
const corsOptions = {
  origin: [
    'https://ryanyou.com',
    'http://localhost:3000',
  ],
  methods: 'GET,PUT,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization']
}

const app = express()
// 設定跨域
app.use(cors(corsOptions))
// 設定傳輸資料格式
app.use(express.json())
// 設定路由
app.use('/todos', routers.todoRouter)
app.use('/user', routers.userRouter)

app.listen(3001, () => {
  console.log(`server is running on 3001 port and already to service`)
})