var express = require('express');
const {ObjectID} = require('mongodb');
var bodyParser = require('body-parser');

var {mongoose} = require('./mongoose.js');
var {Todo} = require('./todo.js');
var {User} = require('./user.js');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.post('/todos', (req,res)=>{
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc)=>{
		res.send(doc);
	}, (e)=>{
		res.status(400).send(e);
	});
});


app.get('/todos', (req, res)=>{
	Todo.find().then((todos)=>{
		res.send({todos});
	});
}, (e)=>{
	res.status(400).send(e);
});

app.get('/todos/:id',(req, res)=>{
	var id = req.params.id;
	
	if (!ObjectID.isValid(id)){
		res.status(404).send();
	}
	Todo.findById(id).then((todo)=>{
		if (todo) {
			res.send({todo});
		} else {
			res.send(404).send();
		}
	}).catch((e)=>{
		res.status(400).send();
	});
});

app.listen(port, ()=>{
	console.log('Started on port '+port);
});


module.exports = {app};