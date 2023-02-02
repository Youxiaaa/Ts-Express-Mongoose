import express from 'express'
const cors = require('cors')
// import path from 'path';
// import dotenv from 'dotenv';
import routers from './router'
// 引入 swagger
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
// import swaggerSetting from './swaggerDocs/swagger'

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
// 設定檔案位置
app.use('/uploads', express.static('uploads'))
// 設定路由
app.use('/todos', routers.todoRouter)
app.use('/user', routers.userRouter)
app.use('/file', routers.uploadRouter)
// 設定 Swagger
const swaggerDefinition = {
  openapi: '3.0.n',
  info: {
    title: '開發模板API',
    version: '1.0.0',
    description: '開發模板Swagger', // short description of the app
  },
};
const swaggerOptions = {
  swaggerDefinition,
  apis: ['./src/**/*.yaml']
}
const swaggerSpec = swaggerJsdoc(swaggerOptions)
app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(3001, () => {
  console.log(`server is running on 3001 port and already to service`)
})