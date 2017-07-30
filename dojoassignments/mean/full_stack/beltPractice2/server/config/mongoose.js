const mongoose = require("mongoose")
const fs = require("fs")
const path = require("path")

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/beltPractice2", {useMongoClient: true}) //change db

const models_path = path.join(__dirname, "./../models")

fs.readdirSync(models_path).forEach(file => {
	if(file.toLowerCase().includes(".js")){
		require(path.join(models_path, file))
	}
})