
function reverse(str){
    
const array=[];
const length=str.length-1

for(i=length;i>=0;i--){
 array.push(str[i]);
}
let a= array.join('');
 if (str==a) {
     console.log("palindrome");
 }else{
     console.log("not palindrome");
 }
}
reverse("siva")
reverse("noon")
