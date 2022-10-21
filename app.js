let slider=document.getElementById('slider')
let item2=slider.getElementsByClassName('p1')
console.log(item2)


let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}



let slider_meals=document.getElementById('meals-slider')
let item2_meals=slider_meals.getElementsByClassName('meal')

function next_mealst(){
    slider_meals.append(item2_meals[0])

}

function prev_meals(){
    slider_meals.prepend(item2_meals[item2_meals.length-1])
}

let slider_raning=document.getElementById('slider-training')
let item2_raning=slider_raning.getElementsByClassName('firsttraining')

function next_traning(){
    slider_raning.append(item2_raning[0])

}

function prev_traning(){
    slider_raning.prepend(item2_raning[item2_raning.length-1])
}


let salla_init=document.querySelector('#salla_init')
let salla=document.querySelectorAll('.fa-shopping-cart')

console.log(salla)

let counter=0;
salla.forEach(element => {
    element.addEventListener('click',(e) => {
        console.log('1')
        salla_init.innerHTML=counter++;
       
    })
});
