import express from 'express'
const cors = require('cors')
import path from 'path'
import dotenv from 'dotenv'
import routers from './router'
// 引入 swagger
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')

// 獲得動態環境變數
dotenv.config({ path: path.resolve(__dirname, `./${ process.env.NODE_ENV }.env`) })
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
// const swaggerDefinition = {
//   openapi: '3.0.n',
//   info: {
//     title: '開發模板API',
//     version: '1.0.0',
//     description: '開發模板Swagger'
//   },
//   servers: [
//     {
//       url: 'http://localhost:3001/'
//     }
//   ]
// };
// const swaggerOptions = {
//   // definition: {
//   //   openapi: '3.0.n',
//   //   info: {
//   //     title: '開發模板API',
//   //     version: '1.0.0',
//   //     description: '開發模板Swagger'
//   //   },
//   //   servers: [
//   //     {
//   //       url: 'http://localhost:3001/'
//   //     }
//   //   ],
//   // },
//   explorer: true,
//   urls: [
//     {
//       url: 'http://localhost:3001/auth.json',
//       name: 'auth'
//     },
//     {
//       url: 'http://localhost:3001/todos.json',
//       name: 'todos'
//     }
//   ]
//   // apis: ['./src/**/*.yml']
// }
// const swaggerSpec = swaggerJsdoc(swaggerOptions)

const swaggerDoc = require('./swaggerDocs/todos.json')
const swaggerDoc2 = require('./swaggerDocs/auth.json')

app.use('/api/doc/todos', swaggerUi.serveFiles(swaggerDoc), swaggerUi.setup(swaggerDoc))
app.use('/api/doc/auth', swaggerUi.serveFiles(swaggerDoc2), swaggerUi.setup(swaggerDoc2))

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${ process.env.PORT } port and already to service`)
})