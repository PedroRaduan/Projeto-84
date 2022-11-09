canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
img_image = "";


window.addEventListener("keydown", tecla_pressionada);

function adicionar() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, ao carregar essa variável
	backgroundImgTag.src = img_image;   // carregar a imagem
    console.log(img_image)

}

function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function tecla_pressionada(e){
    tecla = e.keyCode;
    console.log(tecla);



    if(tecla >= 97 && tecla<=122) (tecla >=65 && tecla < 90)
    {
        alfabeto();
        document.getElementById("tecla-direcional").innerHTML="Você pressionou uma tecla alfabética";
        
}

if(tecla >= 48 && tecla<=57)
{
    numeros();
    document.getElementById("tecla-direcional").innerHTML="Você pressionou um numero";
    
}

if(tecla >= 37 && tecla<=40)
{
    direcional();
    document.getElementById("tecla-direcional").innerHTML="Você pressionou uma tecla direcional";
    
}

if(tecla == 17)
{
    especiais();
    document.getElementById("tecla-direcional").innerHTML="Você pressionou uma tecla especial";
    
}

if(tecla == 18)
{
    especiais();
    document.getElementById("tecla-direcional").innerHTML="Você pressionou uma tecla especial";
    
}

if(tecla == 27)
{
    especiais();
    document.getElementById("tecla-direcional").innerHTML="Você pressionou uma tecla especial";
    
}
}


function especiais(){
    img_image = "especiais.png";
    adicionar();
}

function direcional(){
    img_image = "setas.png";
    adicionar();

}


function numeros(){
    img_image = "numeros.webp"
    adicionar();
}

function alfabeto(){
img_image = "alfabeto.png";
adicionar();

}









