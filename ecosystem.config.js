module.exports = {
  apps: [
    {
      name: 'Express-Api',
      exec_mode: 'cluster',
      instances: 'max',
      script: './app.ts',
      max_memory_restart: '512M',
      watch: true,
      autorestart: true
    }
  ]
}