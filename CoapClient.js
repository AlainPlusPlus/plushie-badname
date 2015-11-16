// CoapClient

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf8');

module.exports.command = function(){
	var Coap = require('./Coap');
	var params = {
		method: 'put',
		pathname: 'leds',
		confirmable: true
	};

	//Getting RGB values from user here using string format= "nnn nnn nnn" nnn=000->255 
  	var util = require('util');
	process.stdin.on('data', function (text) {	
    var request = Coap.createRequest(params,formatStringRGB(text));
	request.send();
  	});

  	function formatStringRGB(str) {
		var red = str.slice(0, 3);
	    var green = str.slice(4, 7);
	    var blue = str.slice(8, 11);
	    return "r="+red+'&'+"g="+green+'&'+"b="+blue;
	}
}
