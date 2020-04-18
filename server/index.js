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

app.get('/test', function (req, res) {
    console.log('/test REQUEST RECIEVED!')
    res.send({ data: 'hello world' })
})

app.get('/worldHello', function (req, res) {
    console.log('/worldHello REQUEST RECIEVED!')
    res.send({ data: 'world hello' })
})

app.listen(PORT, function () {
    console.log(`Market-app server listening on port ${PORT}`)
})
