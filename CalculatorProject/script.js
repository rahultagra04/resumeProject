var one=document.getElementById("one");
var input=document.getElementById("text-area");
one.addEventListener('click',function(){
    if(input.innerText=="+" || input.innerText=="-" || input.innerText=="/" || input.innerText=="*" || input.innerText=="%" || input.innerText=="ncr" || input.innerText=="Error"){
        input.innerText="";
    }
    input.innerText +="1";
    input.style.fontSize="4vh";
    input.style.fontWeight="bold";
});
var negative=document.getElementById("negative");
negative.addEventListener('click',function(){
    if(input.innerText=="+" || input.innerText=="-" || input.innerText=="/" || input.innerText=="*" || input.innerText=="%" || input.innerText=="ncr" || input.innerText=="Error"){
        input.innerText="";
    }
    if(input.innerText==""){
        input.innerText +="-";
        input.style.fontSize="4vh";
        input.style.fontWeight="bold";
    }
});
var seven=document.getElementById("seven");
seven.addEventListener('click',function(){
    if(input.innerText=="+" || input.innerText=="-" || input.innerText=="/" || input.innerText=="*" || input.innerText=="%" || input.innerText=="ncr" || input.innerText=="Error"){
        input.innerText="";
    }
    input.innerText +="7";
    input.style.fontSize="4vh";
    input.style.fontWeight="bold";
});
var eight=document.getElementById("eight");
eight.addEventListener('click',function(){
    if(input.innerText=="+" || input.innerText=="-" || input.innerText=="/" || input.innerText=="*" || input.innerText=="%" || input.innerText=="ncr" || input.innerText=="Error"){
        input.innerText="";
    }
    input.innerText +="8";
    input.style.fontSize="3vh";
    input.style.fontWeight="bold";
});
var nine=document.getElementById("nine");
nine.addEventListener('click',function(){
    if(input.innerText=="+" || input.innerText=="-" || input.innerText=="/" || input.innerText=="*" || input.innerText=="%" || input.innerText=="ncr" || input.innerText=="Error"){
        input.innerText="";
    }
    input.innerText +="9";
    input.style.fontSize="4vh";
    input.style.fontWeight="bold";
});
var two=document.getElementById("two");
two.addEventListener('click',function(){
    if(input.innerText=="+" || input.innerText=="-" || input.innerText=="/" || input.innerText=="*" || input.innerText=="%" || input.innerText=="ncr" || input.innerText=="Error"){
        input.innerText="";
    }
    input.innerText +="2";
    input.style.fontSize="4vh";
    input.style.fontWeight="bold";
});
var three=document.getElementById("three");
three.addEventListener('click',function(){
    if(input.innerText=="+" || input.innerText=="-" || input.innerText=="/" || input.innerText=="*" || input.innerText=="%" || input.innerText=="ncr" || input.innerText=="Error"){
        input.innerText="";
    }
    input.innerText +="3";
    input.style.fontSize="4vh";
    input.style.fontWeight="bold";
});
var four=document.getElementById("four");
four.addEventListener('click',function(){
    if(input.innerText=="+" || input.innerText=="-" || input.innerText=="/" || input.innerText=="*" || input.innerText=="%" || input.innerText=="ncr" || input.innerText=="Error"){
        input.innerText="";
    }
    input.innerText +="4";
    input.style.fontSize="4vh";
    input.style.fontWeight="bold";
});
var five=document.getElementById("five");
five.addEventListener('click',function(){
    if(input.innerText=="+" || input.innerText=="-" || input.innerText=="/" || input.innerText=="*" || input.innerText=="%" || input.innerText=="ncr" || input.innerText=="Error"){
        input.innerText="";
    }
    input.innerText +="5";
    input.style.fontSize="4vh";
    input.style.fontWeight="bold";
});
var six=document.getElementById("six");
six.addEventListener('click',function(){
    if(input.innerText=="+" || input.innerText=="-" || input.innerText=="/" || input.innerText=="*" || input.innerText=="%" || input.innerText=="ncr" || input.innerText=="Error"){
        input.innerText="";
    }
    input.innerText +="6";
    input.style.fontSize="4vh";
    input.style.fontWeight="bold";
});
var zero=document.getElementById("zero-key");
zero.addEventListener('click',function(){
    if(input.innerText=="+" || input.innerText=="-" || input.innerText=="/" || input.innerText=="*" || input.innerText=="%" || input.innerText=="ncr" || input.innerText=="Error"){
        input.innerText="";
    }
    input.innerText +="0";
    input.style.fontSize="4vh";
    input.style.fontWeight="bold";
});
var operand1;
var operation;
var plus=document.getElementById("plus");
plus.addEventListener('click',function(){
    if(input.innerText==""){
        input.innerText="";
    }
    else if(input.innerText=="+"||input.innerText=="ncr"||input.innerText=="/"||input.innerText=="*"||input.innerText=="-"||input.innerText=="%" ){
        input.innerText="Error";
    }
    else{
    operand1=parseFloat(input.innerText);
    operation="+";
    input.innerText="+";
    input.style.fontSize="4vh";
    input.style.fontWeight="bold";
    }
});
var minus=document.getElementById("minus");
minus.addEventListener('click',function(){
    if(input.innerText=="")
    if(input.innerText==""){
        input.innerText="";
    }
    else if(input.innerText=="+"||input.innerText=="ncr"||input.innerText=="/"||input.innerText=="*"||input.innerText=="-"||input.innerText=="%" ){
        input.innerText="Error";
    }
    else{
    operand1=parseFloat(input.innerText);
    operation="-";
    input.innerText="-";
    input.style.fontSize="4vh";
    input.style.fontWeight="bold";
    }
});
var multply=document.getElementById("multiply");
multiply.addEventListener('click',function(){
    if(input.innerText==""){
        input.innerText="";
    }
    else if(input.innerText=="+"||input.innerText=="ncr"||input.innerText=="/"||input.innerText=="*"||input.innerText=="-"||input.innerText=="%" ){
        input.innerText="Error";
    }
    else{
    operand1=parseFloat(input.innerText);
    operation="*";
    input.innerText="*";
    input.style.fontSize="4vh";
    input.style.fontWeight="bold";
    }
});
var divide=document.getElementById("divide");
divide.addEventListener('click',function(){
    if(input.innerText==""){
        input.innerText="";
    }
    else if(input.innerText=="+"||input.innerText=="ncr"||input.innerText=="/"||input.innerText=="*"||input.innerText=="-"||input.innerText=="%" ){
        input.innerText="Error";
    }
    else{
    operand1=parseFloat(input.innerText);
    operation="/";
    input.innerText="/";
    input.style.fontSize="4vh";
    input.style.fontWeight="bold";
    }
});
var operand2;
var result;
var equal=document.getElementById("equal");
equal.addEventListener('click',function(){
    if(input.innerText==""){
        input.innerText="";
    }
    else if(operation=="%"){
        operand2=100;
        if(input.innerText!="" && input.innerText!="%"){
            operand1=parseFloat(input.innerText);
        }
        result=eval(operand1+" "+'/'+" "+operand2);
        input.innerText=result;
    }
    else if(operation=="square" || operation=="cube" || operation=="sqrt"){
        operand1=result;
    }
    else if(operation=="ncr"){
        operand2=parseFloat(input.innerText);
        result=((factorial(operand1))/((factorial(operand2))*(factorial(operand1-operand2))));
        input.innerText=result;
    }
    else{
        operand2=parseFloat(input.innerText);
        result=eval(operand1+" "+operation+" "+operand2);
        input.innerText=result;
    }
});
var percent=document.getElementById("percent");
percent.addEventListener('click',function(){
    if(input.innerText==""){
        input.innerText="";
    }
    else if(input.innerText=="+"||input.innerText=="ncr"||input.innerText=="/"||input.innerText=="*"||input.innerText=="-"||input.innerText=="%" ){
        input.innerText="Error";
    }
    else{
        operand1=parseFloat(input.innerText);
    operation="%";
    input.innerText="%";
    input.style.fontSize="4vh";
    input.style.fontWeight="bold";
    }
});
var ac=document.getElementById("ac");
ac.addEventListener('click',function(){
    result=0;
    input.innerText="";
});
var decimal=document.getElementById("decimal");
decimal.addEventListener('click',function(){
    if(input.innerText=="+" || input.innerText=="-" || input.innerText=="/" || input.innerText=="*" || input.innerText=="%" || input.innerText=="ncr" || input.innerText=="Error"){
        input.innerText="";
    }
    input.innerText +=".";
    input.style.fontSize="4vh";
    input.style.fontWeight="bold";
});
var square=document.getElementById("square");
square.addEventListener('click',function(){
    if(input.innerText==""){
        input.innerText="";
    }
    else{
        operand1=parseFloat(input.innerText);
        operation="square";
        result=eval(operand1+" "+'*'+" "+operand1);
        input.innerText=result;
        input.style.fontSize="4vh";
        input.style.fontWeight="bold";
    }
});
var cube=document.getElementById("cube");
cube.addEventListener('click',function(){
    if(input.innerText==""){
        input.innerText="";
    }
    else{
        operand1=parseFloat(input.innerText);
        operation="cube";
        result=eval(operand1+" "+'*'+" "+operand1+" "+'*'+" "+operand1);
        input.innerText=result;
        input.style.fontSize="4vh";
        input.style.fontWeight="bold";
    }
});
var sqrt=document.getElementById("sqrt");
sqrt.addEventListener('click',function(){
    if(input.innerText==""){
        input.innerText="";
    }
    else{
        operand1=parseFloat(input.innerText);
        operation="sqrt";
        result=Math.sqrt(operand1);
        input.innerText=result;
        input.style.fontSize="4vh";
        input.style.fontWeight="bold";
    }
});
function factorial(n){
    var ans=1;
    for(var i=1;i<=n;i++){
        ans=ans*i;
    }
    return ans;
}
var ncr=document.getElementById("ncr");
ncr.addEventListener('click',function(){
    if(input.innerText==""){
        input.innerText="";
    }
    else if(input.innerText=="+"||input.innerText=="ncr"||input.innerText=="/"||input.innerText=="*"||input.innerText=="-"||input.innerText=="%" ){
        input.innerText="Error";
    }
    else{
        operand1=parseFloat(input.innerText);
        operation="ncr";
        input.innerText="ncr"
        input.style.fontSize="4vh";
    input.style.fontWeight="bold";
    }
});