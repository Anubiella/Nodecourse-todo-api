const {ObjectID} = require('mongodb');
const {mongoose} = require('./mongoose.js');
const {Todo} = require('./todo.js');
const {User} = require('./user.js');



Todo.remove({}).then((result)=>{
	console.log(result);
});

// Todo.findOneAndRemove();

Todo.findByIdAndRemove('5a4fb183fda45dd637fc0356').then((todo)=>{
	console.log(todo);
});