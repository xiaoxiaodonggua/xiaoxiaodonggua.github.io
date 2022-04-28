//参数————————————————————————————————————————
//棋盘宽度
var chessWidth = 15;



//回合，true白方回合，false黑方回合。
var round = true;
//状态，0为等待开始，1为正在下棋，2为结束
var phase = 0;

var chessBroad = new Array();
var cell = new Array();

            

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
/*	 var text = "";
	 for (var i = 0; i < chessWidth; i++) {
	 	text += "<tr id =\"" + ItoS(i) + "\" height=\"40\">";
	 	for (var j = 0; j < chessWidth; j++) {
	 		text += "<td id=\"" + ItoS(i) + ItoS(j) + "\" onclick=\"drawPiece(this)\" width=\"50\"><!----></td>";
	 	}
	 	text += "</tr>";
	 }*/
	 var tb = document.getElementById("tb");

	 //绘制单元格
	 for (var i = 0; i < chessWidth; i++) {
	 	var tr = tb.insertRow();
	 	cell[i] = new Array();
	 	for (var j = 0; j < chessWidth; j++) {
	 		cell[i][j] = tr.insertCell();
	 	}
	 }

	 //上色
	 var count = 0;
	 var bgc = ["lightgreen", "LightSkyBlue ", "lightcoral", "gold"];
	 for(var i = 4; i < 11; i++) {
	 	cell[0][i].style.background = bgc[count++%4];
	 	var temp = document.createElement("div");
	 	temp.style.borderRadius = "50px";
	 	temp.style.height = "30px";
	 	temp.style.width = "35px";
	 	temp.style.magin = "auto";
	 	temp.style.background = "white";
	 	cell[0][i].appendChild(temp);
	 }
	 for(var i = 1; i < 4; i++) {
	 	cell[i][10].style.background = bgc[count++%4];
	 }
	 for(var i = 11; i < 14; i++) {
	 	cell[4][i].style.background = bgc[count++%4];
	 }
	 for(var i = 4; i < 11; i++) {
	 	cell[i][14].style.background = bgc[count++%4];
	 }
	 for(var i = 13; i > 10; i--) {
	 	cell[10][i].style.background = bgc[count++%4];
	 }
	 for(var i = 11; i < 14; i++) {
	 	cell[i][10].style.background = bgc[count++%4];
	 }
	 for(var i = 10; i > 3; i--) {
	 	cell[14][i].style.background = bgc[count++%4];
	 }
	 for(var i = 13; i > 10; i--) {
	 	cell[i][4].style.background = bgc[count++%4];
	 }
	 for(var i = 3; i > 0; i--) {
	 	cell[10][i].style.background = bgc[count++%4];
	 }
	 for(var i = 10; i > 3; i--) {
	 	cell[i][0].style.background = bgc[count++%4];
	 }
	 for(var i = 1; i < 4; i++) {
	 	cell[4][i].style.background = bgc[count++%4];
	 }
	 for(var i = 3; i > 0; i--) {
	 	cell[i][4].style.background = bgc[count++%4];
	 }
	 
	 for(var i = 13; i > 8; i--) {
	 	cell[7][i].style.background = bgc[0];
	 	cell[7][i].style.border = "1px solid black";
	 }
	 for(var i = 13; i > 8; i--) {
	 	cell[i][7].style.background = bgc[1];
	 }
	 for(var i = 1; i < 6; i++) {
	 	cell[7][i].style.background = bgc[2];
	 }
	 for(var i = 1; i < 6; i++) {
	 	cell[i][7].style.background = bgc[3];
	 }

	 imageConnect(4, 4, '../image/halfgraybox11.bmp.png');	 
	 imageConnect(4, 10, '../image/halfgraybox12.bmp.png');
	 imageConnect(10, 4, '../image/halfgraybox21.bmp.png');
	 imageConnect(10, 10, '../image/halfgraybox22.bmp.png');
	 imageConnect(6, 6, '../image/endings/Ending_01.jpg');
	 imageConnect(6, 7, '../image/endings/Ending_02.jpg');
	 imageConnect(6, 8, '../image/endings/Ending_03.jpg');
	 imageConnect(7, 6, '../image/endings/Ending_04.jpg');
	 imageConnect(7, 7, '../image/endings/Ending_05.jpg');
	 imageConnect(7, 8, '../image/endings/Ending_06.jpg');
	 imageConnect(8, 6, '../image/endings/Ending_07.jpg');
	 imageConnect(8, 7, '../image/endings/Ending_08.jpg');
	 imageConnect(8, 8, '../image/endings/Ending_09.jpg');
}

//绘制路径
function drawPath() {
	var count = 0;
	var cell=[0, 4];
	//part:标识在画第几段；direction:方向
	var part = 0, direction = [0, 1];
	var bgc = ["lightgreen", "LightSkyBlue ", "lightcoral", "gold"];
	var pathLength = [7,3,3];
	white ()
	function setNextCell(part) {
		if (part%3 == 0) {
			direction = (direction + 1) % 4;
		}
	}
}

//将图片加载到指定单元格
function imageConnect(row, col, src) {
	var temp = document.createElement("img");
	temp.setAttribute('src',src);
	cell[row][col].appendChild(temp);
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