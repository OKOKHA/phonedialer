phonedialer
===========

Encke Technologies PhoneGap Phone Dialer

Background
--------------------------------------------------

This plugin developed after needing this functionallity for many apps and having no central way to update every app without re-writing the plugin for every app. This code is no secret and please use it if it suites you. I provide no support or guarantees to this code.

This supports the current version of Cordova (3.3.0) and may support versions until 3.0.

If you have any changes, please advise.

Information
--------------------------------------------------
This plugin was developed using a simple method of dialing phones, it will use:

document.location = "tel" + phnum

when the OS is not iOS, so the same function can work cross platform (as cordova was intended).

How to use
--------------------------------------------------
To add the plugin:

	cordova plugin add https://github.com/encke/phonedialer.git
	
	** must be ran in the root directory of your cordova project.

To use:

	PhoneDialer.dial( '+12125551212' );
	
	** ONLY NUMBERS AND + sign
