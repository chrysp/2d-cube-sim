var textareaElement;
var canvasElement;
var context;
var zoom = 1;
var centerStickers=["white","red","green","orange","blue","yellow"];
var stickers=["white","orange","blue","white","blue","white","blue","red","white","red",
"white","red","green","white","green","white","green","orange","white","orange",
"orange","blue","blue","red","red","green","green","orange","yellow","blue",
"orange","blue","yellow","yellow","red","blue","red","yellow","yellow","green",
"red","green","yellow","yellow","orange","green","orange","yellow"];
var availableMoves = ["U","Ui","R","Ri","D","Di","L","Li","F","Fi","B","Bi","M","Mi","E","Ei","S","Si"];
var globalCubeAlgorithm;
var globalCounter = 0;

function init() {
	textareaElement = document.getElementById("textareaElement");
	canvasElement = document.getElementById("canvasElement");
	context = canvasElement.getContext("2d");
	drawCube();
	writeLog("cube initialized");
}

function writeLog(logText) {
	textareaElement.value = logText + "\n" + textareaElement.value;
}

function generateScrambleCubeAlgorithm(scrambleLength) {
	var output = [];
	for(var i = 0; i < scrambleLength; i++) {
		output.push(availableMoves[Math.floor(Math.random() * 18)]);
	}
	writeLog("scramble: " + output.toString().replace(/i/g, "'").replace(/,/g, " "));
	globalCubeAlgorithm = output;
	return output;
}

function performCubeAlgorithm(cubeAlgorithm) {
	for(var i = 0; i < cubeAlgorithm.length; i++) {
		switch(cubeAlgorithm[i]) {
			case "U":
				U();
				break;
			case "Ui":
				Ui();
				break;
			case "R":
				R();
				break;
			case "Ri":
				Ri();
				break;
			case "D":
				D();
				break;
			case "Di":
				Di();
				break;
			case "L":
				L();
				break;
			case "Li":
				Li();
				break;
			case "F":
				F();
				break;
			case "Fi":
				Fi();
				break;
			case "B":
				B();
				break;
			case "Bi":
				Bi();
				break;
			case "M":
				M();
				break;
			case "Mi":
				Mi();
				break;
			case "E":
				E();
				break;
			case "Ei":
				Ei();
				break;
			case "S":
				S();
				break;
			case "Si":
				Si();
				break;
			default:
				break;
		}
	}
}

function performAndAnimateCubeAlgorithm() {
	switch(globalCubeAlgorithm[globalCounter]) {
			case "U":
				U();
				break;
			case "Ui":
				Ui();
				break;
			case "R":
				R();
				break;
			case "Ri":
				Ri();
				break;
			case "D":
				D();
				break;
			case "Di":
				Di();
				break;
			case "L":
				L();
				break;
			case "Li":
				Li();
				break;
			case "F":
				F();
				break;
			case "Fi":
				Fi();
				break;
			case "B":
				B();
				break;
			case "Bi":
				Bi();
				break;
			case "M":
				M();
				break;
			case "Mi":
				Mi();
				break;
			case "E":
				E();
				break;
			case "Ei":
				Ei();
				break;
			case "S":
				S();
				break;
			case "Si":
				Si();
				break;
			default:
				break;
		}

		globalCounter++;
		if(globalCounter <= globalCubeAlgorithm.length){
			window.requestAnimationFrame(performAndAnimateCubeAlgorithm);
		} else {
			globalCounter = 0;
		}
}

function keys(keyCode) {
		if (keyCode == 66) Ei();
		if (keyCode == 67) Si();
		if (keyCode == 68) L();
		if (keyCode == 69) Li();
		if (keyCode == 70) Ui();
		if (keyCode == 71) Fi();
		if (keyCode == 72) F();
		if (keyCode == 73) R();
		if (keyCode == 74) U();
		if (keyCode == 75) Ri();
		if (keyCode == 76) Di();
		if (keyCode == 77) Mi();
		if (keyCode == 78) M();
		if (keyCode == 79) Bi();
		if (keyCode == 83) D();
		if (keyCode == 86) E();
		if (keyCode == 87) B();
		if (keyCode == 88) S();
		if (keyCode == 49) resetAndScramble();
		if (keyCode == 50) resetCube();
		if (keyCode == 51) zoomOut();
		if (keyCode == 52) zoomIn();
}

