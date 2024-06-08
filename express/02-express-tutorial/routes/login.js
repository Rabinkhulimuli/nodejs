const express= require('express')
const router= express.Router()
// Route for login
router.post('/', (req, res) => {
    console.log(req)
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send('Please provide credentials');
  });
  module.exports=router