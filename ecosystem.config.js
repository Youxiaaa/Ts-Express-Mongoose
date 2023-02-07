module.exports = {
  apps: [
    {
      name: 'Express-Api',
      exec_mode: 'cluster',
      instances: 'max',
      script: './src/app.ts',
      max_memory_restart: '512M',
      watch: false,
      autorestart: true,
      // 不用監聽的文件
      ignore_watch: [
        'node_modules'
      ]
    }
  ]
};