
const authController = (req, res) => {
  console.log(req.body)
  console.log(req.params)
return res.json({token: 'toasdasdasken'})
}


module.exports = {
  authController
}