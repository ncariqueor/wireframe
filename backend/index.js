'use strict';

var mongoose = require('mongoose');

var app = require('./app');

var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/wireframe', function(err, res) {
    if(err){
        throw err;
    }else{
        console.log("Server running...");

        app.listen(port, function(){
            console.log("Backend Listening on http://localhost:" + port);
        });
    }
});