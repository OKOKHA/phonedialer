phonedialer
===========

Encke Technologies PhoneGap Phone Dialer

Information
--------------------------------------------------
This plugin was developed using a simple method of dialing phones, it will use the document.location = "tel" + phnum when the OS is not iOS, so the same function can work cross platform (as cordova was intended).

How to use
--------------------------------------------------
To add the plugin:
	cordova plugin add https://github.com/encke/phonedialer.git
	** must be ran in the root directory of your cordova project.

To use:
	PhoneDialer.dial( '+12125551212' );
	** ONLY NUMBERS AND + sign
