const mongoose = require("mongoose")
const fs = require("fs")
const path = require("path")

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/belt_exam_trivia_1", {useMongoClient: true}) //change db

const models_path = path.join(__dirname, "./../models")

fs.readdirSync(models_path).forEach(file => {
	if(file.toLowerCase().includes(".js")){
		require(path.join(models_path, file))
	}
})