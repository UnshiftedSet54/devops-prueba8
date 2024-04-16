const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3001

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/intro', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public', 'calcIntro.html'))
})

app.use('/calculator', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public', 'calculator.html'))
})


app.listen(PORT, () => console.log(`Listening at port ${PORT}`))


module.exports = app