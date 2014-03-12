document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady(){
	window.requestAnimationFrame(function () {
		new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
	});
}