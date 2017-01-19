var Datastore = require('nedb');
fs = require('fs');
//*var clients = new Datastore({ filename: path.join(require('nw.gui').App.dataPath, 'clients.db') });

var clients = new Datastore({ filename:  '../../database/clients.db', autoload: true });
var category = new Datastore({ filename: '../../database/category.db', autoload: true });
var insertClient = function(name, categorys) {
	var data = {
		name: name,
		categorys: categorys
	};
	clients.insert(data, function(err,doc){
		console.log('Inserted', doc.name, 'with Id', doc._id, doc.categorys);
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