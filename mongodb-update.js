// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err){
		return console.log('Unable to connect to MongoDB');
	}
	const db = client.db('TodoApp');
	console.log('Connected to MongoDB');

	db.collection('Users').findOneAndUpdate({
		name: 'Anubi'
	},{
		$inc: {
			age: +4
		}
	},{
		returnOriginal: false
	}).then((result)=>{
		console.log(result);
	});



	// client.close();
});