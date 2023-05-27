const path = require('path');
const express = require('express');
const app = express();

const adminRoutes =require('./routes/admin');
const shopRoutes =require('./routes/shop');

app.use(express.urlencoded({ extended: false }));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);


app.use((req,res,next)=>{
  res.status(404).send('<h1>Your Page is not found.....!</h1>')

})

app.listen(3000);
