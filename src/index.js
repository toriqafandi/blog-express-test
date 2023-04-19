const express = require('express')
const { sequelize } = require('./models');
const app = express()
const port = process.env.PORT ?? 3000

app.get('/', (req, res) => {
    res.send('Hello World !')
})

app.listen(port, async() => {
    console.log(`Service listen on port ${port}`)
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true});
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})