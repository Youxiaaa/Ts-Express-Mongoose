const jwt = require('jsonwebtoken')

export function verifyJWT(req: any, res: any, next: Function) {
  try {
    // 判斷前端 headers 有無帶入 authorization
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1]
      if (!token) return res.status(401).send({
        code: 401,
        message: '拒絕查閱'
      })
      const decoded = jwt.verify(token, 'secret')
      req.user = decoded
      next()
    } else {
      return res.status(401).send({
        code: 401,
        message: '拒絕查閱'
      })
    }
  } catch (err: any) {
    return res.status(401).send({
      code: 401,
      message: err.message
    })
  }
}