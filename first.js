//Question: Write a program to demonstrate how a function can be passed as a parameter to another function.

//inner function
function print()
{
    console.log("Simple Interest is : ");
}

// outer function
function SimpleInterest(p, t, r, print)
{
    var SI=p* t* r;
    SI= SI/100;
    print();
    console.log(SI);
}

const p=20;
const t=10;
const r= 10;

SimpleInterest(p, t, r, print);