const express = require('express')
const app = express()
const mongoose = require("mongoose")
const port = 3000
process.loadEnvFile()
app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect(process.env.DB_URI).then(()=>console.log("DB CONNECTED")).catch(err=>err.message);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})