var Datastore = require('nedb');
fs = require('fs');
//*var clients = new Datastore({ filename: path.join(require('nw.gui').App.dataPath, 'clients.db') });

var clients = new Datastore({ filename:  'clients.db', autoload: true });
var category = new Datastore({ filename: 'category.db', autoload: true });
var insertClient = function(name, categorys) {
	var data = {
		name: name,
		categorys: categorys
	};
	clients.insert(data, function(err,doc){
		console.log('Inserted', doc.name, 'with Id', doc._id, doc.categorys);
	});
};

var insertCategory = (function(categs) {
	var categoryList = {
		categs : categs
	};
	category.insert(categoryList, function(err,doc){
		console.log('Inserted Category',doc.categs);
	});
	console.log(categs);
	category.find({},function(err,doc){
		console.log(categs);
		doc.forEach(function(categoryList){
			console.log(doc.categoryList)
			$('#category_select').append($('<option>',{value : categoryList.value},'</option>'));
	});
	/*$.each(categoryList, function(key, value){
		$('#category_name').append($('<option>', + {categs : key}).text(categs));
	})*/
});
})();

 var searchClients = function(name){
      /*var data2 = {
      name : name 
      };*/	
      clients.find({name: 'Rahul'}, function(err,doc) {
      console.log('Found the name',doc);
      });
 };
/*var data = {
	name : 'tupac',
	categorys : 'paypal'

}; 

clients.insert(data, function(err,doc){
	console.log('Inserted', doc.name, 'with Id', doc._id, doc.categorys);
});*/

/*category.inert(data function (err,doc){
console.log('Inserted', doc.categorys)
});*/

/*clients.findOne({ categorys: 'paypal' }, function(err, doc) {  
    console.log('Found user:', doc.name);
});*/


// Create a "unique" index for the clients name and categories
/*clients.ensureIndex({fieldName: 'name', unique: true});
clients.ensureIndex({fieldName: 'category', unique: true});
*/