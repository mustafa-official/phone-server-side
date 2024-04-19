const express = require('express');
const cors = require('cors');
const phones = require('./phones.json');
const app = express();
app.use(cors());
const port = 5000;

app.get('/', (req, res) => {
    res.send("Phone information comming soon")
})
app.get('/phones', (req, res) => {
    res.send(phones);
})
app.get('/phones/:id', (req, res) => {
    const id = req.params.id;
    // console.log('I need', id);
    const phone = phones.find(singlePhone => singlePhone.id === +id) || {};
    res.send(phone);
})
app.listen(port, () => {
    console.log(`Phone listening on port ${port}`);
})