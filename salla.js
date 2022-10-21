

let counter=0
let txtinput=document.querySelector('#txtinput')

function add(){
counter++
txtinput.innerHTML=counter
}

function sub(){
    counter--
    txtinput.innerHTML=counter
}