localStorage.setItem('count1', 11);
let score1 = localStorage.getItem('count1');
document.getElementById("score1").innerHTML=score1;

//function for local score counter 
function myFun(s)
{
    s++;
    localStorage.setItem('CounterScore', s);   
    document.getElementById("newScore").innerHTML=localStorage.getItem("CounterScore");
    score1=s;
}


sessionStorage.setItem('count2', 10);
let score2 = sessionStorage.getItem('count2');
document.getElementById("score2").innerHTML=score2;

//function for session score counter 
function myFun2(score)
{
    score++;
    sessionStorage.setItem('CounterScore', score);
    document.getElementById("newScore2").innerHTML=sessionStorage.getItem('CounterScore');
    score2=score;
    //sessionStorage.clear();
}