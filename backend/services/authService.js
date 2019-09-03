const { authRepository } = require('../repositories/authRepository')

const authService = (username, password) => {
  return authRepository(username, password)
}

module.exports = {
  authService
}
