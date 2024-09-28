

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(83, 84, 84);

  //zebra crossing
  push();
  noStroke();
  for (let d = 20; d < 1350; d += 250) {
    for (let c = 240; c < 900; c += 250) {
      fill(201, 201, 201);
      rect(d, c, 200, 10, 5, 5, 5, 5);
      
    }
  }
  pop();

  //coach
  for (let d = 30; d < 1250; d += 280) {
    for (let c = 30; c < 900; c += 250) {
      let r = random(255);
      let g = random(255);
      let b = random(255);
     
      strokeWeight(5);
      fill(r, g, b);
      rect(d, c, 260, 160, 50, 50, 10, 10);
    }
  }
  //Lwindows
  for (let d = 50; d < 1250; d += 280) {
    for (let c = 60; c < 900; c += 250) {
      fill(215, 245, 245);
      rect(d, c, 100, 70, 10, 10, 10, 10);
    }
  }
  //Rwindows
  for (let d = 170; d < 1350; d += 278) {
    for (let c = 60; c < 900; c += 250) {
      fill(215, 245, 245);
      rect(d, c, 100, 70, 10, 10, 10, 10);
    }
  }
  
  //Lw
  strokeWeight(20);
  for (let d = 90; d < 1250; d += 280) {
    for (let c = 190; c < 900; c += 250) {
      fill(180, 184, 184);
      ellipse(d, c, 60, 60);
    }
  }
  //Rw
  strokeWeight(20);
  for (let d = 220; d < 1350; d += 280) {
    for (let c = 190; c < 900; c += 250) {
      fill(180, 184, 184);
      ellipse(d, c, 60, 60);
    
    }
  }
}

function draw() {}
