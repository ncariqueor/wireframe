var express = require('express');
var request = require('request');

var app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.get('/', (req, res) =>{
    request.get('http://localhost:3977/wireframe/article', (err, response, body) => {
        if(err)
            throw err;
        var articles = JSON.parse(body);
        //res.status(200).send(articles);
        res.render('index', {articles: articles});
    });
});

app.get('/delete/:id', (req, res) => {
    let id = req.params.id;

    request.delete('http://localhost:3977/wireframe/delete-article/' + id, (err, response, body) => {
        if(err)
            console.log(err);
        else
            res.redirect('/');
    });
});

app.listen(3000, function(){
    console.log("Frontend Listening on port 3000");
});