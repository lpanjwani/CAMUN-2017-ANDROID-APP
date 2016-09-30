document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log(cordova.file);
    document.getElementById("downloadFile").addEventListener("click", downloadFile);
    document.getElementById("downloadFile2").addEventListener("click", downloadFile2);
    document.getElementById("downloadFile3").addEventListener("click", downloadFile3);
    document.getElementById("downloadFile4").addEventListener("click", downloadFile4);
}

function downloadFile() {

   var fileTransfer = new FileTransfer();
   var uri = encodeURI("https://drive.google.com/uc?export=download&id=0B7aGtoVDrZVjVzZLenRxcHpMZ3c");
   var fileURL =  "///storage/emulated/0/CAMUN/UNSC.pdf";

   fileTransfer.download(
      uri, fileURL
   )
}

function downloadFile2() {

   var fileTransfer = new FileTransfer();
   var uri = encodeURI("https://drive.google.com/uc?export=download&id=0B7aGtoVDrZVjX2JhQUZpWERBMjA");
   var fileURL =  "///storage/emulated/0/CAMUN/HSC.pdf";

   fileTransfer.download(
      uri, fileURL
   )
}

function downloadFile3() {

   var fileTransfer = new FileTransfer();
   var uri = encodeURI("https://drive.google.com/uc?export=download&id=0B7aGtoVDrZVjMldJbVdKRHdJa00");
   var fileURL =  "///storage/emulated/0/CAMUN/SPECPOL.pdf";

   fileTransfer.download(
      uri, fileURL
   )
}

function downloadFile4() {

   var fileTransfer = new FileTransfer();
   var uri = encodeURI("https://drive.google.com/uc?export=download&id=0B7aGtoVDrZVjc21YWThwMjlKdFk");
   var fileURL =  "///storage/emulated/0/CAMUN/UNODC.pdf";

   fileTransfer.download(
      uri, fileURL
   )
}

function requestPermission(){
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

requestPermission();