var watchID = null;

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady(){
	startWatch();
	navigator.notification.vibrate(500);
	window.requestAnimationFrame(function () {
		new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
	});
}
function startWatch() {
	var options = { frequency: 100 };
	watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}
function stopWatch() {
	if (watchID) {
		navigator.accelerometer.clearWatch(watchID);
		watchID = null;
	}
}
function onSuccess(acceleration) {
	var element = document.getElementById('accelerometer');
	element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                            'Acceleration Y: ' + acceleration.y + '<br />' +
                            'Acceleration Z: ' + acceleration.z + '<br />' +
                            'Timestamp: '      + acceleration.timestamp + '<br />';
}
function onError() {
	alert('onError!');
}
