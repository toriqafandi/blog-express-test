require('dotenv').config()
const express = require('express')
const { sequelize, Product } = require('./models');
const app = express()
const port = process.env.PORT ?? 3000

app.get('/', (req, res) => {
    res.send('Hello World !')
})

app.get('/products', async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
})

app.listen(port, async() => {
    console.log(`Service listen on port ${port}`)
    console.log(JSON.stringify(process.env))
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true});
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})