
let color = "#000000";
let size = 10;
let paint = false;



function painting (event){
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d"); //context here, is the place where we draw
    let x = event.clientX; // axis x of the plane
    let y = event.clientY; // axis y of the plane
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

function eraser (){

}

function pencil (){

}

// var add = ( x, y ) => x + y;