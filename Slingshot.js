class Slingshot{
    constructor(b1, p2){
        var options = {
            bodyA: b1,
            pointB: p2,
            stiffness: 0.04,
            length: 10
        }
        this.mysling = Constraint.create(options);
        World.add(world, this.mysling);
        this.p=p2
    }
    fly(){
        this.sling.bodyA=null

    }
    display(){
        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB = this.p;
            strokeWeight(4);
            line(posA.x, posA.y, posB.x, posB.y);
        }
    
    }
}