function zoomIn() {
	if(zoom <= 0.9) zoom += 0.1; else zoom = 0.1;
	drawCube();
}

function zoomOut() {
	if(zoom >= 0.2) zoom -= 0.1; else zoom = 1;
	drawCube();
}

function resetCube() {
	centerStickers=["white","red","green","orange","blue","yellow"];
	stickers=["white","orange","blue","white","blue","white","blue","red","white","red",
		"white","red","green","white","green","white","green","orange","white","orange",
		"orange","blue","blue","red","red","green","green","orange","yellow","blue",
		"orange","blue","yellow","yellow","red","blue","red","yellow","yellow","green",
		"red","green","yellow","yellow","orange","green","orange","yellow"];
	drawCube();
	writeLog("cube reset");
}

function resetAndScramble() {
    resetCube();
    performAndAnimateCubeAlgorithm(generateScrambleCubeAlgorithm(20));
}

function drawCube() {
	context.clearRect(0, 0, canvasElement.width, canvasElement.height);
	context.fillStyle = "#d8d9d9"; //"#f8f9fa"; //"#abb4bc";
	context.fillRect(0, 0, canvasElement.width, canvasElement.height);
	var stickerSize = 40*zoom;
	var spacingSize = stickerSize*0.15;
	var startX = (spacingSize*4)+(stickerSize*3);
	var startY = spacingSize;
	//back
	context.fillStyle = stickers[29];
	context.fillRect(startX + (spacingSize * 0) + (stickerSize * 0), startY + (spacingSize * 0) + (stickerSize * 0), stickerSize, stickerSize);
	context.fillStyle = stickers[31];
	context.fillRect(startX + (spacingSize * 1) + (stickerSize * 1), startY + (spacingSize * 0) + (stickerSize * 0), stickerSize, stickerSize);
	context.fillStyle = stickers[35];
	context.fillRect(startX + (spacingSize * 2) + (stickerSize * 2), startY + (spacingSize * 0) + (stickerSize * 0), stickerSize, stickerSize);
	context.fillStyle = stickers[21];
	context.fillRect(startX + (spacingSize * 0) + (stickerSize * 0), startY + (spacingSize * 1) + (stickerSize * 1), stickerSize, stickerSize);
	context.fillStyle = centerStickers[4];
	context.fillRect(startX + (spacingSize * 1) + (stickerSize * 1), startY + (spacingSize * 1) + (stickerSize * 1), stickerSize, stickerSize);
	context.fillStyle = stickers[22];
	context.fillRect(startX + (spacingSize * 2) + (stickerSize * 2), startY + (spacingSize * 1) + (stickerSize * 1), stickerSize, stickerSize);
	context.fillStyle = stickers[2];
	context.fillRect(startX + (spacingSize * 0) + (stickerSize * 0), startY + (spacingSize * 2) + (stickerSize * 2), stickerSize, stickerSize);
	context.fillStyle = stickers[4];
	context.fillRect(startX + (spacingSize * 1) + (stickerSize * 1), startY + (spacingSize * 2) + (stickerSize * 2), stickerSize, stickerSize);
	context.fillStyle = stickers[6];
	context.fillRect(startX + (spacingSize * 2) + (stickerSize * 2), startY + (spacingSize * 2) + (stickerSize * 2), stickerSize, stickerSize);
	//top
	context.fillStyle = stickers[0];
	context.fillRect(startX + (spacingSize * 0) + (stickerSize * 0), startY + (spacingSize * 3) + (stickerSize * 3), stickerSize, stickerSize);
	context.fillStyle = stickers[3];
	context.fillRect(startX + (spacingSize * 1) + (stickerSize * 1), startY + (spacingSize * 3) + (stickerSize * 3), stickerSize, stickerSize);
	context.fillStyle = stickers[5];
	context.fillRect(startX + (spacingSize * 2) + (stickerSize * 2), startY + (spacingSize * 3) + (stickerSize * 3), stickerSize, stickerSize);
	context.fillStyle = stickers[18];
	context.fillRect(startX + (spacingSize * 0) + (stickerSize * 0), startY + (spacingSize * 4) + (stickerSize * 4), stickerSize, stickerSize);
	context.fillStyle = centerStickers[0];
	context.fillRect(startX + (spacingSize * 1) + (stickerSize * 1), startY + (spacingSize * 4) + (stickerSize * 4), stickerSize, stickerSize);
	context.fillStyle = stickers[8];
	context.fillRect(startX + (spacingSize * 2) + (stickerSize * 2), startY + (spacingSize * 4) + (stickerSize * 4), stickerSize, stickerSize);
	context.fillStyle = stickers[15];
	context.fillRect(startX + (spacingSize * 0) + (stickerSize * 0), startY + (spacingSize * 5) + (stickerSize * 5), stickerSize, stickerSize);
	context.fillStyle = stickers[13];
	context.fillRect(startX + (spacingSize * 1) + (stickerSize * 1), startY + (spacingSize * 5) + (stickerSize * 5), stickerSize, stickerSize);
	context.fillStyle = stickers[10];
	context.fillRect(startX + (spacingSize * 2) + (stickerSize * 2), startY + (spacingSize * 5) + (stickerSize * 5), stickerSize, stickerSize);
	//front
	context.fillStyle = stickers[16];
	context.fillRect(startX + (spacingSize * 0) + (stickerSize * 0), startY + (spacingSize * 6) + (stickerSize * 6), stickerSize, stickerSize);
	context.fillStyle = stickers[14];
	context.fillRect(startX + (spacingSize * 1) + (stickerSize * 1), startY + (spacingSize * 6) + (stickerSize * 6), stickerSize, stickerSize);
	context.fillStyle = stickers[12];
	context.fillRect(startX + (spacingSize * 2) + (stickerSize * 2), startY + (spacingSize * 6) + (stickerSize * 6), stickerSize, stickerSize);
	context.fillStyle = stickers[26];
	context.fillRect(startX + (spacingSize * 0) + (stickerSize * 0), startY + (spacingSize * 7) + (stickerSize * 7), stickerSize, stickerSize);
	context.fillStyle = centerStickers[2];
	context.fillRect(startX + (spacingSize * 1) + (stickerSize * 1), startY + (spacingSize * 7) + (stickerSize * 7), stickerSize, stickerSize);
	context.fillStyle = stickers[25];
	context.fillRect(startX + (spacingSize * 2) + (stickerSize * 2), startY + (spacingSize * 7) + (stickerSize * 7), stickerSize, stickerSize);
	context.fillStyle = stickers[45];
	context.fillRect(startX + (spacingSize * 0) + (stickerSize * 0), startY + (spacingSize * 8) + (stickerSize * 8), stickerSize, stickerSize);
	context.fillStyle = stickers[41];
	context.fillRect(startX + (spacingSize * 1) + (stickerSize * 1), startY + (spacingSize * 8) + (stickerSize * 8), stickerSize, stickerSize);
	context.fillStyle = stickers[39];
	context.fillRect(startX + (spacingSize * 2) + (stickerSize * 2), startY + (spacingSize * 8) + (stickerSize * 8), stickerSize, stickerSize);
	//bottom
	context.fillStyle = stickers[43];
	context.fillRect(startX + (spacingSize * 0) + (stickerSize * 0), startY + (spacingSize * 9) + (stickerSize * 9), stickerSize, stickerSize);
	context.fillStyle = stickers[42];
	context.fillRect(startX + (spacingSize * 1) + (stickerSize * 1), startY + (spacingSize * 9) + (stickerSize * 9), stickerSize, stickerSize);
	context.fillStyle = stickers[38];
	context.fillRect(startX + (spacingSize * 2) + (stickerSize * 2), startY + (spacingSize * 9) + (stickerSize * 9), stickerSize, stickerSize);
	context.fillStyle = stickers[47];
	context.fillRect(startX + (spacingSize * 0) + (stickerSize * 0), startY + (spacingSize * 10) + (stickerSize * 10), stickerSize, stickerSize);
	context.fillStyle = centerStickers[5];
	context.fillRect(startX + (spacingSize * 1) + (stickerSize * 1), startY + (spacingSize * 10) + (stickerSize * 10), stickerSize, stickerSize);
	context.fillStyle = stickers[37];
	context.fillRect(startX + (spacingSize * 2) + (stickerSize * 2), startY + (spacingSize * 10) + (stickerSize * 10), stickerSize, stickerSize);
	context.fillStyle = stickers[28];
	context.fillRect(startX + (spacingSize * 0) + (stickerSize * 0), startY + (spacingSize * 11) + (stickerSize * 11), stickerSize, stickerSize);
	context.fillStyle = stickers[32];
	context.fillRect(startX + (spacingSize * 1) + (stickerSize * 1), startY + (spacingSize * 11) + (stickerSize * 11), stickerSize, stickerSize);
	context.fillStyle = stickers[33];
	context.fillRect(startX + (spacingSize * 2) + (stickerSize * 2), startY + (spacingSize * 11) + (stickerSize * 11), stickerSize, stickerSize);
	//left
	context.fillStyle = stickers[30];
	context.fillRect(startX + (spacingSize * -3) + (stickerSize * -3), startY + (spacingSize * 3) + (stickerSize * 3), stickerSize, stickerSize);
	context.fillStyle = stickers[20];
	context.fillRect(startX + (spacingSize * -2) + (stickerSize * -2), startY + (spacingSize * 3) + (stickerSize * 3), stickerSize, stickerSize);
	context.fillStyle = stickers[1];
	context.fillRect(startX + (spacingSize * -1) + (stickerSize * -1), startY + (spacingSize * 3) + (stickerSize * 3), stickerSize, stickerSize);
	context.fillStyle = stickers[46];
	context.fillRect(startX + (spacingSize * -3) + (stickerSize * -3), startY + (spacingSize * 4) + (stickerSize * 4), stickerSize, stickerSize);
	context.fillStyle = centerStickers[3];
	context.fillRect(startX + (spacingSize * -2) + (stickerSize * -2), startY + (spacingSize * 4) + (stickerSize * 4), stickerSize, stickerSize);
	context.fillStyle = stickers[19];
	context.fillRect(startX + (spacingSize * -1) + (stickerSize * -1), startY + (spacingSize * 4) + (stickerSize * 4), stickerSize, stickerSize);
	context.fillStyle = stickers[44];
	context.fillRect(startX + (spacingSize * -3) + (stickerSize * -3), startY + (spacingSize * 5) + (stickerSize * 5), stickerSize, stickerSize);
	context.fillStyle = stickers[27]
	context.fillRect(startX + (spacingSize * -2) + (stickerSize * -2), startY + (spacingSize * 5) + (stickerSize * 5), stickerSize, stickerSize);
	context.fillStyle = stickers[17];
	context.fillRect(startX + (spacingSize * -1) + (stickerSize * -1), startY + (spacingSize * 5) + (stickerSize * 5), stickerSize, stickerSize);
	//right
	context.fillStyle = stickers[7];
	context.fillRect(startX + (spacingSize * 3) + (stickerSize * 3), startY + (spacingSize * 3) + (stickerSize * 3), stickerSize, stickerSize);
	context.fillStyle = stickers[23];
	context.fillRect(startX + (spacingSize * 4) + (stickerSize * 4), startY + (spacingSize * 3) + (stickerSize * 3), stickerSize, stickerSize);
	context.fillStyle = stickers[34];
	context.fillRect(startX + (spacingSize * 5) + (stickerSize * 5), startY + (spacingSize * 3) + (stickerSize * 3), stickerSize, stickerSize);
	context.fillStyle = stickers[9];
	context.fillRect(startX + (spacingSize * 3) + (stickerSize * 3), startY + (spacingSize * 4) + (stickerSize * 4), stickerSize, stickerSize);
	context.fillStyle = centerStickers[1];
	context.fillRect(startX + (spacingSize * 4) + (stickerSize * 4), startY + (spacingSize * 4) + (stickerSize * 4), stickerSize, stickerSize);
	context.fillStyle = stickers[36];
	context.fillRect(startX + (spacingSize * 5) + (stickerSize * 5), startY + (spacingSize * 4) + (stickerSize * 4), stickerSize, stickerSize);
	context.fillStyle = stickers[11];
	context.fillRect(startX + (spacingSize * 3) + (stickerSize * 3), startY + (spacingSize * 5) + (stickerSize * 5), stickerSize, stickerSize);
	context.fillStyle = stickers[24];
	context.fillRect(startX + (spacingSize * 4) + (stickerSize * 4), startY + (spacingSize * 5) + (stickerSize * 5), stickerSize, stickerSize);
	context.fillStyle = stickers[40];
	context.fillRect(startX + (spacingSize * 5) + (stickerSize * 5), startY + (spacingSize * 5) + (stickerSize * 5), stickerSize, stickerSize);
}

