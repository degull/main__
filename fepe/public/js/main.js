const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
 const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const deg = 60;     /* 모바일 환경에서 가독성 떨어지면 각도조절,, */
const len = lists.length-1; 
let i = 0; 
let num = 0; 
let active = 0; 

function activation(index, lists){
    for( let el of lists){
        el.classList.remove("on");
    }
    lists[index].classList.add("on");
}

for(let el of lists) {  
    let pic = el.querySelector(".pic");  

    el.style.transform = `rotate(${deg* i}deg) translateY(-100vh)`;
    pic.style.backgroundImage = `url(img/member${i+1}.jpg)`;
    i++; 
}



//prev 버튼 
prev.addEventListener("click", ()=>{
    num++;  
    frame.style.transform = `rotate(${deg* num}deg)`;    

    (active == 0 ) ? active = len : active--;
    activation(active, lists);    
});

//next 버튼
next.addEventListener("click", ()=>{
    num--;   
    frame.style.transform = `rotate(${deg* num}deg)`;   

    (active == len ) ? active = 0 : active++; 
    activation(active, lists);
});