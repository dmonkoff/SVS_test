var http = require('http');
var Vector3 = require('./node_modules/vector-3/vector3.js');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
	a = new Vector3(1, 2, 3);
	b = new Vector3(2, 3, 4);
	c = a.add(b);
	console.log('ololo');
	console.log(b);
	console.log(c);
}).listen(8080);