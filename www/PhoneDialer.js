var CallDialer = {
	dial: function( phnum )	{
		if( device.platform == "iOS" )	{
  	  		cordova.exec( null, null, "PhoneDialer", "dialPhone", [phnum] );
		}	else	{
			document.location = "tel:" + phnum;
		}
	}
}
module.exports = CallDialer;
