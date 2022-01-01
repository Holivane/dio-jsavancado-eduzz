//Promises
const doSomethingPromise = new Promise((resolve, reject) => {
	setTimeout(function () {
		//did something
		resolve('First data')
	}, 1000)
})

const doOtherThingPromise = new Promise((resolve, reject) => {
	setTimeout(function () {
		//did something
		resolve('Second data')
	}, 1000)
})

console.log(doOtherThingPromise)

doSomethingPromise.then(data => console.log(data)).catch(error => console.log(error))

//'then': executa a promise E 'catch': trata possível erro

/* 
Outra estrutura possível:
doSomethingPromise
	.then(data => console.log(data))
	.catch(error => console.log(error))
/* 


Estágios de uma promise:
Pendin - Pendente 
Fulfilled - Terminou de executar
Rejected - Erro
*/


doSomethingPromise  //Encadeamento de promises
	.then(data => doOtherThingPromise)
	.then(data2 => console.log(data2))
	.catch()

//Callback

function doSomething(callback) {
	setTimeout(function () {
		//did something
		callback('First data')
	}, 1000)
}

function doOtherThing(callback) {
	setTimeout(function () {
		//did other thing
		callback('Second data')
	}, 1000)
}


function doAll() {
	try {
		doSomething(function (data) {
			var processedData = data.split('');

			try {
				doOtherThing(function (data2) {
					var processedData2 = data2.split('');

					try {
						setTimeout(function () {
							console.log(processedData, processedData2)
						}, 1000)
					} catch (err) {
						//handle erro
					}
				})
			} catch (err) {
				//handle erro
			}
		})
	} catch (err) {
		//handle error
	}
}

doAll()