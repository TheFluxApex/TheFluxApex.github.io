function openUrl(url, method) {
	"use strict";
	return window.open(url, method);
}

function webGo(num) {
	"use strict";
	if (num === undefined) {
		num = -1;
	} else if (!isInt(num)) {
		return false;
	}
	window.history.go(num);
	return false;
}

function isInt(n) {
	"use strict";
	return !isNaN(n);
}
