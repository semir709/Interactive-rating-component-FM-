const express = require('express');

const app = express();



app.use('/public', express.static('public'))
app.use('/img', express.static('images'))

app.get('/', (req, res) => {
    res.render('card.ejs');
});

app.get('/card', (req, res) => {
    res.render('card.ejs');
});

app.get('/msg', (req, res) => {
    res.render('msg_card.ejs');
});



app.listen(3000, () => {
    console.log('Server is runing');
});