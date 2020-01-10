var barcodes = [];
var times = [];
var scannedBarcodes = new Set([]);
var targetPlayers = -1;

const maxPlayersPerTeam = 4;


function startScanner() {
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector('#scanner-container'),
        },
        decoder: {
            readers: [
                "code_128_reader"
            ],
            debug: {
                showCanvas: true,
                showPatches: true,
                showFoundPatches: true,
                showSkeleton: true,
                showLabels: true,
                showPatchLabels: true,
                showRemainingPatchLabels: true,
                boxFromPatches: {
                    showTransformed: true,
                    showTransformedBox: true,
                    showBB: true
                }
            }
        },

    }, function (err) {
        if (err) {
            console.log(err);
            return
        }

        console.log("Initialization finished. Ready to start");
        Quagga.start();

        // Set flag to is running
        _scannerIsRunning = true;
    });

    Quagga.onProcessed(function (result) {
        var drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay;

        if (result) {
            if (result.boxes) {
                drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                result.boxes.filter(function (box) {
                    return box !== result.box;
                }).forEach(function (box) {
                    Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
                });
            }

            if (result.box) {
                Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
            }

            if (result.codeResult && result.codeResult.code) {
                Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
            }
        }
    });

    Quagga.onDetected(function (result) {
        var id = result.codeResult.code;
    
        console.log("Barcode detected and processed : [" + id + "]", result);
        if (id > 900000 && id < 1000000){ // Assuming that id is 6 digits long & starts w 9
            if (!barcodes.includes(id)){ // if not in, include & pop oldest
                barcodes.push(id);
                times.push((new Date()).getTime());
                if (barcodes.length > maxPlayersPerTeam){
                    barcodes.shift();
                    times.shift();
                }
                onListChange();
            }
            else { // if in, put on top of queue
                var idIndex = barcodes.indexOf(id)
                barcodes.splice(idIndex, 1);
                barcodes.push(id);

                times.splice(idIndex, 1);
                times.push((new Date()).getTime());
            }
        }
    });

    const depopulateInterval = setInterval(function(){
        if ((new Date()).getTime() - times[times.length - 1] > 1000) {// Older than 1 second
            times.shift();
            barcodes.shift();
            onListChange();
        }
    }, 100);

}

function getBarcodesInScene(){
    return barcodes;
}

function getScannedBarcodes(){
    return scannedBarcodes;
}

function clearScannedBarcodes(){
    scannedBarcodes.clear();
}

function setTargetPlayersInScene(x){
    targetPlayers = x;
}

// runs when barcodes list changes
function onListChange(){
    codesToDisplay = "";
    barcodes.forEach(element => codesToDisplay += "<li>" + element + "</li>");
    document.querySelector("#codes-in-scene").innerHTML=codesToDisplay;

    if (barcodes.length == targetPlayers){
        onTargetPlayers();
    }
}

// runs when barcodes in scene == target players
// use the list barcodes to get the barcodes in the scene
function onTargetPlayers(){
    console.log("Target players reached, stopping.");
    Quagga.inputStream.f

    Quagga.stop();
}

setTargetPlayersInScene(2);
