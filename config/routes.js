var mongoose = require('mongoose'),
	Task = mongoose.model('Task');

module.exports = function Routes(app) {
	app.get('/', function(req, res) {
		Task.find(function(err, task_array) {
			if(err) {
				console.log(err);
			} else {
				res.render('index', {title: 'Task Management', tasks: task_array});
			}
		});		
	});
	app.post('/tasks', function(req, res) {
		console.log(req.body);
		var new_task = new Task(req.body);
		new_task.save(function(err) {
			if(err) {
				res.send(JSON.stringify(err));
			} else {
				res.send('saved');
			}
		});
	});
	app.get('/tasks/:id', function(req, res) {
		console.log(req.params.id);
		Task.remove({_id: req.params.id}, function(err) {
			if(err) {
				res.send(JSON.stringify(err));
			} else {
				res.send('deleted');
			}
		})
	})
};