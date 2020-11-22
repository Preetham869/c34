 const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;

 var ground,box1,box2,box3,box4;
 var box5,box6,box7,box8,box9,box10,box11;
 var box12,box13,box14,box15,box16,box17;
 var box18,ball,rope;

 function setup(){
   
 var canvas = createCanvas(1200,700);
  
 engine = Engine.create();
 world = engine.world;

 ground = new Ground(600,600,1200,20);
 
 ball = new Ball(200, 200, 80, 80);

 rope = new Rope(ball.body, { x: 500, y: 100 });

  box1 = new Box(900, 200, 70, 70);
  box2 = new Box(900, 200, 70, 70);
  box3 = new Box(900, 200, 70, 70);
  box4 = new Box(900, 200, 70, 70);
  box5 = new Box(900, 200, 70, 70);
  box6 = new Box(900, 200, 70, 70);

  box7 = new Box(800, 200, 70, 70);
  box8 = new Box(800,200, 70, 70);

  box9 = new Box(800,200, 70, 70);
  box10 = new Box(800,200, 70, 70);
 
  box11 = new Box(700,200, 70, 70);
  box12 = new Box(700,200, 70, 70);
  box13 = new Box(700,200, 70, 70);
  box14 = new Box(700,200, 70, 70);
  box15 = new Box(700,200, 70, 70);
  box16 = new Box(700,200, 70, 70);


 
 }

 function draw() {

 background("purple");

 Engine.update(engine);

 ground.display();
 
 fill("green")
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();

 fill("blue")

 box7.display();
 box8.display();
 box9.display();
 box10.display();
 
 fill("green")
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();

 rope.display();

 ball.display();

 }

 function mouseDragged() {
    
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  
}