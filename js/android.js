navigator.notification.vibrate(500);


function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
	navigator.notification.vibrate(500);
};

function onError() {
    alert('onError!');
};

var options = { frequency: 100 };  // Update every 3 seconds

var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
