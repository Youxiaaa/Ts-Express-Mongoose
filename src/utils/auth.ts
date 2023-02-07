const jwt = require('jsonwebtoken');

export async function verifyToken (tokenStr: string, secretStr: string, isIgnore = false) {
  try {
    const decoded = await jwt.verify(tokenStr, secretStr, { ignoreExpiration: isIgnore }); //! ignoreExpiration 忽略過期

    if (decoded) {
      return {
        userId: decoded.userId,
        isValid: true
      };
    }
    return {
      isValid: false
    };
  } catch (err) {
    return {
      isValid: false
    };
  }
}
