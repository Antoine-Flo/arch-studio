const express = require('express')

const app = express();

const path = require('path');
const port = 3000;
// const port = 3000;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static('./public'));

app.get('/', function (req, res) {
    res.render('pages/home', {
        pageName: 'HOME'
    })
});

app.get('/contact', (req, res) => {
    res.render('pages/contact', {
        pageName: 'CONTACT'
    })
})

app.get('/about', (req, res) => {
    res.render('pages/about', {
        pageName: 'ABOUT'
    })
})

app.get('/portfolio', (req, res) => {
    res.render('pages/portfolio', {
        pageName: 'PORTFOLIO'
    })
})


app.listen(port, () => console.log(`Server started on port ${port}!`));