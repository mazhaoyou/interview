/* for (var i = 0; i < 10; i++) {

    setTimeout(function () {
        console.log('i', i)
    }, 20)
} */

/* var a = 2;
b = a;
a = 1;
console.log('a=' + a, 'b=' + b);
 */
var a = {
    "n": 1
};
a.x = a = {
    "n": 2
};
b = a;
console.log('a=', a.x);
console.log('b=', b);