function U() {
		var temp = stickers[0];
		stickers[0] = stickers[15];
		stickers[15] = stickers[10];
		stickers[10] = stickers[5];
		stickers[5] = temp;		

		temp = stickers[1];
		stickers[1] = stickers[16];
		stickers[16] = stickers[11];
		stickers[11] = stickers[6];
		stickers[6] = temp;

		temp = stickers[2];
		stickers[2] = stickers[17];
		stickers[17] = stickers[12];
		stickers[12] = stickers[7];
		stickers[7] = temp;

		temp = stickers[3];
		stickers[3] = stickers[18];
		stickers[18] = stickers[13];
		stickers[13] = stickers[8];
		stickers[8] = temp;

		temp = stickers[4];
		stickers[4] = stickers[19];
		stickers[19] = stickers[14];
		stickers[14] = stickers[9];
		stickers[9] = temp;

		writeLog("U");
		drawCube();
}

function Ui() {
		var temp = stickers[0];
		stickers[0] = stickers[5];
		stickers[5] = stickers[10];
		stickers[10] = stickers[15];
		stickers[15] = temp;		

		temp = stickers[1];
		stickers[1] = stickers[6];
		stickers[6] = stickers[11];
		stickers[11] = stickers[16];
		stickers[16] = temp;

		temp = stickers[2];
		stickers[2] = stickers[7];
		stickers[7] = stickers[12];
		stickers[12] = stickers[17];
		stickers[17] = temp;

		temp = stickers[3];
		stickers[3] = stickers[8];
		stickers[8] = stickers[13];
		stickers[13] = stickers[18];
		stickers[18] = temp;

		temp = stickers[4];
		stickers[4] = stickers[9];
		stickers[9] = stickers[14];
		stickers[14] = stickers[19];
		stickers[19] = temp;

		writeLog("U'");
		drawCube();
}

