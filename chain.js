class Chain{
constructor(bodyA,bodyB){
    var options ={
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.04,
        lenght: 10
    }
    this.chain=Constraint.create(options)
    World.add(world,this.chain)
}


display(){
    var Gopi =this.chain.bodyA.position
    var bottle = this.chain.bodyB.position
    strokeWeight(4)
    line(Gopi.x,Gopi.y,bottle.x,bottle.y)
}



















}