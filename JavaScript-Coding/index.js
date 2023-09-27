// var n=2;
// function square(num)
// {
//     var ans=num*num;
//     return ans;
// }

// var square2=square(n);
// var square4=square(4);

// getName();
// console.log(x);
// console.log(getName);

// var x=7;

// function getName()
// {
//     console.log("javascript");
// }

// var x=10;
// function getVal(){
//     var y=50;
//     console.log(y);
// }
// console.log(x);
// console.log(window.x);
// console.log(this.x);
// getVal();

function x(){
    var a=7;
       function y(){
        console.log(a);
    }
    return y;
}
var z=x();
console.log(z);
z();

// function x() {

//   for (let i = 1; i <= 5; i++) {
//   function close(x){
//     setTimeout(function () {
//       console.log(x);
//     }, x * 1000);
//   }
//   close(i);
// }
// }
// x();
