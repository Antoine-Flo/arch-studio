const express = require('express')

const app = express();

const path = require('path');
const port = process.env.PORT || 3000;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.use(express.static('./public'));
app.get('/', function (req, res) {
    res.render('pages/home')
});



app.listen(port, () => console.log(`Server started on port ${port}!`));