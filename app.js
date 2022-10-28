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

// let left=document.querySelector('.fa-angle-left')
// let right=document.querySelector('.fa-angle-right')

// let opnoins=document.querySelector('.opnoins')
// let item2=opnoins.getElementsByClassName('p1')
// let counterlength=item2.length

// for (let i = 0; i < item2.length; i++) {
//   i.classList.remove('showc')
  
// }


//   item2.item(n-1).classList.add("visible")



  // left.addEventListener('click',(e) => {

  //   console.log('left')

  //   opnoins.append(item2[0])

  //   item2[0+1].style.display='block'


  // })


  // right.addEventListener('click',(e) => {
  //   console.log('right')

  // })

// function prevv(){

//   for (let i = 0; i < item2.length; i++) {
// console.log(item2[i])
// if(item2[i].classList.contains('showc'))
// item2[i].style.display='block'
// item2[i+1].style.display='none'
//   }

// }
// function nextt(){
//   for (let i = 0; i < item2.length; i++) {
//     console.log(item2[i])
//     if(item2[i].classList.contains('showc'))
//     item2[i].style.display='block'
//     item2[i+1].style.display='none'
//       }
// }






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


function get_duplicate_elements(arr) {
  // write your code here
  let a=[]
  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < i; j++) {
      if (arr[i]==arr[j]){
        // arr.append(arr[i]) 
    
        console.log(arr[i])
a.push(arr[i])
      
    }
  
   }
    
  }
  return a

}


console.log(get_duplicate_elements( [6,3,12,12]))



let sidemenu=document.getElementById('sidemenu')

console.log(sidemenu);
function openmenu(){
    // sidemenu.style.left='70%'
    sidemenu.classList.toggle("test")
    console.log('hello');
}
