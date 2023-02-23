
 
 document.addEventListener("DOMContentLoaded",function(event){
 
 
 var begin=document.getElementById('start');
 var boundaries=document.getElementsByClassName('boundary');
var msg=document.getElementById('status');
var final=document.getElementById('end');
var count=0;
var score=0;



begin.addEventListener('click', function() {
    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].style.border = '1px solid black';
    }
    score=0;
    count=0;
    msg.textContent = 'Your score is' +score;
    
});

begin.addEventListener('mouseover', function() {
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].style.border = '1px solid black';
    }
    msg.textContent = 'Your score is' +score;
    
});

for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].addEventListener('mouseover', function() {
        for (var j = 0; j < boundaries.length; j++) {
        boundaries[j].style.border = '1px solid red';}
        var msg = document.getElementById('status');
        score -= 10;
        msg.textContent = 'You Lose! Your score is' +score;
        count++;
        console.log(count);
        if(count>5){
        msg.textContent='No REMAIN CHANCES!';
        }
    });
    }

final.addEventListener('mouseover',function(b){
if (count==0){
    score+=5;
    msg.textContent='You win!Your score is'+score;
}
})
 })