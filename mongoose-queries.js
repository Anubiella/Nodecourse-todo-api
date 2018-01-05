const {ObjectID} = require('mongodb');
const {mongoose} = require('./mongoose.js');
const {Todo} = require('./todo.js');
const {User} = require('./user.js');


var id = '5a4e0fcbaea13111ec17e536';
var userId = '5a4a7824d751ef0e50f9032a';

if (!ObjectID.isValid(id)){
	console.log('ID not valid!!!!');
}

if (!ObjectID.isValid(userId)){
	console.log('User ID not valid!!!!');
}


// Todo.find({
// 	_id: id
// }).then((todos)=>{
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo)=>{
// 	console.log('Todo', todo);
// });

Todo.findById(id).then((todo)=>{
	if (!todo){
		return console.log('Id not found!');
	}
	console.log('Todo by Id', todo);
}).catch((e)=>{
	console.log(e);
});

User.findById(userId).then((user)=>{
	if (!user){
		return console.log('User Id not found!');
	}
	console.log(JSON.stringify(user,undefined,2));
}).catch((e)=>{
	console.log(e);
});