import express from 'express'
const cors = require('cors')
import path from 'path';
import dotenv from 'dotenv';
import todoRouter from './router/todoRouter'
// import { filterLanguege } from './middleware/languege'

// 獲得動態環境變數
dotenv.config({ path: path.resolve(__dirname, `./env/${process.env.NODE_ENV}.env`) })
// 設定跨域來源
const corsOptions = {
  origin: [
    'https://ryanyou.com',
    'https://youxiaaa.github.io',
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
app.use('/todos', todoRouter)

app.listen(3001, () => {
  console.log(`server is running on 3001 port and already to service`)
})