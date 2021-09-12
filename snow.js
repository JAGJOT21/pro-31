class Snow {
    constructor(x,y){
        var options = {
            restitution:0.5
        }
       this.body=Bodies.circle(x,y,20,20)
       this.x=random(1,800) 
       this.y=y
       this.image=loadImage("snow5.webp")
      World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angel = this.body.angel
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,20,20)
    }
}

