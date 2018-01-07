const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc123!';

bcrypt.genSalt(10, (err, salt)=>{
	bcrypt.hash(password, salt, (err, hash)=>{
		console.log(hash);
	});
});

var hashedPassword = '$2a$10$RK2r9waS90S0h4XTLxZW1e.JPrij9le9lUnDcPwI4II1pLCTP1b36';

bcrypt.compare(password, hashedPassword, (err, res)=>{
	console.log(res);
});


// var data = {
// 	id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log(decoded);

// var message = 'I am user number 45';
// var hash = SHA256(message).toString();
// console.log(message+"\n"+hash);

// var data = {
// 	id: 4
// };

// var token = {
// 	data: data,
// 	hash: SHA256(JSON.stringify(data)+'somedata').toString()
// };


// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data)+'somedata').toString();
// if (resultHash===token.hash){
// 	console.log('Data was not changed');
// } else {
// 	console.log('Data was changed, not trust!!!!');
// }