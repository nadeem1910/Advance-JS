// Syntax --> <event-target>.addEventListener(<event-type> , <function->action>)
const t1 = performance.now()
function changeText()
{
    let para = document.getElementById('fpara')
    para.innerText = 'Hello Nadeem'
}

let para = document.getElementById('fpara')
para.addEventListener('click',changeText)

//para.removeEventListener('click',changeText)

let anchorElement = document.getElementById('fanchor')

function change(event){
    event.preventDefault();
    anchorElement.textContent = "Clicked!!!"
}

anchorElement.addEventListener('click',change);

let paras = document.querySelectorAll('p')

function alertPara(){
    alert("You have clicked on " + event.target.textContent)
}

for(let i = 0;i<paras.length;i++){
    let para = paras[i]
    para.addEventListener('click', alertPara)
}
const t2 = performance.now()
console.log("performance time -: "+ (t2-t1))