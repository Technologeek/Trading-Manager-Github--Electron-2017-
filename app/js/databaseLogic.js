"use strict";
//Declaring On-Page Load Functions
$(document).ready(function() {
selectList();
clientsList();
});
var Datastore = require('nedb');
var clients = new Datastore({ filename:  'clients.db', autoload: true });
var category = new Datastore({ filename: 'category.db', autoload: true });

var insertClient = function(name,categorys,comments,ratings){
	var data = {
		name: name,
		categorys: categorys,
		comments: comments,
		ratings: ratings
	}
	clients.insert(data,function(err,doc){
	})
};

var insertCategory = function(categs) {
	var categoryList = {
		categs : categs
	}
	category.insert(categoryList,function(err,doc){
	})
};

var selectList = function(categs){
		category.find({},function(err,doc){
			doc.forEach(function(catlists){
				$('#category_select').append('<option>'+catlists.categs+'</option>');
		})
	})

};

var clientsList = function(listClients) {
	clients.find({name : {$gt: ''}},function(err,doc){
		doc.forEach(function(n){
			console.log(n.name);
		})
	})
};


//Function Deletes all the categories from the database.Uncomment only when needed.
/*(function(){
	category.remove({}, { multi: true }, function (err, numRemoved) {
		console.log("removed!");
	});

})();
*/