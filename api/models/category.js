const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	userID: String,
	name: String,
	date: String,
	count: String	
},
{
    timestamps: true
})

module.exports = mongoose.model('Category', categorySchema);