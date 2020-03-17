/*var bubble = {
    x: 300,
    y: 200,
}

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    move();
    show();
}

function show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(bubble.x, bubble.y, 24, 24);
}

function move() {
    bubble.x = bubble.x + random(-5, 5);
    bubble.y = bubble.y + random(-5, 5);
}*/

let bubble1;
let bubble2;

function setup() {
    createCanvas(600, 400);
    bubble1 = new Bubble(200, 200, 40);
    bubble2 = new Bubble(400, 200, 20);
    //print(bubble.x, bubble.y);
}

function draw() {
    background(0);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
}

class Bubble {
    constructor(ciccio, bombo, cannoniere) {
        this.x = ciccio;
        this.y = bombo;
        this.r = cannoniere;
    }
    
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r*2);
    }
}
