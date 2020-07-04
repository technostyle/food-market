const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const {products} = require('./data');

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(`${__dirname}/../dist`))

app.get('/', (req, res) => {
    console.log('/ REQUEST RECIEVED!')
    res.sendFile(path.resolve(`${__dirname}/../dist/index.html`))
})

app.get('/api/test', function (req, res) {
    console.log('/test REQUEST RECIEVED!')
    res.send({ data: 'hello world' })
})

app.get('/api/worldHello', function (req, res) {
    console.log('/worldHello REQUEST RECIEVED!')
    res.send({ data: 'world hello' })
})

app.get('/api/products', function (req, res) {
    console.log('/api/products REQUEST RECIEVED!')
    res.send({ data: products })
})

app.listen(PORT, function () {
    console.log(`Market-app server listening on port ${PORT}`)
})
