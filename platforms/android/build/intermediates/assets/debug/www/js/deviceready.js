document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log(cordova.file);
    }

function requestPermissionRS(){
    cordova.plugins.diagnostic.requestRuntimePermission(function(status){
        switch(status){
            case cordova.plugins.diagnostic.runtimePermissionStatus.GRANTED:
                console.log("Permission granted (or already granted) - call the plugin");
                // call SQLite plugin
                break;
            case cordova.plugins.diagnostic.runtimePermissionStatus.DENIED:
                console.log("Permission denied - ask again");
                alert("Come on user, we really need this. I'll ask again...");
                requestPermission();
                break;
            case cordova.plugins.diagnostic.runtimePermissionStatus.DENIED_ALWAYS:
                console.log("Permission permanently denied");
                alert("Well that's it, we're dead Jim");
                navigator.app.exitApp();
                break;
        }
    }, function(error){
        console.error("The following error occurred: "+error);
    }, cordova.plugins.diagnostic.runtimePermission.READ_EXTERNAL_STORAGE);
}

function requestPermissionWS(){
    cordova.plugins.diagnostic.requestRuntimePermission(function(status){
        switch(status){
            case cordova.plugins.diagnostic.runtimePermissionStatus.GRANTED:
                console.log("Permission granted (or already granted) - call the plugin");
                // call SQLite plugin
                break;
            case cordova.plugins.diagnostic.runtimePermissionStatus.DENIED:
                console.log("Permission denied - ask again");
                alert("Come on user, we really need this. I'll ask again...");
                requestPermission();
                break;
            case cordova.plugins.diagnostic.runtimePermissionStatus.DENIED_ALWAYS:
                console.log("Permission permanently denied");
                alert("Well that's it, we're dead Jim");
                navigator.app.exitApp();
                break;
        }
    }, function(error){
        console.error("The following error occurred: "+error);
    }, cordova.plugins.diagnostic.runtimePermission.WRITE_EXTERNAL_STORAGE);
}


