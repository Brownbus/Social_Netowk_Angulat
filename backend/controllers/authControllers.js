const { authService } = require('../services/authService')


const authController = (req, res) => {
const {username, password} = req.body
return authService(username, password)
.then(user => {
if(user.length){
  res.status(200).json({msg : "Succesful login"})
}else{
  res.status(500).json({msg : "something went wrong"})

}
}).catch(e => {
  res.status(404).json({msg : "Please provide valid username or password"})
});
}


module.exports = {
  authController
}