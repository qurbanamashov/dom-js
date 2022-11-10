// 1.  3 ədəd div yaradırsız,hər hansı birinə click olunanda background color dəyişir. 
// 1-ci div`ə click olunanda blue,
// 2-ci div`ə click olunanda red,
// 3-cü div`ə click olunanda green olsun.

function deyis() {
    document.getElementById("reng1").style.backgroundColor = "blue";
}
document.getElementById("reng1").addEventListener("click",deyis);

function deyis2() {
    document.getElementById("reng2").style.backgroundColor = "red";
}
document.getElementById("reng2").addEventListener("click",deyis2);

function deyis3() {
    document.getElementById("reng3").style.backgroundColor = "green";
}
document.getElementById("reng3").addEventListener("click",deyis3);




// 2. 4 function yaradirsiz Toplama(),Cixma(),Bolme(),Vurma().Switch case ile bu 4 işləmdən
//  biri seçiləndə həmin hesablamanı console.log`a çıxartsın.
var num1=parseInt(prompt("ilk ededi daxil edin"));
var num2=parseInt(prompt("ikinci ededi daxil edin"));
var isare = prompt("movcu riyazi isharelerden(* / + -) yanliz birini  daxil edin")
var cem = toplama(num1,num2);
var ferq = cixma(num1,num2);
var qismet = bolme(num1,num2);
var hasil = vurma(num1,num2);
function toplama(num1,num2){
    return num1+num2;
}
function cixma(num1,num2){
    return num1-num2;
}
function bolme(num1,num2){
    return num1/num2
}
function vurma(num1,num2){
    return num1 * num2
}
switch (isare) {
    case ("+"):
        alert("cem beraberdi  " + cem);
        break
    case ("-"):
        alert("ferq beraberdir  " + ferq);
        break
    case ("/"):
        alert("qismet beraberdir  " + qismet);
        break
    case ("*"):
        alert("hasil beraberdir  " + hasil);
        break
}


