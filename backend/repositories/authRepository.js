
const authRepository = (username, password) => {
  const hardcodedUser = 'Lolka';
  const hardcodedPassword = 'Bolka'

  if(username === hardcodedUser && password === hardcodedPassword){
    return new Promise((res, rej) => {
      res([{username: "Lolka", password: 'Bolka'}])
    })
  }else{
    return new Promise((res,rej)=> {
      rej([])
    })
  }
  };

  module.exports = {
    authRepository
  }