class paper {
constructor(x,y){
super(x,y,);
this.Image=loadImage("project-c25-template-main");

}
display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();


}
}



