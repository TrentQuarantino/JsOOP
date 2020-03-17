function Particle() {
    this.x = 100;
    this.y = 100;
    //this.show = function() {
      //  point(this.x,this.y)
    //}
}

function Confetti() {
    Particle.call(this);
    this.col = color(255, 0, 255);
    console.log("hello this is Confetti");

}

Particle.prototype.update = function() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);  
}

Particle.prototype.show = function() {
    stroke(255);
    strokeWeight(8);
    point(this.x,this.y);  
}



Confetti.prototype = Object.create(Particle.prototype);
Confetti.prototype.constructor = Confetti;

Confetti.prototype.show = function() {
    stroke(255, 0, 255);
    noFill();
    strokeWeight(8);
    square(this.x,this.y, 50);  
}

var p;
var v; 
var c;

p5.Vector.prototype.double = function() {
    this.x *= 2;
    this.y *= 2;
    this.z *= 2;
}

function setup() {
    createCanvas(600, 300);
    p = new Particle();
    c = new Confetti();
    //c.show()
    console.log(p);
    console.log(c);
    v = createVector(3, 4);
}

function draw() {
    background(0);
    p.update();
    p.show();
    c.update();
    c.show();
}

