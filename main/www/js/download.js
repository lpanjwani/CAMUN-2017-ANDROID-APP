function downloadUNSC() {

   var fileTransfer = new FileTransfer();
   var uri = encodeURI("https://drive.google.com/uc?export=download&id=0B7aGtoVDrZVjVzZLenRxcHpMZ3c");
   var fileURL = cordova.file.externalRootDirectory + "CAMUN/UNSC.pdf";

  fileTransfer.download(
      uri, fileURL
   )
}

function downloadHSC() {

   var fileTransfer = new FileTransfer();
   var uri = encodeURI("https://drive.google.com/uc?export=download&id=0B7aGtoVDrZVjX2JhQUZpWERBMjA");
   var fileURL = cordova.file.externalRootDirectory + "CAMUN/HSC.pdf";

   fileTransfer.download(
      uri, fileURL
   )
}

function downloadSPECPOL() {

   var fileTransfer = new FileTransfer();
   var uri = encodeURI("https://drive.google.com/uc?export=download&id=0B7aGtoVDrZVjMldJbVdKRHdJa00");
   var fileURL = cordova.file.externalRootDirectory + "CAMUN/SPECPOL.pdf";

   fileTransfer.download(
      uri, fileURL
   )
}

function downloadUNODC() {

   var fileTransfer = new FileTransfer();
   var uri = encodeURI("https://drive.google.com/uc?export=download&id=0B7aGtoVDrZVjc21YWThwMjlKdFk");
   var fileURL = cordova.file.externalRootDirectory + "CAMUN/UNODC.pdf";

   fileTransfer.download(
      uri, fileURL
   )
}

function downloadECOSOC() {

   var fileTransfer = new FileTransfer();
   var uri = encodeURI("https://drive.google.com/uc?export=download&id=ID_HERE");
   var fileURL = cordova.file.externalRootDirectory + "CAMUN/ECOSOC.pdf";

   fileTransfer.download(
      uri, fileURL
   )
}

function downloadUNSDG() {

   var fileTransfer = new FileTransfer();
   var uri = encodeURI("https://drive.google.com/uc?export=download&id=0B7aGtoVDrZVjc3BSR29WcG53ZkE");
   var fileURL = cordova.file.externalRootDirectory + "CAMUN/UNSDG.pdf";

   fileTransfer.download(
      uri, fileURL
   )
}