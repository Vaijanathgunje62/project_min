let unameNode=document.getElementById('username');
let passNode=document.getElementById('password');
let cpassNode=document.getElementById('c_password');
let emailNode=document.getElementById('emailid');
let contactNode=document.getElementById('mobile')


let errorNode1=document.getElementById('error1');
let errorNode2=document.getElementById('error2');
let errorNode3=document.getElementById('error3');
let errorNode4=document.getElementById('error4');
let errorNode5=document.getElementById('error5');


const errorBorder="2px solid red";
const successBorder="2px solid green";
function validateForm(){
    let s1=validate1();
    let s2=validate2();
    console.log(s1 && s2);
    return (s1 && s2 );
}

function validate1(){
    let username1=unameNode.value;  
    errorNode1.innerHTML="";  
    if(username1===''){
        errorNode1.innerHTML="username is required";
        unameNode.style.border=errorBorder;
        return false;
    }
    else if(username1.length<6 || username1.length>12){
        errorNode1.innerHTML="Username not found";
        unameNode.style.border=errorBorder;
        return false;
    }
    else{
        unameNode.style.border=successBorder;
        return true;
    }
}
function validate2(){
    let password1=passNode.value;  
    let regExp= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,15})");
    errorNode2.innerHTML="";  
    if(password1===''){
        errorNode2.innerHTML="Password is required";
        passNode.style.border=errorBorder;
        return false;
    }
    else if(regExp.test(password1)==false){
        errorNode2.innerHTML=" Incorect Password";
        passNode.style.border=errorBorder;
        return false;
    }
    else{
        passNode.style.border=successBorder;
        return true;
    }
}

