function setup() { //設定初始內容，只會執行一次
  createCanvas(windowWidth, windowHeight); //產生一個畫布
  //background(0)  //黑色背景
  background("#ccd5ae") //設定背景顏色
}

function draw() {   //畫圖，每秒會進入執行程式60次


  background("#e3d5ca");
  textSize(30)
  text(mouseX+":"+mouseY,width/2,height/2)

  translate(width/2,height/2) 
  rotate(frameCount%360)
  for (let i=0; i<points.length-1; i++) { 
    //text(str(i),points[i].x,points[i].y) //(在points[i].x,point)
    fill("#778da9") 
    // noStroke()
    strokeWeight(1)
    ellipse(points[i].x+r*sin(angle+i*20),points[i].y+r*sin(angle+i*20),10)
    stroke("#00bbf9")
    strokeWeight(5)
    line(points[i].x+r*sin(angle+i*10),points[i].y+r*sin(angle+i*10),points[i+1].x+r*sin(angle+i*10),points[i+1].y+r*sin(angle+i*10)) //畫線兩個點構成一條線
 } 
 //===========================================================================
 angle = angle+10
}

function draw() {  //畫圖
  //background(220); //背景顏色，灰白色(0黑~255白)
  background("#ccd5ae") //設定背景顏色(青草色)
  rectMode(CENTER) //把設定方形的座標點放在方形的中間
  noFill() //以下所畫的物件不要充滿顏色
  stroke("#023e8a") //線條的顏色
  strokeWeight(3) //線條的粗細
  var rect_width = 50 + mouseX/10 //方形的寬度
  var bc_width = 50 + mouseY/10   //大圓的寬度
  var sc_width = 25 + mouseX/100  //小圓的寬度
  //+++++++++++++++++++++++第一排++++++++++++++++++++++++
  //FOR迴圈
    // i=0: i為變數，要i從0開始(設定i的初始值)
    //i<20 : 條件判斷，當距離成立時，就繼續進到回圈內的程式碼執行
    //i=i+1 : i 值每次改變的差距值，當回圈內的程式碼執行一次完畢後，i值會自動+1
    for(let j=0;j<20;j=j+1){
     for(let i=0;i<40;i=i+1){
      if(j<5){
        stroke("#e9c46a")
      }else if(j<10) {
        stroke("#e9c46a")
      }else{
        stroke("#e9c46a")
      }

     ellipse(25+50*i,25+50*j,bc_width)
     rect(25+50*i,25+50*j,rect_width)
     ellipse(50+50*i,50+50*j,sc_width)
  }
 }
}