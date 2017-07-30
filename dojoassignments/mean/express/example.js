const express = require('express')
const path = require('path')

const app = express()

const PORT = 8000

app.use(express.static(__dirname, "./client"))

app.set("views", path.join(__dirname, "./client/views"))
app.set('view engine', 'ejs')

app.get('/' ,(request, response) => {
    response.render('index')
}) 

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})