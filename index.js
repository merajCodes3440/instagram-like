let imgarea = document.querySelector(".img");
let clickCount =document.querySelector(".clickCount");


function showHeart(){
    const heart = document.createElement("i");
    heart.classList.add("fa-solid");
    heart.classList.add("fa-heart");
    imgarea.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },600)
}

imgarea.addEventListener("dblclick",function(){
    showHeart();
    counter();
})
let count = parseInt(localStorage.getItem("like")) || 0;
clickCount.innerHTML = count;
 // let count = localStorage.getItem("like") || 0
//let count = 0;
function counter(){
    count++;
    clickCount.innerHTML = count;
    localStorage.setItem("like",count)
}