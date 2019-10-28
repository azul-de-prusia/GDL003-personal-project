var canvasFront = document.getElementById("frontcanvas"),
    canvasBack = document.getElementById("backcanvas"),
    ctxf = canvasFront.getContext("2d"),
    ctxb = canvasFront.getContext("2d");

var canvasWidth = document.getElementById("canvasWidth"),
    canvasHeigth = document.getElementById("canvasHeigth");

var canvasPosition;

var mouseX, mouseY;
    mouseXl = document.getElementById("mouseX"),
    mouseYl = document.getElementById("mouseY");

var tools = [], sizes [];

tools.pencil = document.getElementById("pencil");
tools.eraser = document.getElementById("eraser");

sizes.small = document.getElementById("small");
sizes.medium = document.getElementById("medium");
sizes.large = document.getElementById("large");

var eraserSize = 8;

var canvasClear = document.getElementById("canvasClear");
var fileImg = document.getElementById("fileImg");
var properties = document.getElementById("properties");
var imgWidth = document.getElementById("imgWidth");
var imgHeight = document.getElementById("imgHeight");

var startX = 100, startY = 100;

window.onload = function (){
    this.canvasPosition = canvasBack.getBoundingClientRect();
}

canvasWidth.onchange = function () {
    canvasFront.width = canvasWidth.value;
    canvasBack.width = canvasWidth.value;
}

canvasHeight.onchange = function () {
    canvasFront.height = canvasHeight.value;
    canvasBack.height = canvasHeight.value;
}

canvasFront.onmousemove= function (e) {
    mouseX = e clientX - canvasPosition.left;
    mouseY = e clientY - canvasPosition.top;
    mouseXl.innerHTML = mouseX;
    mouseYl.innerHTML = mouseY;
}

canvasClear.onclick = function () {
    canvasBack.width = canvasBack.width
    canvasFront.width = canvasFront.width
}

addAllHandlers(tools, tool-active);
addAllHandlers(sizes, sizes-active);

 function addAllHandlers(arr, className){
    for (var item in arr){
        arr[item]. onmousedown = addHandler (arr[item] , arr, className);
    }
 }
addAllHandlers(element, arr, className);
