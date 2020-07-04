const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

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

const products = [
    {
        id: 1,
        image: 'image',
        name: 'product 1',
        price: 299,
    },
    {
        id: 2,
        image: 'image',
        name: 'product 2',
        price: 349,
    },
    {
        id: 3,
        image: 'image',
        name: 'product 3',
        price: 159,
    },
    {
        id: 229,
        image: 'image',
        name: 'product 4',
        price: 69,
    },
]

// const power = (array, count) => count ? multiply(array.concat(array), --count) : array;
const multiply = (array, count) => {
    let adjoint = [];
    while (--count) {
        adjoint = adjoint.concat(array)
    }
    return adjoint;
}

// const poweredProducts = power(products, 4);
const multipliedProducts = multiply(products, 4);

app.get('/api/products', function (req, res) {
    console.log('/api/products REQUEST RECIEVED!')
    res.send({ data: multipliedProducts })
})

app.listen(PORT, function () {
    console.log(`Market-app server listening on port ${PORT}`)
})
