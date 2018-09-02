const fs = require("fs");


function readJSON(path,callback){
	fs.readFile(path,'utf-8',(err,data)=>{
		if(err){
			callback(false,err)
			return 
		}
		callback(true,data)
	})
}

module.exports = readJSON