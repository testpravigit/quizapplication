console.log("hello")
function returnId(id){
    return document.getElementById(id);
}
var uname=returnId('uname'),
form=returnId('form'),
pass=returnId('pass'),
submit=returnId('submit'),
msg=returnId('message');



form.addEventListener('submit',(event)=>{
    event.preventDefault();
    var a=namevalidator(uname,pass);
    if(a==true){
       msg.innerHTML=`You are successfully logged into your account`;
       setTimeout(()=>{
        window.location.assign("http://127.0.0.1:5500/quiz1.html")

       },2000)
      
    }
    else{
        msg.innerHTML="Login faild";
        msg.style.color='red';
        

    }
    
        
})

function namevalidator(name,password){
    if(name.value.trim()=='praveen' &&password.value.trim()=='1234'){
        name.style.border='2px solid green';
        password.style.border='2px solid green';
        return true;
    }
    else{
         name.style.border='2px solid red';
         password.style.border='2px solid red';
        return false;
    }

}


