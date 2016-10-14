document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
     console.log(cordova.file);
    hockeyapp.start(null, null, "521c947791184a6195eedac70af73cb4");
    hockeyapp.checkForUpdate();
}

