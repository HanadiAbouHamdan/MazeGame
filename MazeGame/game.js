
 var begin=document.getElementById('start');
 var boundaries=document.getElementsByClassName('boundary');
var final=document.getElementById('end');
var score=0;
for(let i=0;i<boundaries.length;i++){
    boundaries[i].addEventListener('mouseover',()=>{
        boundaries[i].style.border='1px solid red';
        const msg=document.getElementById('status');
        msg.textContent='You Lose';
    });
}

begin.addEventListener('click',()=>{
    for (let i=0; i<boundaries.length;i++){
        boundaries[i].style.border='1px solid black';
        const msg=document.getElementById('status');
        msg.textContent='You have another Chance';
    }
})