function R() {
		var temp = stickers[5];
		stickers[5] = stickers[12];
		stickers[12] = stickers[38];
		stickers[38] = stickers[35];
		stickers[35] = temp;

		temp = stickers[6];
		stickers[6] = stickers[10];
		stickers[10] = stickers[39];
		stickers[39] = stickers[33];
		stickers[33] = temp;

		temp = stickers[7];
		stickers[7] = stickers[11];
		stickers[11] = stickers[40];
		stickers[40] = stickers[34];
		stickers[34] = temp;

		temp = stickers[8];
		stickers[8] = stickers[25];
		stickers[25] = stickers[37];
		stickers[37] = stickers[22];
		stickers[22] = temp;

		temp = stickers[9];
		stickers[9] = stickers[24];
		stickers[24] = stickers[36];
		stickers[36] = stickers[23];
		stickers[23] = temp;

		writeLog("R");
		drawCube();
}

function Ri() {
		var temp = stickers[5];
		stickers[5] = stickers[35];
		stickers[35] = stickers[38];
		stickers[38] = stickers[12];
		stickers[12] = temp;

		temp = stickers[6];
		stickers[6] = stickers[33];
		stickers[33] = stickers[39];
		stickers[39] = stickers[10];
		stickers[10] = temp;

		temp = stickers[7];
		stickers[7] = stickers[34];
		stickers[34] = stickers[40];
		stickers[40] = stickers[11];
		stickers[11] = temp;

		temp = stickers[8];
		stickers[8] = stickers[22];
		stickers[22] = stickers[37];
		stickers[37] = stickers[25];
		stickers[25] = temp;

		temp = stickers[9];
		stickers[9] = stickers[23];
		stickers[23] = stickers[36];
		stickers[36] = stickers[24];
		stickers[24] = temp;

		writeLog("R'");
		drawCube();
}

