
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

function eraser (){
document.getElementById("canvas")//.style.cursor = "url (eraser.png), default";
color = "#FFFFFF";
document.getElementById("colorselector").setAttribute("disabled", "");
}

function pencil (){
    document.getElementById("canvas")//.style.cursor = "url (pencil.png), default";
    color = document.getElementById("colorselector").value;
    document.getElementById("colorselector").removeAttribute("disabled");
}

function scolor (){
    color = document.getElementById("colorselector").value;
}

function sizeselector (number){
    size=number;
}

function save (){
    var canvas = document.getElementById("canvas");
    var image = canvas.toDataURL("image/png");
    this.href = image;
    //document.getElementById("saveasimage").addEventListener("click", save, false);
}

// var add = ( x, y ) => x + y;