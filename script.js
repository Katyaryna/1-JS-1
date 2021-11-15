let arr=['Katya', '18,5', '2003'];

console.log(arr[0]);
console.log(arr[1]);

arr[2]='Kamenko';
console.log(arr[2]);

arr.push('Belarus');
arr.unshift('Hi!');

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log(arr.length);

let str='Every woman on earth! Every man in the world!';
str=str.replace('woman','person');
str=str.replace('man','person');
console.log(str);

