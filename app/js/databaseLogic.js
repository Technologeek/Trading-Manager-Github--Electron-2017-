'use strict';
//Declaring On-Page Load Functions
$(document).ready(function() {
    selectList();
    clientsList();
});

//NeDb initialization
var Datastore = require('nedb');
var clients = new Datastore({ filename: 'clients.db', autoload: true });
var category = new Datastore({ filename: 'category.db', autoload: true });

var rtRatings;
var rtId;

var insertClient = function(name, categorys, comments, ratings) {
    var data = {
        name: name,
        categorys: categorys,
        comments: comments,
        ratings: ratings
    }
    clients.insert(data, function(err, doc) {});
    clients.loadDatabase();
};

var insertCategory = function(categs) {
    var categoryList = {
        categs: categs
    }
    category.insert(categoryList, function(err, doc) {});
};

var selectList = function(categs) {
    category.loadDatabase();
    $('#category_select').val('');
    category.find({}, function(err, doc) {
        doc.forEach(function(catlists) {
            console.log(catlists);
            $('#category_select').append('<option>' + catlists.categs + '</option>');
            $('#category_retrived').append('<option>' + catlists.categs + '</option>');

        })
    });
};

//Searching and returning the list of clients from the database for autocomplete
var clientsList = function(singleInput) {
    var names = [];
    var re = new RegExp("^" + singleInput, "i");
    clients.find({ name: { $regex: re } }, { _id: { $regex: re } }, function(err, doc) {
        doc.forEach(function(n, index) {
            names[index] = { 'id': index, 'text': n.name };
        });
    });
    return names;
};

var retrievedData = function(rtName, rtCateory, rtComment, rtRatings) {
    $('select').material_select();
    var findName = $('#singleInput').val();
    clients.findOne({ name: findName }, function(err, doc) {
        rtId = doc._id;
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
        $("#el2").rateYo("option", "rating", rtRatings);
    });

}
var updateEntry = function(newName, newCategory, rId, newComment, newRatings) {
    var findName = $("#retrievedName").val();
    var categorys = $('#category_retrived').val();
    var comments = $('#retrComments').val();
    var ratings = $("#el2").rateYo("option", "rating");
    clients.update({ _id: rtId }, { name: findName, categorys: categorys, comments: comments, ratings: ratings }, {});
    clients.loadDatabase();
};

//To reset Databases.
/*Uncommenting the below functions would reset the database deleting all the existing entries*/

/*(function(){
	clients.remove({}, { multi: true }, function (err, numRemoved) {
		console.log("removed!");
	});

})(); 

(function(){
	category.remove({}, { multi: true }, function (err, numRemoved) {
		console.log("removed!");
	});

})(); 
*/