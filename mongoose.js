var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose}



// newTodo.save().then((doc)=>{
// 	console.log('Saved todo, ', doc);
// }, (e)=>{
// 	console.log('Unable to save todo..');
// });

// newUser.save().then((doc)=>{
// 	console.log('Saved user ', doc);
// }, (e)=>{
// 	console.log('Unable to save user...');
// });