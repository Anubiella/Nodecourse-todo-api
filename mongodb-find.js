// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err){
		return console.log('Unable to connect to MongoDB');
	}
	const db = client.db('TodoApp');
	console.log('Connected to MongoDB');

	db.collection('Users').find({name: 'Anubi'}).toArray().then((docs)=>{
			console.log('Todos');
			console.log(JSON.stringify(docs, undefined,2));
	}, (err)=>{
		console.log('unable to fetch docs...', err);
	});

	// db.collection('Todos').find().count().then((count)=>{
	// 		console.log('Todos count:'+count);
	// }, (err)=>{
	// 	console.log('unable to fetch docs...', err);
	// });


	// client.close();
});