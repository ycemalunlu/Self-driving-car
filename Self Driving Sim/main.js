const canvas=document.getElementById("myCanvas");
canvas.width=200;
// canvas.height=window.innerHeight;
// this is moved into the animation function to remove car traces

const ctx = canvas.getContext("2d");
const car=new Car(100,100,30,50);
car.draw(ctx);


animate();

function animate(){
    car.update();
    canvas.height=window.innerHeight;
    // because we are updating the canvas size with the animation it is drawing the canvas from scratch so there is no trace left from the previous car drawings

    car.draw(ctx);
    requestAnimationFrame(animate);
}