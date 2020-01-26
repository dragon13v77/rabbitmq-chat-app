var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', router);

router.route('/chat')
	.post(function (req, res) {
		// do something with the chat request

		res.send('{"success": true}')
	});



app.use(express.static('public'));

app.listen(3030, '0.0.0.0',
	function() {
		console.log('Chat at localhost:3030')
	}
);