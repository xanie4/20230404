
let ctx;
let points = [[467,127],[489,153],[440,150],[404,161],[367,196],
[317,284],[292,337],[279,355],[244,400],[231,426],[232,441],[232,466]
,[240,484],[257,443],[269,505],[283,513],[244,584],[294,643],[216,659],
[226,683],[189,712],[222,732],[170,803],[123,894],[87,976],[175,1058],
[173,1078],[314,1129],[319,1145],[375,1144],[430,1297],[425,1357],
[424,1378],[466,1390],[474,1369],[467,1321],[525,1340],[551,1326],
[501,1286],[495,1269],[548,1158],[696,1083],[809,993],[751,892],[759,884],
[693,775],[638,708],[510,604],[511,584],[534,568],[534,513],[598,583],[644,602],
[650,571],[645,544],[581,457],[574,397],[561,375],[554,370],[538,367],[551,384],
[554,393],[543,385],[539,389],[537,391],[527,389],[492,396],[491,388],[512,386],
[519,373],[524,367],[525,361],[535,360],[536,346],[539,340],[551,331],[554,324],
[545,300],[555,275],[567,242],[567,224],[590,205],[596,180],[591,168],[583,161],
[562,163],[557,156],[543,153],[521,154],[534,127],[504,115],[500,125],[496,119],[467,127]]; //list資料，

function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  //把points 內的值都*0.5

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 0.5;
    }
  }
  ctx = canvas.getContext('2d');
	ctx.lineCap = 'round'
  gradientLine(ctx, mouseX, 60, mouseX, 300, 'yellow', 'lightblue')
}

function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  ctx.strokeStyle = gradient;
  
}


function draw() {
 
  background(255);
  strokeWeight(5)
  translate(width/2, 0); //原本原點在左上角，利用這指令把原點放到視窗的中心上方
 
  // 計算縮放比例
  const scaleAmount = map(mouseX, 0, width, 0.5, 2);
  
  // 重置縮放比例
  resetMatrix();

  // 設定縮放比例
  scale(scaleAmount);




// 畫出圖形
  for (let i = 0; i < points.length-1; i++) {
    line((points[i][0])+mouseX, (points[i][1]), (points[i+1][0])+mouseX, (points[i+1][1]));
    line(((points[i][0])*1.1+mouseX), (points[i][1])*1.1, (points[i+1][0])*1.1+mouseX, (points[i+1][1])*1.1);
    line(((points[i][0])*1.2+mouseX), (points[i][1])*1.2, (points[i+1][0])*1.2+mouseX, (points[i+1][1])*1.2);
    line(((points[i][0])*1.3+mouseX), (points[i][1])*1.3, (points[i+1][0])*1.3+mouseX, (points[i+1][1])*1.3);
    line(((points[i][0])*1.4+mouseX), (points[i][1])*1.4, (points[i+1][0])*1.4+mouseX, (points[i+1][1])*1.4);
  }
  // line((points[points.length-1][0]), (points[points.length-1][1]), (points[0][0]), (points[0][1])); //把最後一點與第一點的連線
  textSize(30)
  fill("#dd1c1a")
  text("愛麗絲夢遊仙境",mouseX-200,height/2)
}



