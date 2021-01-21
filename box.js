class Box{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.3,
            'friction':0.3,
            'density':0.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        strokeWeight(2);
        stroke(0);
        fill(255,0,0);
        rect(pos.x,pos.y,this.width,this.height);
    }
}