// An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments.


let res = (firstName, secondName) => {
    let ans = firstName.substring(0, 1) + secondName.substring(0,1);
    return ans;
}


let firstName = 'Roger';
let secondName = 'Waters';


let r= res(firstName, secondName);
console.log(r);