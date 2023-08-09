let imgarea = document.querySelector(".img");
let clickCount =document.querySelector(".clickCount");


function showHeart(){
    const heart = document.createElement("i");
    heart.classList.add("fa-solid");
    heart.classList.add("fa-heart");
    imgarea.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },1000)
}

imgarea.addEventListener("dblclick",function(){
    showHeart();
    counter();
})

let count = 0;
function counter(){
    clickCount.innerHTML =++count;
    
}