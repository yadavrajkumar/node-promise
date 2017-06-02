/*function service(){

	return "i am callback"
}

var array = [1,2,3];
 var obj ={

 	name: "scott",
 	city:"boston"
 }

function sample(name){


	console.log(name)
	console.log(name)
	console.log(name)
	console.log(name)
}

sample(service);*/

//var Promise = require('promise')
function getData(val,err){

	return new Promise(function(resolve,reject){

		if(err){

        reject(err)
		}

		 resolve(val)
	})
	
}




getData("uma","i am error").
       then(function(data){
	        console.log(data)


})
  .catch(function(err){


  	console.log('This is error block')
  	 console.log(err)
  })

