
var color = "#000000";
var size = 10;
var paint = false;


function painting (event){
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d"); //context here, is the place where we draw
    let x = event.clientX; // axis x of the plane
    let y = event.clientY; // axis y of the plane
    console.log(paint);
    if (paint) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, size, size);
    }
}

function activate(){
    paint = true;
}


function deactivate(){
paint = false;
}

// var add = ( x, y ) => x + y;