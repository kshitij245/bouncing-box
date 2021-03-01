var canvas;
var music;
var box1,box2,box3,box4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1=createSprite(710,580,150,20);
    box1.shapeColor="green"
    box2=createSprite(510,580,150,20);
    box2.shapeColor="yellow";
    box3=createSprite(310,580,150,20);
    box3.shapeColor="red";
    box4=createSprite(110,580,150,20);
    box4.shapeColor="blue";



    //create box sprite and give velocity
     ball=createSprite(200,200,20,20);
     ball.x=Math.round(random(20,750));
     ball.shapeColor="white";
     ball.velocityX=4;
     ball.velocityY=6;

     
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite;
    edges= createEdgeSprites();
    
    
   
    ball.bounceOff(edges);
  
    if(box1.isTouching(ball)&&ball.bounceOff(box1)){
        ball.shapeColor="Green";
     }
     if(box2.isTouching(ball)&&ball.bounceOff(box2)){
         ball.shapeColor="Yellow";
         }
     if(box3.isTouching(ball)&&ball.bounceOff(box3)){
             ball.shapeColor="Red";
      }
      if(box4.isTouching(ball)&&ball.bounceOff(box4)){
         ball.shapeColor="Blue";;
         }
 
 
    



    //add condition to check if box touching surface and make it box
       


    drawSprites();
}
