function doSomething (callback) {
	setTimeout(function(){
		//did something
		callback('First data')
	}, 1000)
}
