const express=require('express');

const router=express.Router();


router.get('/', (req, res, next) => {
    res.send('<h3>Hello from Express.......</h3>');
  });
  module.exports=router;