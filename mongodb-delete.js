// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err){
		return console.log('Unable to connect to MongoDB');
	}
	const db = client.db('TodoApp');
	console.log('Connected to MongoDB');

	db.collection('Users').findOneAndDelete({_id: new ObjectID('5a41437b7464fa01700d26b2')}).then((result)=>{
		console.log(result);
	});



	// client.close();
});