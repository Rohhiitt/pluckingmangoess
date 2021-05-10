class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        this.pointB = pointB
        this.launcherObject = Constraint.create(options);
        World.add(world, this.launcherObject);
    }

    fly(){
        this.launcher.bodyA = null;
    }

    display(){
            if(this.launcherObject.bodyA){
            
            var pointA = this.launcherObject.bodyA.position;
            var pointB = this.pointB;
        
            push();
            
            stroke(48,22,8);

            line(pointA.x,pointA.y,pointB.x,pointB.y);
           
            
            pop();
            }
        
    }
    
}