const mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const questionSchema = new Schema({
	value: Number,
	question: String,
	answer: String
});

const categorySchema = new Schema({
	name: String,
	questions: [questionSchema],
});

const gameSchema = new Schema({
	user: String,
	points: [Boolean],
	categories: [categorySchema],
});

const Question = mongoose.model("Question", questionSchema);
const Category = mongoose.model("Category", categorySchema);
const Game = mongoose.model("Game", gameSchema);

module.exports = {
	Question, Category, Game
};