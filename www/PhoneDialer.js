
	var exec = require('cordova/exec');
	
	var phonedialer = function( phnum )	{
		if( device.platform == "iOS" )	{
  	  		exec( null, null, "PhoneDialer", "dialPhone", [phnum] );
		}	else	{
			document.location = "tel:" + phnum;
		}
	};
	
	module.exports = phonedialer;
