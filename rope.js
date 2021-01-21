class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 200
        }
        this.chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.chain);
    }
}