

var a=document.getElementById('obt-mrks');
var b=document.getElementById('badge');
console.log(a)
 a.innerText=localStorage.getItem("data");
if(localStorage.getItem("data")==200){
    b.innerText=`congrats you got gold badge`;
}
else if(localStorage.getItem("data")>100 && localStorage.getItem("data")<200){
    b.innerText=`congrats you got silver badge`;
}
else if(localStorage.getItem("data")<100){
    b.innerText=`congrats you got bronze badge`;
}

