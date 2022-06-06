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
    let s3=validate3();
    let s4=validate4();
    let s5=validate5();
    console.log(s1 && s2 && s3 && s4 && s5 );
    return (s1 && s2 && s3 && s4 && s5  );
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
        errorNode1.innerHTML="Username should be min 6 and max 12 characters long";
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
        errorNode2.innerHTML="Password should contain atleast one digit, small letter and capital letter.Password should be min 6 and max 15 characters long";
        passNode.style.border=errorBorder;
        return false;
    }
    else{
        passNode.style.border=successBorder;
        return true;
    }
}
function validate3(){
    let password2=passNode.value;  
    let c_password=cpassNode.value;  
    errorNode3.innerHTML="";  
    if(c_password===''){
        errorNode3.innerHTML="Confirm Password is required";
        cpassNode.style.border=errorBorder;
        return false;
    }
    else if(c_password!=password2){
        errorNode3.innerHTML="Both passwords should match";
        cpassNode.style.border=errorBorder;
        return false;
    }
    else{
        cpassNode.style.border=successBorder;
        return true;
    }
}
function validate4(){
    let email=emailNode.value; 
    errorNode4.innerHTML="";  
    let ss1=email.substring(0,email.indexOf('@'));
    let ss2=email.substring(email.indexOf('@')+1);
    console.log(ss1);
    console.log(ss2);
    if(email===''){
        errorNode4.innerHTML="Email Id is required";
        emailNode.style.border=errorBorder;
        return false;
    }
    else if(!email.includes('@')){
        errorNode4.innerHTML="Email Id should contain @";
        emailNode.style.border=errorBorder;
        return false;
    }
    else if (ss1==='' || ss2===''){
        errorNode4.innerHTML="Invalid Email id";
        emailNode.style.border=errorBorder;
        return false;
    }
    else{
        emailNode.style.border=successBorder;
        return true;
    }
}
function validate5(){
    let mobile=contactNode.value;  
    let regExp= new RegExp("^[0-9]{10}$");  
    errorNode5.innerHTML="";  

    if(mobile===''){
        errorNode5.innerHTML="Mobile is required";
        contactNode.style.border=errorBorder;
        return false;
    }
    else if(regExp.test(mobile)==false){
        errorNode5.innerHTML="Please enter valid mobile number";
        contactNode.style.border=errorBorder;
        return false;
    }
    else{
        contactNode.style.border=successBorder;
        return true;
    }
}