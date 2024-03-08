class Car{
    constructor(x,y,width,height){
        this.x=x
        this.y=y
        this.width=width
        this.height=height

        this.speed=0;
        this.acceleration=0.2;
        this.maxSpeed=3;
        this.friction=0.05;
        this.angle=0

        this.controls=new Controls();
    }


    update(){
        if(this.controls.forward){
            this.speed+=this.acceleration;
        }
        if(this.controls.reverse){
            this.speed-=this.acceleration;
        }

        if(this.speed>this.maxSpeed){
            this.speed=this.maxSpeed;
        }
        if(this.speed<-this.maxSpeed/2){
            this.speed=-this.maxSpeed/2;
        }

        if(this.speed>0){
            this.speed-=this.friction;
        }
        if(this.speed<0){
            this.speed+=this.friction;
        }
        
        if(Math.abs(this.speed)<this.friction){
            this.speed=0;
        }


        if(this.speed!=0){
            const flip=this.speed>0?1:-1;
            if(this.controls.left){
                this.angle+=0.03*flip;
            }
            if(this.controls.right){
                this.angle-=0.03*flip;
            }
        }
        
        this.x-=Math.sin(this.angle)*this.speed;
        this.y-=Math.cos(this.angle)*this.speed;
    }


    draw(ctx){
        ctx.save();
        // Saves the current transformation state of the context.
        ctx.translate(this.x,this.y);
        // Translates the origin of the canvas to (this.x, this.y).
        ctx.rotate(-this.angle)
        // Rotates the canvas around the origin by -this.angle radians. This rotates the subsequent drawing operations around the point (this.x, this.y).
        ctx.beginPath();
        ctx.rect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        );
        // Draws a rectangle with its top-left corner at (-this.width/2, -this.height/2). Since the origin of the canvas has been translated and rotated, this means the rectangle is drawn with its center at (this.x, this.y), with an additional rotation applied.
        ctx.fill();

        ctx.restore();
        // The context is restored to its previous state before the translation and rotation.

    }
}