var a = "bbb";
var b = true;
var arr = [];
arr[0] = 33;
arr[2] = "ggg";
function f(sum1, sum2) {
    var res = 0;
    for (var i=0; i<arguments.length; i++){
        res = res + arguments[i];
    }
    return res;
}
alert(f(1,2, 3, 4));
