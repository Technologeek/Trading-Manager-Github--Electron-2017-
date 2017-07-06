"use strict";
//Declaring On-Page Load Functions
$(document).ready(function() {
selectList();
clientsList();
});
var Datastore = require('nedb');
var clients = new Datastore({ filename:  'clients.db', autoload: true });
var category = new Datastore({ filename: 'category.db', autoload: true });
var rtRatings;

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
				$('#category_retrived').append('<option>'+catlists.categs+'</option>');
				
		})
	})

};


// function not called
var clientsList = function(singleInput) {
	//should basically be like that ^ indicates start of pattern andfollowed by singleInput . This won't work unless singleInput is put in regex format
	var names = [];
	var re = new RegExp("^" + singleInput, "i");
	clients.find({name : {$regex : re }},{_id : {$regex : re }},function(err,doc){
		doc.forEach(function(n, index){
			names[index] = { 'id': index, 'text': n.name};
		console.log(n._id);
		});
	});
	return names;
};

var retrievedData = function(rtName,rtCateory,rtComment,rtRatings){
	$('select').material_select();
		var findName = $('#singleInput').val();
		clients.findOne({ name: findName }, function (err, doc) {
			console.log(doc.name);
			console.log(doc.categorys);
			console.log(doc.comments);
			console.log(doc.ratings);
			rtName = doc.name;
			rtCateory = doc.categorys;
			rtComment = doc.comments;
			rtRatings = doc.ratings;
			$("#retrievedName").val(rtName);
			//$("#category_retrived").val(rtCateory);
			$("#category_retrived option").filter(function() {
			    return this.text == rtCateory; 
			}).attr('selected', true);
			$("#retrComments").val(rtComment);
			$("#retrComments").val(rtComment);
			$("#el2").rateYo("option", "rating",rtRatings);

		});

}
/*var getUserData = function(){

	$('#client_Name').val() = .name;
	$('#category_retrived').val() = .name;
	$('#form_comments2').val() = .name;
	$('#eli').val() = .name;


};*/
//Function Deletes all the categories from the database.Uncomment only when needed.
/*(function(){
	category.remove({}, { multi: true }, function (err, numRemoved) {
		console.log("removed!");
	});

})();
*/
