var gallery = document.getElementById("panelImg");
var images = ["Imagenes/n1.png", "Imagenes/n2.png", "Imagenes/n3.jpg", "Imagenes/n4.png", "Imagenes/n5.png"];
var index = 0;

function nextImg() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    gallery.src = images[index];
}

function previousImg() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    gallery.src = images[index];
}