var mongoose = require('mongoose');
var TaskSchema = new mongoose.Schema({
	task_name: String,
	priority: String,
	deadline: {type: Date},
	date_created: {
		type: Date,
		default: Date.now
	},
	hidden: Boolean
});
TaskSchema.path('task_name').required(true, 'Task name cannot be blank');
TaskSchema.path('priority').required(true, 'Priority must be selected');
TaskSchema.path('deadline').required(true, 'Deadline cannot be blank');
mongoose.model('Task', TaskSchema);