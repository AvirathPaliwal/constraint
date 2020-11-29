class Mango{
    constructor(x,y,r){
   var position = {
     isStatic:true,
     restitution:0,
     friction:1,
   }
  this.r=r
  this.y=y
  this.x=x
  this.image=loadImage("mango.png")
  this.body=Bodies.circle(this.r,this.y,this.x,position)
  World.add(world,this.body)
    }
    display(){
        ellipseMode(RADIUS)
        imageMode(CENTER)
        image(this.image,1050,350,50,50);
      //  ellipse(200,200,10,10);

    }
}