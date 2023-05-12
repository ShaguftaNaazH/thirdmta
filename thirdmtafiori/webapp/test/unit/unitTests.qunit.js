/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/practice/thirdmtafiori/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});