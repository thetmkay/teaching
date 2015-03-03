/**
 * Module dependencies
 */

  var express = require('express'),
    http = require('http'),
    path = require('path'),
    cons = require('consolidate');

  var app = module.exports = express();

  /**
   * Configuration
   */

  // all environments
  app.set('port', process.env.PORT || 3000);
  app.engine('html', cons.nunjucks);
  app.set('view engine', 'html');
  app.set('views', path.join(__dirname, 'views'));//need for subapping/mounting
  app.use(express.static(path.join(__dirname, 'public')));
  // app.use(app.router);

  app.get('/favicon.ico', function(req, res) {
    res.sendStatus(401);
  })

  app.get('/html/:name', function(req,res) {
    res.render(path.join('html',req.params.name));
  })

  app.get('/', function(req,res) {
    res.render('index');
  });

 app.get('*', function(req,res) {
  res.redirect('/');
 })
