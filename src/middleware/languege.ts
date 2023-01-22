const dertyWord = ['fuck', 'fuckyou', 'ass']

export function filterLanguege(req: any, res: any, next: Function) {
  const values = Object.values(req.body) as string[]

  values.forEach((str) => {
    // 過濾數字以及空白字元
    str = str.replace(/[0-9]/g, '').replace(/\s*/g, '')

    if (!str) {
      res.status(401).send({
        code: 401,
        message: '字串不可為空'
      })
      return
    }

    if (dertyWord.includes(str)) {
      res.status(401).send({
        code: 401,
        message: '字串包含不雅文字'
      })
      return
    }
    next()
  })
}