function D() {
		var temp = stickers[28];
		stickers[28] = stickers[33];
		stickers[33] = stickers[38];
		stickers[38] = stickers[43];
		stickers[43] = temp;

		temp = stickers[29];
		stickers[29] = stickers[34];
		stickers[34] = stickers[39];
		stickers[39] = stickers[44];
		stickers[44] = temp;

		temp = stickers[30];
		stickers[30] = stickers[35];
		stickers[35] = stickers[40];
		stickers[40] = stickers[45];
		stickers[45] = temp;

		temp = stickers[31];
		stickers[31] = stickers[36];
		stickers[36] = stickers[41];
		stickers[41] = stickers[46];
		stickers[46] = temp;

		temp = 	stickers[32];
		stickers[32] = stickers[37];
		stickers[37] = stickers[42];
		stickers[42] = stickers[47];
		stickers[47] = temp;

		writeLog("D");
		drawCube();
}

function Di() {
		var temp = stickers[28];
		stickers[28] = stickers[43];
		stickers[43] = stickers[38];
		stickers[38] = stickers[33];
		stickers[33] = temp;

		temp = stickers[29];
		stickers[29] = stickers[44];
		stickers[44] = stickers[39];
		stickers[39] = stickers[34];
		stickers[34] = temp;

		temp = stickers[30];
		stickers[30] = stickers[45];
		stickers[45] = stickers[40];
		stickers[40] = stickers[35];
		stickers[35] = temp;

		temp = stickers[31];
		stickers[31] = stickers[46];
		stickers[46] = stickers[41];
		stickers[41] = stickers[36];
		stickers[36] = temp;

		temp = 	stickers[32];
		stickers[32] = stickers[47];
		stickers[47] = stickers[42];
		stickers[42] = stickers[37];
		stickers[37] = temp;

		writeLog("D'");
		drawCube();
}

