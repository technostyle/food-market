const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const productController = require('./controllers/product-controller');

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

// TODO: routes
app.get('/api/products', function (req, res) {
    const query = req.query;
    console.log('/api/products REQUEST RECIEVED!', {query})
    const products = productController.getProducts(query || {})
    res.send({ data: products })
})

app.get('/api/img/:img_name', function(req, res) {
    const img_name = req.params.img_name;
    res.sendFile(path.resolve(`${__dirname}/img/${img_name}`));
})

app.listen(PORT, function () {
    console.log(`Market-app server listening on port ${PORT}`)
})
