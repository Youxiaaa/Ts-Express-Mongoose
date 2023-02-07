export default {
  explorer: true,
  swaggerOptions: {
    urls: [
      {
        url: `${process.env.EXPRESS_BASE_URL}:${process.env.PORT}/swaggerDocs/auth.yaml`,
        name: '權限管理_Auth'
      },
      {
        url: `${process.env.EXPRESS_BASE_URL}:${process.env.PORT}/swaggerDocs/todos.yaml`,
        name: '待辦事項_Todos'
      },
      {
        url: `${process.env.EXPRESS_BASE_URL}:${process.env.PORT}/swaggerDocs/upload.yaml`,
        name: '檔案管理_Upload'
      }
    ],
    //! 設定預設位置
    'urls.primaryName': '待辦事項_Todos'
  }
}