function L() {
		var temp = stickers[0];
		stickers[0] = stickers[29];
		stickers[29] = stickers[43];
		stickers[43] = stickers[16];
		stickers[16] = temp;

		temp = stickers[1];
		stickers[1] = stickers[30];
		stickers[30] = stickers[44];
		stickers[44] = stickers[17];
		stickers[17] = temp;

		temp = stickers[2];
		stickers[2] = stickers[28];
		stickers[28] = stickers[45];
		stickers[45] = stickers[15];
		stickers[15] = temp;

		temp = stickers[20];
		stickers[20] = stickers[46];
		stickers[46] = stickers[27];
		stickers[27] = stickers[19];
		stickers[19] = temp;

		temp = stickers[21];
		stickers[21] = stickers[47];
		stickers[47] = stickers[26];
		stickers[26] = stickers[18];
		stickers[18] = temp;	

		writeLog("L");
		drawCube();
}

function Li() {
		var temp = stickers[0];
		stickers[0] = stickers[16];
		stickers[16] = stickers[43];
		stickers[43] = stickers[29];
		stickers[29] = temp;

		temp = stickers[1];
		stickers[1] = stickers[17];
		stickers[17] = stickers[44];
		stickers[44] = stickers[30];
		stickers[30] = temp;

		temp = stickers[2];
		stickers[2] = stickers[15];
		stickers[15] = stickers[45];
		stickers[45] = stickers[28];
		stickers[28] = temp;

		temp = stickers[20];
		stickers[20] = stickers[19];
		stickers[19] = stickers[27];
		stickers[27] = stickers[46];
		stickers[46] = temp;

		temp = stickers[21];
		stickers[21] = stickers[18];
		stickers[18] = stickers[26];
		stickers[26] = stickers[47];
		stickers[47] = temp;	
	
		writeLog("L'");
		drawCube();
}

