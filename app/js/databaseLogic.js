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


// function not called
var clientsList = function(singleInput) {
	//should basically be like that ^ indicates start of pattern andfollowed by singleInput . This won't work unless singleInput is put in regex format
	var names = [];
	var re = new RegExp("^" + singleInput, "i");
	clients.find({name : {$regex : re }},function(err,doc){
		doc.forEach(function(n, index){
			names[index] = { 'id': index, 'text': n.name};
		});
	});
	return names;
};

//Function Deletes all the categories from the database.Uncomment only when needed.
/*(function(){
	category.remove({}, { multi: true }, function (err, numRemoved) {
		console.log("removed!");
	});

})();
*/
