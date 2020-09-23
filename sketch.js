var Car , Wall;
var Speed , Weight; 

function setup() {
createCanvas(400,1600);

Speed = random(55,90)
Weight = random(400,1500)
Car = createSprite(50,200,50,50);
Car.velocityX = Speed;
Wall = createSprite(1500,200,60,height/2);
Wall.shapeColor=color(80,80,80);
}

function draw() {
background(255,255,255);  
if (Wall.x-Car.x < (Car.width+Wall.width)/2)
{
Car.velocityX=0;
var deformation=0.5 * weight * speed * speed/22509;
if(deformation>180)
{
Car.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100) 
{
Car.shapeColor=color(230,230,0);
}
if(deformation<100)
{
Car.shapeColor=color(0,255,0);
}
}
drawSprites();
}