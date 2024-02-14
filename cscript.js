const lablecount=document.getElementById("countlable");
const increase=document.getElementById("increase");
const decrease=document.getElementById("decrease");
const reset=document.getElementById("reset");
let count=0;
increase.onclick=()=>{
    count++;
    lablecount.textContent=count;

}
decrease.onclick=()=>{
    count--;
    lablecount.textContent=count;

}
reset.onclick=()=>{
    count=0;
    lablecount.textContent=count;

}