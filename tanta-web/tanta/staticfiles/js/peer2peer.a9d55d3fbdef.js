// Root module
var p2p = (function () {
	var initModule = function ($container) {
		peer2peer.shell.initModule($container);
	};
	return { initModule: initModule};
}());