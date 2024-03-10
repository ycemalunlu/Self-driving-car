const canvas=document.getElementById("myCanvas");
canvas.width=200;
// canvas.height=window.innerHeight;
// this is moved into the animation function to remove car traces

const ctx = canvas.getContext("2d");
const road=new Road(canvas.width/2,canvas.width*0.9);
const car=new Car(road.getLaneCenter(1),100,30,50);



animate();

function animate(){
    car.update(road.borders);
    canvas.height=window.innerHeight;
    // because we are updating the canvas size with the animation it is drawing the canvas from scratch so there is no trace left from the previous car drawings
    
    ctx.save();
    ctx.translate(0,-car.y+canvas.height*0.7);

    road.draw(ctx);
    car.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate);
}