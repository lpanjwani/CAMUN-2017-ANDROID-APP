document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
     console.log(cordova.file);
    document.getElementById("downloadUNSC").addEventListener("click", downloadUNSC);
    document.getElementById("downloadHSC").addEventListener("click", downloadHSC);
    document.getElementById("downloadSPECPOL").addEventListener("click", downloadSPECPOL);
    document.getElementById("downloadUNODC").addEventListener("click", downloadUNODC);
    document.getElementById("downloadECOSOC").addEventListener("click", downloadECOSOC);
    document.getElementById("downloadUNSDG").addEventListener("click", downloadUNSDG);
}



