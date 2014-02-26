var applicantModel = require('../models/applicationModel.js')

var applicantController = module.exports = {
	saveApplicants : function(req,res){
		var applicant = new applicantModel(req.body);
		applicant.save();
		res.render('success');
	},

	showApplicants : function(req,res){
		applicantModel.find({}, function(err,docs){
			res.render('applicants' , {
				applicants: docs
			});
		});
	},

	deleteApplicant : function(req,res){
		applicantModel.remove({_id:req.params.id} , function(err,count){
			res.redirect('/applicants');
			console.log(count)
		})
	},

	viewApplicant : function(req,res){
		applicantModel.find({_id:req.params.id} , function(err,docs){
			res.render('applicant' , {
				applicants: docs
			});
		});
	}

}