function F() {
		var temp = stickers[10];
		stickers[10] = stickers[17];
		stickers[17] = stickers[43];
		stickers[43] = stickers[40];
		stickers[40] = temp;

		temp = stickers[11];
		stickers[11] = stickers[15];
		stickers[15] = stickers[44];
		stickers[44] = stickers[38];
		stickers[38] = temp;

		temp = stickers[12];
		stickers[12] = stickers[16];
		stickers[16] = stickers[45];
		stickers[45] = stickers[39];
		stickers[39] = temp;

		temp = stickers[13];
		stickers[13] = stickers[27];
		stickers[27] = stickers[42];
		stickers[42] = stickers[24];
		stickers[24] = temp;

		temp = stickers[14];
		stickers[14] = stickers[26];
		stickers[26] = stickers[41];
		stickers[41] = stickers[25];
		stickers[25] = temp;		

		writeLog("F");
		drawCube();
}

function Fi() {
		var temp = stickers[10];
		stickers[10] = stickers[40];
		stickers[40] = stickers[43];
		stickers[43] = stickers[17];
		stickers[17] = temp;

		temp = stickers[11];
		stickers[11] = stickers[38];
		stickers[38] = stickers[44];
		stickers[44] = stickers[15];
		stickers[15] = temp;

		temp = stickers[12];
		stickers[12] = stickers[39];
		stickers[39] = stickers[45];
		stickers[45] = stickers[16];
		stickers[16] = temp;

		temp = stickers[13];
		stickers[13] = stickers[24];
		stickers[24] = stickers[42];
		stickers[42] = stickers[27];
		stickers[27] = temp;

		temp = stickers[14];
		stickers[14] = stickers[25];
		stickers[25] = stickers[41];
		stickers[41] = stickers[26];
		stickers[26] = temp;		

		writeLog("F'");
		drawCube();
}

function B() {
		var temp = stickers[0];
		stickers[0] = stickers[7];
		stickers[7] = stickers[33];
		stickers[33] = stickers[30];
		stickers[30] = temp;

		temp = stickers[1];
		stickers[1] = stickers[5];
		stickers[5] = stickers[34];
		stickers[34] = stickers[28];
		stickers[28] = temp;

		temp = stickers[2];
		stickers[2] = stickers[6];
		stickers[6] = stickers[35];
		stickers[35] = stickers[29];
		stickers[29] = temp;

		temp = stickers[3];
		stickers[3] = stickers[23];
		stickers[23] = stickers[32];
		stickers[32] = stickers[20];
		stickers[20] = temp;

		temp = stickers[4];
		stickers[4] = stickers[22];
		stickers[22] = stickers[31];
		stickers[31] = stickers[21];
		stickers[21] = temp;		

		writeLog("B");
		drawCube();
}

function Bi() {
		var temp = stickers[0];
		stickers[0] = stickers[30];
		stickers[30] = stickers[33];
		stickers[33] = stickers[7];
		stickers[7] = temp;

		temp = stickers[1];
		stickers[1] = stickers[28];
		stickers[28] = stickers[34];
		stickers[34] = stickers[5];
		stickers[5] = temp;

		temp = stickers[2];
		stickers[2] = stickers[29];
		stickers[29] = stickers[35];
		stickers[35] = stickers[6];
		stickers[6] = temp;

		temp = stickers[3];
		stickers[3] = stickers[20];
		stickers[20] = stickers[32];
		stickers[32] = stickers[23];
		stickers[23] = temp;

		temp = stickers[4];
		stickers[4] = stickers[21];
		stickers[21] = stickers[31];
		stickers[31] = stickers[22];
		stickers[22] = temp;		

		writeLog("B'");		
		drawCube();
}

