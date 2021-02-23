var end,end1,end2 ;

var lamberghini,BMW,audi;

var thickness,thickness1,thickness2;

var speed,speed1,speed2 ;

var weight ;

var line,line1;


function setup() {
  createCanvas(1200,400);


speed=random(223,321);
speed1=random(300,500);
speed2=random(400,650);
weight=random(30,52);
thickness=random(30,80);
thickness1=random(0,50);
thickness2=random(40,120);


lamberghini=createSprite(70,60,100,5);
BMW=createSprite(70,200,100,5);
audi=createSprite(70,350,100,5);

end=createSprite(1000,60,50,250)
end1=createSprite(1000,200,50,250)
end2=createSprite(1000,340,50,240)
line=createSprite(600,130,120,5);
line=createSprite(400,130,120,5);
line=createSprite(200,130,120,5);
line=createSprite(800,130,120,5);
line=createSprite(1000,130,120,5);
line1=createSprite(200,270,120,5);
line1=createSprite(400,270,120,5);
line1=createSprite(600,270,120,5);
line1=createSprite(800,270,120,5);
line1=createSprite(1000,270,120,5);




lamberghini.velocityX= 0;
BMW.velocityX= 0;
audi.velocityX= 0;

}

function draw() {

  background(0);  

 
  textSize(35)
  fill("white")
  text("BMW ",50,40)
  text("AUDI ",50,180)
  text("LAMBERGHINI ",50,330)
  text("E",1100,100)
  text("N",1100,200)
  text("D",1100,300)

  lamberghini.shapeColor=color(255)
  BMW.shapeColor=color(255)
  audi.shapeColor=color(255)
  end.shapeColor=color("white")
  end1.shapeColor=color("white")
  end2.shapeColor=color("white")


  lamberghini.depth=end.depth
  lamberghini.depth= end.depth+1

  BMW.depth=end1.depth
  BMW.depth= end1.depth+1

  audi.depth=end2.depth
  audi.depth= end2.depth+1

   if(keyCode === 32){

      lamberghini.velocityX=5;
   }

   if(keyCode === 32){

    BMW.velocityX=5;
 }

 if(keyCode === 32){

  audi.velocityX=5;
}

if(hasCollided(lamberghini,end)){

lamberghini.velocityX=0
var run=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(run>10){

  lamberghini.shapeColor=color("yellow")
}


}

if(hasCollided(BMW,end1)){

  BMW.velocityX=0
  var run=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  if(run>10){
  
    BMW.shapeColor=color("purple")
  }
  
  
  }

  if(hasCollided(audi,end2)){

    audi.velocityX=0
    var run=0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(run>10){
    
      audi.shapeColor=color("white")
    }
    
    
  }

  drawSprites();
}
1




  
  function hasCollided(lamberghini,end){

    lamberghiniRightEdge=lamberghini.x+lamberghini.width;
    endLeftEdge=end.x;
    
    if(lamberghiniRightEdge>=endLeftEdge){
    
    return true;
    
    }
    else{
    
      return false; 
    }
  }

    

  function hasCollided(BMW,end1){
  
  BMWRightEdge=BMW.x+BMW.width;
  end1LeftEdge=end1.x;
  
  if(BMWRightEdge>=end1LeftEdge){
  
  return true;
  
  }
  else{
  
    return false; 
  }
}
  

  function hasCollided(audi,end2){

    audiRightEdge=audi.x+audi.width;
    end2LeftEdge=end2.x;
    
    if(audiRightEdge>=end2LeftEdge){
    
    return true;
    
    }
    else{
    
      return false; 
    }
  }