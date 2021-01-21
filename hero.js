class Hero{
    constructor(x,y,width,height){
        var options={
            'restituion': 1.2,
            'density': 0.02,
            'frictionAir': 0.002
        }
        this.body = Bodies.rectangle(x,y,200,75,options);
        this.image = loadImage('Superhero-01.png');
        this.height = height;
        this.width = width;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)
        pop();
    }
}