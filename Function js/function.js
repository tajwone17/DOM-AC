function evenIfy(num) {
var result;
if(num%2==0)
{
    result=num;
}
else{
    result=num*2;
}
return result;
}
function evenIfy_all(num) {
    var evenArray = [];
    for (let i = 0; i < num.length; i++) {
        const nums = num[i];
        var result = evenIfy(nums);
        evenArray. push(result);
    }
    return evenArray;
}
var num = [2, 2, 7, 9, 0, 5];
var num_even = evenIfy_all(num);
console.log(num_even);