function M() {
		var temp = stickers[3];
		stickers[3] = stickers[31];
		stickers[31] = stickers[42];
		stickers[42] = stickers[14];
		stickers[14] = temp;

		temp = stickers[4];
		stickers[4] = stickers[32];
		stickers[32] = stickers[41];
		stickers[41] = stickers[13];
		stickers[13] = temp;
	
		temp = centerStickers[0];
		centerStickers[0] = centerStickers[4];
		centerStickers[4] = centerStickers[5];
		centerStickers[5] = centerStickers[2];
		centerStickers[2] = temp;
		
		writeLog("M");
		drawCube();
}

function Mi() {
		var temp = stickers[3];
		stickers[3] = stickers[14];
		stickers[14] = stickers[42];
		stickers[42] = stickers[31];
		stickers[31] = temp;

		temp = stickers[4];
		stickers[4] = stickers[13];
		stickers[13] = stickers[41];
		stickers[41] = stickers[32];
		stickers[32] = temp;
	
		temp = centerStickers[0];
		centerStickers[0] = centerStickers[2];
		centerStickers[2] = centerStickers[5];
		centerStickers[5] = centerStickers[4];
		centerStickers[4] = temp;

		writeLog("M'");
		drawCube();
}

function E() {
		var temp = stickers[20];
		stickers[20] = stickers[22];
		stickers[22] = stickers[24];
		stickers[24] = stickers[26];
		stickers[26] = temp;

		temp = stickers[21];
		stickers[21] = stickers[23];
		stickers[23] = stickers[25];
		stickers[25] = stickers[27];
		stickers[27] = temp;

		temp = centerStickers[1];
		centerStickers[1] = centerStickers[2];
		centerStickers[2] = centerStickers[3];
		centerStickers[3] = centerStickers[4];
		centerStickers[4] = temp;

		writeLog("E");
		drawCube();
}

function Ei() {
		var temp = stickers[20];
		stickers[20] = stickers[26];
		stickers[26] = stickers[24];
		stickers[24] = stickers[22];
		stickers[22] = temp;

		temp = stickers[21];
		stickers[21] = stickers[27];
		stickers[27] = stickers[25];
		stickers[25] = stickers[23];
		stickers[23] = temp;

		temp = centerStickers[1];
		centerStickers[1] = centerStickers[4];
		centerStickers[4] = centerStickers[3];
		centerStickers[3] = centerStickers[2];
		centerStickers[2] = temp;

		writeLog("E'");
		drawCube();
}

function S() {
		var temp = stickers[8];
		stickers[8] = stickers[19];
		stickers[19] = stickers[47];
		stickers[47] = stickers[36];
		stickers[36] = temp;

		temp = stickers[9];
		stickers[9] = stickers[18];
		stickers[18] = stickers[46];
		stickers[46] = stickers[37];
		stickers[37] = temp;

		temp = centerStickers[0];
		centerStickers[0] = centerStickers[3];
		centerStickers[3] = centerStickers[5];
		centerStickers[5] = centerStickers[1];
		centerStickers[1] = temp;

		writeLog("S");
		drawCube();
}

function Si() {
		var temp = stickers[8];
		stickers[8] = stickers[36];
		stickers[36] = stickers[47];
		stickers[47] = stickers[19];
		stickers[19] = temp;

		temp = stickers[9];
		stickers[9] = stickers[37];
		stickers[37] = stickers[46];
		stickers[46] = stickers[18];
		stickers[18] = temp;

		temp = centerStickers[0];
		centerStickers[0] = centerStickers[1];
		centerStickers[1] = centerStickers[5];
		centerStickers[5] = centerStickers[3];
		centerStickers[3] = temp;

		writeLog("S'");
		drawCube();
}

init();