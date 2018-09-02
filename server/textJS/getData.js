const readJSON = require("../testData/readJSON");

console.log(readJSON)

readJSON('../testData/users.json',(status,data)=>{
	if(status){
		console.log('get data',data)
	}else{
		console.log('error log',data)
	}
})