let vidas = 1
let tempo = 15

let criarMosquitoTempo = 1500

//Buscando os valores da screen 
let width = window.innerHeight;
let height = window.innerWidth;

window.addEventListener("resize", () => {
  width = window.innerHeight;
 height = window.innerWidth;
  console.log(height, width)

});

console.log(height, width);

function positionRandomica(){

  //remover o mosquito anterior e afetar pontos de vida


  if(document.getElementById("mosquito")){
    document.getElementById("mosquito").remove()
    
    if(vidas > 3){
        window.location.href = "fim_de_jogo.html"
    }else{
    document.getElementById("v"+vidas).src = "img/coracao_vazio.png"

    vidas++}
  }

  //Gerando números entre o intervalo da height e da width especificando a área do elemento html
let positionX = Math.floor(Math.random()*height) - 90 //decremento de 90 posi contamos com o tamnho da img
let positionY = Math.floor(Math.random()*width) - 90  

//Condição para evitar que os valores seja negativos e por consequência faça o mosquito sumir da tela:

positionX = positionX < 0 ? 0: positionX
positionY = positionY < 0 ? 0: positionY

console.log(positionX, positionY)


//Criar o elemento html (mosquito)
let mosquito = document.createElement("img")
mosquito.src = "img/mosquito.png"
mosquito.className = tamanhoAleatorio()+" "+ladoAleatorio() //adicionando as classes
mosquito.style.left = positionX + "px"
mosquito.style.top = positionY + "px"
mosquito.style.position = "absolute"
mosquito.id = "mosquito"
mosquito.onclick = function(){
  this.remove()  
}

document.body.appendChild(mosquito)

}

let criarMosquito = setInterval( function(){positionRandomica()}, criarMosquitoTempo)


function tamanhoAleatorio(){
  let classe = Math.floor(Math.random()*3)

  switch(classe){
    case 0:
      return "mosquito1"
    case 1:
      return "mosquito2"
    case 2:
      return "mosquito3"
  }

}

function ladoAleatorio(){
  let classe = Math.floor(Math.random()*2)

  switch(classe){
    case 0:
      return "ladoA"
    case 1:
      return "ladoB"
  }

}

document.getElementById("cronometro").innerHTML = tempo

var cronometro = setInterval(function(){

tempo-=1

if(tempo<0){
  clearInterval(cronometro)
  clearInterval(criarMosquito)
  window.location.href = "vitoria.html"

}else{
document.getElementById("cronometro").innerHTML = tempo}

}, 1000)

let nivel = window.location.search

nivel = nivel.replace("?"," ") //Parâmetro de nivel

if(nivel === "normal"){
  criarMosquitoTempo = 1500
}else if(nivel === "difícil"){
  criarMosquitoTempo = 1000
}else if(nivel === "chucknorris"){
  criarMosquitoTempo = 750 
}