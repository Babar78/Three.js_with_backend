const express = require('express')
const mongoose = require('mongoose')
const Navlink = require('./models/nav')
const cors = require('cors')

// const myroutes = require('./routes/portfolio')

// express app
const app = express()
app.use(cors())
app.get('/navlinks', async (req, res) => {
  try {
    mongoose.connect(
      'mongodb+srv://aliraza1724:4FFgnWhQ-bFp2Hf@cluster0.cyjy5bz.mongodb.net/?retryWrites=true&w=majority',
      {
        dbName: 'portfolio',
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    console.log('connected to db')

    // iss ke agay collection ko query karna hai
    const mydata = await Navlink.find({})

    res.status(200).json(mydata)

    console.log(mydata)
    // I want to close the connection
  } catch (error) {
    console.log(error)
  }
})

// listen for requests

app.listen(3000, () => {
  console.log('server started on port 3000')
})
