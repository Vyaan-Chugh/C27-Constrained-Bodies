class Chain {
    constructor(body1,body2) {
        var options  = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.04,
            length: 10,
        }
        this.chain =  Constraint.create(options);
        this.bodyA = body1;
        this.bodyB = body2;
        World.add(world,this.chain)
    }

    display(){

        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        push();
        stroke("red")
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
    }
}