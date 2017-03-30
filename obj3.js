var Rectangle = {width:10, height:10};

var calcArea = function(calcArea){
    console.log("Povrsina:");
    console.log(this.width*this.height)
};

Rectangle.calcArea=calcArea;
Rectangle.calcArea();

var calcPerimeter = function(calcPerimeter){
    console.log("Opseg:");
    console.log(2*this.width+2*this.height)
};

Rectangle.calcPerimeter=calcPerimeter;
Rectangle.calcPerimeter();
