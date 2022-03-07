//Write a program to demonstrate how a function can be passed as a parameter to another function.

//inner function
function multiply(p,t,r)
{
    var res= p*t*r;
    return res;
}

// outer function
function SimpleInterest(multiply)
{
    var SI=multiply;
    SI= SI/100;
    console.log(SI);
}

const p=20;
const t=10;
const r= 10;

SimpleInterest(multiply(p, t, r));