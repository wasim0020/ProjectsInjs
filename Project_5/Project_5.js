const RandomColor = function (){
    const hexa = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0;i<6;i++){
        color+=hexa[Math.floor(Math.random() * 16)];
}
return color;
}
let StopMe;
console.log(RandomColor());

const startChangeColor = function(){
  if(!StopMe){
    StopMe = setInterval(() => {
        document.body.style.backgroundColor = RandomColor();
      }, 1000 );
  }
}

const stopChangeColor = function(){
    clearInterval(StopMe)
    StopMe = null;
}


document.querySelector('#start').addEventListener('click',startChangeColor);
document.querySelector('#stop').addEventListener('click',stopChangeColor);