'use strict';

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ArticleSchema = Schema({
    story_title: String,
    title: String,
    story_url: String,
    url: String,
    created_at: String,
    created_at_i: Number,
    author: String
});

module.exports = mongoose.model('Article', ArticleSchema); // el objeto 'User' instancia el UserSchema