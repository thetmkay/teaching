/**
 * Module dependencies
 */

  var express = require('express'),
    http = require('http'),
    path = require('path'),
    nunjucks = require('nunjucks'),
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

  var env = new nunjucks.Environment(new nunjucks.FileSystemLoader([app.get('views')]));
  env.express(app);

  app.get('/favicon.ico', function(req, res) {
    res.sendStatus(401);
  })

  app.get('/html/:name', function(req,res) {
    res.render(path.join('html',req.params.name));
  })

  app.get('/css/:name', function(req,res) {
    res.render(path.join('css',req.params.name));
  })

  app.get('/bootstrap/:name', function(req,res) {
    res.render(path.join('bootstrap',req.params.name));
  })

  app.get('/', function(req,res) {
    res.render('index');
  });

 app.get('*', function(req,res) {
  res.redirect('/');
 })
