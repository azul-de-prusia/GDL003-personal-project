
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
function circle (){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
      
    context.beginPath();
    context.arc(100, 100, 50, 0, 2*Math.PI);
    context.strokeStyle = '#000000';
    context.stroke();
    context.fillStyle = '#FFFFFF';
    context.fill();
    }

function square (){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.rect(20, 40, 50, 50);
    context.strokeStyle = '#000000';
    context.stroke();
    context.fillStyle = '#7f7f87';
    context.fill();
    context.closePath();
}    
//this paragraph opens the image from our documents into the canvas
window.URL = window.URL || window.webkitURL || window.mozURL;
document.getElementById('file').onchange = function() {
    var url = URL.createObjectURL(this.files[0]);
    console.log(url);
    document.getElementById('preview').src = url;
};

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
//document.getElementById("saveasimage").addEventListener("click", save, false)
}

