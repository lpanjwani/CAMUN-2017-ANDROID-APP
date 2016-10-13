function downloadUNSC() {

   var fileTransfer = new FileTransfer();
   var uri = encodeURI("https://drive.google.com/uc?export=download&id=0B7aGtoVDrZVjVzZLenRxcHpMZ3c");
   var fileURL =  "/storage/emulated/0/CAMUN/UNSC.pdf";

  fileTransfer.download(
      uri, fileURL
   )
}

function downloadHSC() {

   var fileTransfer = new FileTransfer();
   var uri = encodeURI("https://drive.google.com/uc?export=download&id=0B7aGtoVDrZVjX2JhQUZpWERBMjA");
   var fileURL =  "/storage/emulated/0/CAMUN/HSC.pdf";

   fileTransfer.download(
      uri, fileURL
   )
}

function downloadSPECPOL() {

   var fileTransfer = new FileTransfer();
   var uri = encodeURI("https://drive.google.com/uc?export=download&id=0B7aGtoVDrZVjMldJbVdKRHdJa00");
   var fileURL =  "/storage/emulated/0/CAMUN/SPECPOL.pdf";

   fileTransfer.download(
      uri, fileURL
   )
}

function downloadUNODC() {

   var fileTransfer = new FileTransfer();
   var uri = encodeURI("https://drive.google.com/uc?export=download&id=0B7aGtoVDrZVjc21YWThwMjlKdFk");
   var fileURL =  "/storage/emulated/0/CAMUN/UNODC.pdf";

   fileTransfer.download(
      uri, fileURL
   )
}

function downloadECOSOC() {

   var fileTransfer = new FileTransfer();
   var uri = encodeURI("https://drive.google.com/uc?export=download&id=ID_HERE");
   var fileURL =  "/storage/emulated/0/CAMUN/ECOSOC.pdf";

   fileTransfer.download(
      uri, fileURL
   )
}

function downloadUNSDG() {

   var fileTransfer = new FileTransfer();
   var uri = encodeURI("https://drive.google.com/uc?export=download&id=ID_HERE");
   var fileURL =  "/storage/emulated/0/CAMUN/UNSDG.pdf";

   fileTransfer.download(
      uri, fileURL
   )
}