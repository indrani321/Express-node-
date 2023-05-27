const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">ADD ITEM</button></form>');
});

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h3>Hello from Express.......</h3>');
});

app.listen(3000)