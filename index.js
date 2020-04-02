var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render("landing"));
app.get('/campgrounds', function(req, res) {
	var data = [
		{
			name : "Picnic - 1", image: "https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		},
		{
			name : "Picnic - 2", image: "https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		},
		{
			name : "Picnic - 3", image: "https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
			
		}
	];
	res.render("landing");
}) 

app.listen(3000, function(){
	console.log("YELP STARTED");
})