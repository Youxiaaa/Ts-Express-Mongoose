const dertyWord = ['fuck', 'fuck you', 'ass']

export function filterLanguege(req: any, res: any, next: Function) {
  const values = Object.values(req.body) as any
  for (let i = 0; i < values.length; i++) {
    if (dertyWord.includes(values[i])) {
      res.status(401).send({
        code: 401,
        message: '字串包含不雅文字'
      })
      return
    }
  }
  next()
}
