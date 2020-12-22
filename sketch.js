var  wall,bullet;
var  thickness, speed,weight;

function setup() {
  createCanvas(1000,400);
  speed= random(223,321);
  weight= random(30,52);

  bullet=createSprite(100,200,50,15);
  wall=createSprite(850,200,60,200);

  bullet.velocityX=speed;

  thickness=random(22,83);
  wall.width=thickness;

}

    function draw() {
    background(0); 

    if(wall.x-bullet.x<(wall.width+bullet.width)/2){
    
     bullet.velocityX=0;
     bullet.x=wall.x -(wall.width+bullet.width)/2;

      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

      if(damage<10)
      {
         wall.shapeColor="green";
    ``}
      else
      {
        wall.shapeColor="red";
      }  
    }  
      drawSprites();
}    
      hasCollided(bullet,wall);


      function hasCollided(bullet,wall)
      {
       bulletRightEdge=bullet.y+bullet.width;
       wallleftEdge=wall.x;
       
       if(bulletRightEdge>wallleftEdge)
       {
         return true;
       }
       else
       return false;
     }

      