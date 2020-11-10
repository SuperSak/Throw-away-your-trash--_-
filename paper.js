class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.Image = loadImage('paper.png')
        this.body = Bodies.circle(x,y,r,options)
        World.add(world, this.body)
        this.r = r
    }
    display(){
        var pos = this.body.position
        imageMode(CENTER)
        image(this.Image, pos.x, pos.y, this.r, this.r)
        this.body.scale = 0.07

    }
}