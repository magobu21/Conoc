let trainedNet;

var problema;

var X;

problema=prompt('Escriba su problema:','');
	
document.write('Hola, su problema "');
document.write(problema);
document.write('" sera resuelto.');


function encode(arg){					//funcion para codificar a binario el texto, por limitación de la libreria
	return arg.split("").map(
		x=>(x.charCodeAt(0)/255)
	)
}

function processTrainingData			//procesamiento de la datad e entrada para dejarla en un arreglo
(data){
	return data.map(d=>{
		return{
			input:encode(d.input),
			output:d.output
		}
	})
}

function train(data){							//funcion para realizar el entrenamiento
	let net=new brain.NeuralNetwork();			//define la neurona
	net.train(processTrainingData(data));
	trainedNet=net.toFunction();	
	console.log("Entrenamiento finalizado")
}

function execute(input){						//funcion para realizar el calculo de decision 
	let results=trainedNet(encode(input))
	let output
	results.pc>results.tel ? output="OFIMATICA":output="TELEFONIA"
	return output
}

train(entrenaMesa);								//se ejecuta el entrenamiemto con base en la data

console.log(execute("equipo"));

X = (execute(problema));						//ejecuta el calculo y toma decision

alert(X);										//muestra la decision

document.write('por el grupo de soporte ');
document.write(X);
	
	
	
	