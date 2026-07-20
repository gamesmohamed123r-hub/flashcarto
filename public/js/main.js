document.addEventListener('DOMContentLoaded',function(){
      //===========backToTOpBtn===============

 const backToTopBtn =document.getElementById('backToTopBtn');
 if(backToTopBtn){
   window.addEventListener('scroll',function(){
       if(window.pageYOffset>300){
           backToTopBtn.classList.add('show');
       }
       else{
           backToTopBtn.classList.remove('show');
       }
   });
   
   backToTopBtn.addEventListener('click',function(){
       window.scrollTo({
           top:0,
           behavior:'smooth'
       });
   });
 }else{
     console.log("backtopnot found");
 };
 
       //=============sign-up & log-in=================
 
     
 const form =document.getElementById("form");
 const username_input =document.getElementById("username-input");
 const useremail_input =document.getElementById("useremail-input");
 const password_input =document.getElementById("password-input");
 const repassword_input =document.getElementById("repassword-input");
 const error_message = document.getElementById('error-message');
 
 if(form){
     form.addEventListener('submit',(e)=>{ 
        let errors=[]   
         if(username_input){
             errors=signuperrors(username_input.value,useremail_input.value,password_input.value,repassword_input.value)
         }
         else{
             errors=loginerrors(useremail_input.value,password_input.value)
         }
    
         if(errors.length>0){
            e.preventDefault()
            error_message.innerText =errors.join(". ")
         }
     })
     
     function signuperrors(username,useremail,password,repassword){
         let errors=[]
         if(username===''||username==null){
             errors.push('username is required')
             username_input.parentElement.classList.add('incorrect')
         }
         if(useremail===''||useremail==null){
             errors.push('email is required')
             useremail_input.parentElement.classList.add('incorrect')
         }
         if(password===''||password==null){
             errors.push('password is required')
             password_input.parentElement.classList.add('incorrect')
         }
         if(password.length<8){
            errors.push('Password must have at least 8 character')
         }
         if(repassword !== password){
            errors.push('repeated password not match the password')
            password_input.parentElement.classList.add('incorrect')
            repassword_input.parentElement.classList.add('incorrect')
         }
         return errors;
     }

     function loginerrors(useremail,password){
        let errors=[]

         if(useremail===''||useremail==null){
             errors.push('email is required')
             useremail_input.parentElement.classList.add('incorrect')
         }
         if(password===''||password==null){
             errors.push('password is required')
             password_input.parentElement.classList.add('incorrect')
         }
         return errors;

     } 


     const allinputs=[username_input,useremail_input,password_input,repassword_input].filter(input=>input!=null);
     allinputs.forEach(input=>{
        input.addEventListener('input',()=>{
            if(input.parentElement.classList.contains('incorrect')){
                input.parentElement.classList.remove('incorrect')
                error_message.innerText=''
            }
        })
     })
 } else {
     console.error(" form element not found in HTML!");
 }
       
});