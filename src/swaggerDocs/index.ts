export default {
  explorer: true,
  swaggerOptions: {
    urls: [
      {
        url: `${process.env.EXPRESS_BASE_URL}:${process.env.PORT}/swaggerDocs/auth.yml`,
        name: '權限管理_Auth'
      },
      {
        url: `${process.env.EXPRESS_BASE_URL}:${process.env.PORT}/swaggerDocs/todos.yml`,
        name: '待辦事項_Todos'
      },
      {
        url: `${process.env.EXPRESS_BASE_URL}:${process.env.PORT}/swaggerDocs/upload.yml`,
        name: '檔案管理_Upload'
      }
    ]
  }
}
