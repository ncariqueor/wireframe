'use strict';

var path = require('path');
var fs = require('fs');
var request = require('request');

var Article   = require('../models/article');

function getArticles(req, res) {

    Article.find({}).sort({created_at: -1}).exec(function(err, document) {
        if(err){
            res.status(500).send({message: "Server error"});
        }else{
            res.status(200).send(document);
        }
    });
}

function deleteArticle(req, res) {
    var articleId = req.params.id;

    Article.findByIdAndRemove(articleId, function(err, articleRemoved) {
        if(err){
            res.status(500).send({message: 'Server error'});}else{
                if(!articleRemoved){
                    res.status(404).send({message: 'Error: Article does not deleted'});
                }else{
                    res.status(404).send({articleRemoved: articleRemoved});
                }
            }
        });
}

function getJson() {

    request('https://hn.algolia.com/api/v1/search_by_date?query=nodejs', function(err, r, body) {


        let params = JSON.parse(body);

        params.hits.forEach(function(item) {
            let article = new Article();
            article.story_title = item.story_title;
            article.title = item.title;
            article.story_url = item.story_url;
            article.url = item.url;
            article.created_at = item.created_at;
            article.created_at_i = item.created_at_i;
            article.author = item.author;

            article.save(function(err, articleStored) {
                if(err){
                    throw err;
                }else{
                    if(!articleStored){
                        console.log("Error: Article was not inserted");
                    }
                }
            });
        });
    });
}

getJson();

setInterval(function(){getJson();}, 3600000); //    That line sets getJson function interval

module.exports = {
    getArticles,
    deleteArticle
};