const { query } = require('express');
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

    const num = req.query.num;

    res.render('msg_card.ejs', {num: num});
});

app.get('/send', (req, res) => {

    const num = req.query.num;

    res.json({link: '/msg', num: num});
});



app.listen(3000, () => {
    console.log('Server is runing');
});