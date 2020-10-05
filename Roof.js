class Roof 
{
    constructor(x,y,width,height) 
    {
      var options = {
        isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(4);
      fill(190,217,212);
      stroke(131,183,160)
      rect(pos.x, pos.y, this.width, this.height);
    }
  }