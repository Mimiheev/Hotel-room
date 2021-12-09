const express = require('express')
const PORT = 5000
const app = express()

app.get('/hello', (req, res) => {
    res.json('Welcome to Firebase Hotel with Node Express')
})

app.listen(PORT, () => console.log('Server is running on PORT ', + PORT))