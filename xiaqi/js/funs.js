//参数————————————————————————————————————————
//棋盘宽度
var chessWidth = 16;

//白棋
var whitePiece = "<img class=\"white\" src=\"../image/白子1.png\" height=\"100px\" width=\"100px\"> ";

//黑棋
var blackPiece = "<img class=\"black\" src=\"../image/黑子1.png\" height=\"100px\" width=\"100px\"> ";

var chessImg =  "<td id=\"xPosyPos\" onclick=\"drawPiece(this)\"><img src=\"../image/imgName.png\" width=\"100px\" height=\"100px\"><!----></td>";

//回合，true白方回合，false黑方回合。
var round = true;
//状态，0为等待开始，1为正在下棋，2为结束
var phase = 0;

var chessBroad = new Array();

            

//————————————————————————————————————————————
//初始化
function init(){
	drawBroad();
	phase = 1;
	for (var i=0; i<chessWidth; i++) {
                chessBroad[i] = new Array();

                for (var j=0; j<chessWidth; j++) {

                    chessBroad[i][j] = 0;

                }

            }
}

//绘制棋盘
function drawBroad() {
	// body...
	// document.getElementById("demo").innerHTML = "棋盘已生成";
	 var text = "";
	 for (var i = 0; i < chessWidth; i++) {
	 	text += "<tr id =\"" + ItoS(i) + "\" height=\"100\">";
	 	for (var j = 0; j < chessWidth; j++) {
	 		text += "<td id=\"" + ItoS(i) + ItoS(j) + "\" onclick=\"drawPiece(this)\"><img draggable=\"false\" src=\"../image/"+ imageName(i,j) +".png\" height=\"100px\" width=\"100px\"><!----></td>";
	 	}
	 	text += "</tr>";
	 }
	 document.getElementById("tab").innerHTML = text;
}

//获取棋盘单元格图片名称
function imageName(i, j) {
	var res = "";
	if (i == 0) {
		res += 0;
	} else if (i == chessWidth -1) {
		res += 2;
	} else {
		res += 1;
	}
	if (j == 0) {
		res += 0;
	} else if (j == chessWidth - 1) {
		res += 2;
	} else {
		res += 1;
	}
	return res;
}

function getPos(obj) {
	return obj.id;
	
}

//落子
function drawPiece(obj) {
	if (phase == 2) return;
	var pos = getPos(obj);
	console.log(pos);
	var x = Number(pos.substring(0,2)), y = Number(pos.substring(2,4));
	console.log("x= ", x, ", y = ", y);
	if (chessBroad[x][y] != 0) return;
	round = !round;
	if (round) {
		document.getElementById(pos).innerHTML = document.getElementById(pos).innerHTML.replace("<!---->" ,whitePiece);
		chessBroad[x][y] = 1;
	} else {
		document.getElementById(pos).innerHTML = document.getElementById(pos).innerHTML.replace("<!---->" ,blackPiece);
		chessBroad[x][y] = -1;
	}
	if (cheakWin(x, y) == 4) {
		phase = 2;
		if (round) {
			alert("白棋获胜!");
		} else {
			alert("黑棋获胜!");
		}
	}
}

//检查落子后是否胜利
function cheakWin(x, y) {
	return Math.max(countNum(x, y, 1, 1)+countNum(x, y, -1, -1),countNum(x, y, 1, -1)+countNum(x, y, -1, 1),countNum(x, y, 0, 1)+countNum(x, y, 0, -1),countNum(x, y, -1, 0)+countNum(x, y, 1, 0));
}

//统计从(x,y)处向(xO,yO)处有多少连子，不包括(x,y)本身
function countNum(x, y, xO, yO) {
	var xP = x, yP =y;
	for (var i = 0; i < 4; i++) {
		xP += xO;
		yP += yO;
		if (xP >= 0 && xP < chessWidth && yP >= 0 && yP < chessWidth && chessBroad[xP][yP] == chessBroad[x][y]) {
			
		} else {
			return i;
		}
	}
	return 4;
}

//2位字符串转2位数number
function StoI(str) {
	return str[0] * 10 + str[1];
}

//2位数转2位字符串
function ItoS(num) {
	if (num > 9) {
		return String(num);
	}

	return '0' + String(num);
}