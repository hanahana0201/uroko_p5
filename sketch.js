const w = 5000
const s = 25
const d = w/s

function setup() {
  createCanvas(w, w, SVG);

  // // 03 Light Red
  // background(15, 180, 225);

  // // 03 Light Red
  // background(245, 67, 65);

  // O2 Light Gold
  background(233, 203, 130);

  // // 01 Light Green
  // background("#52b788");
}

function draw() {
  for(let y = 0;y < height;y += d){
    if(y%(d*2)===0){
      for(let x = 0;x < width; x+=d){
        push()
        translate(x,y)
        drawTriangle()
        pop()
      }
    } else {
      for(let x = -d/2;x < width;x+=d){
        push()
        translate(x,y)
        drawTriangle()
        pop()
      }
    }
  }
  // save("urokomonyou_03.svg");
  // print("saved svg");
  // noLoop();
}

function drawTriangle() {
  push()
  noStroke()

  // // 04 Deep Blue
  // fill(7,160,220)

  // // 03 Deep Red
  // fill(200,18,17)

  // 02 Dark Gold
  fill(240,213,136)

  // // 01 Dark Green
  // fill("#344e41")

  triangle(0, d, d/2, 0, d, d)
  pop()
}