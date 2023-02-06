import express from 'express'
const cors = require('cors')
import path from 'path'
import dotenv from 'dotenv'
import routers from './router'
// 引入 swagger
const swaggerUi = require('swagger-ui-express')

// 獲得動態環境變數
dotenv.config({ path: path.resolve(__dirname, `./${process.env.NODE_ENV}.env`) })
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
// 設定檔案位置
app.use('/uploads', express.static('uploads'))
app.use('/swaggerDocs', express.static('./src/swaggerDocs'))
// 設定路由
app.use('/todos', routers.todoRouter)
app.use('/user', routers.userRouter)
app.use('/file', routers.uploadRouter)

// 設定 Swagger
import swaggerOptions from './swaggerDocs'
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(null, swaggerOptions))

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT} port and already to service`)
})