// var g=200;
// export{g};
function returnId(id){
    return document.getElementById(id);
}

var form=returnId('form'),
subbtn=returnId('sub-ans'),
one=returnId('13'),
two=returnId('21'),
three=returnId('32'),
four=returnId('42'),
five=returnId('51'),
six=returnId('63'),
seven=returnId('71'),
eight=returnId('84')
;


// // form=returnId('form'),
// pass=returnId('pass'),
// submit=returnId('submit'),
// msg=returnId('message');


// console.log(eight)



form.addEventListener('submit',(event)=>{
    event.preventDefault();
    
    var count=0;
    
  
    if(one.checked==true && one.value=='c'){
       
       
        count=count+25;
      
    }
    if(two.checked==true && two.value=='a'){
        
       
        count=count+25;
      
    }
    if(three.checked==true && three.value=='b'){
        
       
        count=count+25;
      
    }
    if(four.checked==true && four.value=='b'){
        
       
        count=count+25;
      
    }
    if(five.checked==true && five.value=='a'){
        
       
        count=count+25;
      
    }
    if(six.checked==true && six.value=='c'){
        
       
        count=count+25;
      
    }
    if(seven.checked==true && seven.value=='a'){
        
       
        count=count+25;
      
    }
    if(eight.checked==true && eight.value=='d'){
        
       
        count=count+25;
      
    }
    // console.log(count)
   

   

    alert("wait....")
    setTimeout(()=>{
      window.location.assign("http://127.0.0.1:5500/quiz2.html");
   },3000)


   var obj=count
   localStorage.setItem("data",obj);


   
})












