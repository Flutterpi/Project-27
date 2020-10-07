class Bob
{
  constructor(x,y,diameter) 
  {
    var options = 
    {
    isStatic:false,
    'restitution':1,
    'friction':0,
    'density':1.2
    }
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.body = Bodies.circle(this.x,this.y,this.diameter/2,options)
    

    World.add(world, this.body);
  }
    display()
    {
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill("lavender");
        stroke(220,195,224);
        ellipse(0,0,this.diameter,this.diameter);
        pop();
    }
}
