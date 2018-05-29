'use strict';

var express = require('express');
var ArticleController = require('../controllers/article');
var api              = express.Router();

api.get('/article', ArticleController.getArticles);
api.delete('/delete-article/:id', ArticleController.deleteArticle);

module.exports = api;