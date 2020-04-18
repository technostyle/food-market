const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = 3000

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(`${__dirname}/../dist`))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/../dist/index.html`))
})

app.get('/test', function (req, res) {
    res.send({ data: 'hello world' })
})

app.listen(PORT, function () {
    console.log(`Market-app server listening on port ${PORT}`)
})
