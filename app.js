
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var applicantController = require('./controllers/applicantController');
var applicantModel = require('./models/applicationModel');

if(global.process.env.MONGOHQ_URL){
	mongoose.connect(global.process.env.MONGOHQ_URL)
}else{
	mongoose.connect('mongodb://localhost/pickAxe');
}


var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


//renders the index page
app.get('/', function(req, res){
	res.render('index')
});

// displays a list of applicants
app.get('/applicants', applicantController.showApplicants);

// creates and applicant
app.post('/applicant', applicantController.saveApplicants);

app.get('/applicants/delete/:id', applicantController.deleteApplicant)
app.get('/applicant/individual/:id' , applicantController.viewApplicant);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


