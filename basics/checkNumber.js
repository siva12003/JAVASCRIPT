function check(number){
if (number <200 && (!(number ==150 || (number>=110 && number<=120) ))) {
    console.log("given number is true the condition");
}else{
    console.log("given number false the condition");
}
}
check(150)
check(200)
check(111)
check(120)
check(180)
check(95)
check(110)
check(113)