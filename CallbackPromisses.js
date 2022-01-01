function doSomething (callback) {
	setTimeout(function(){
		//did something
		callback('First data')
	}, 1000)
}

function doOtherThing (callback) {
	setTimeout(function(){
		//did other thing
		callback('Second data')
	}, 1000)
}
