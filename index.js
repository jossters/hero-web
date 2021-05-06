const express = require('express')

const server = express()

const PORT = process.env.PORT || 5000

process.env.API_KEY

server.use(express.json())

server.get('/api/*', (req, res) => {
    res.json({
        cohort: 'WEB 41',
    })
})

server.listen(PORT, ( => {
    console.log(`listinig on ${PORT}`)
}))