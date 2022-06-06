let unameNode=document.getElementById('name');
let emailNode=document.getElementById('mail');
let contactNode=document.getElementById('mobile')

let errorNode1=document.getElementById('error1');
let errorNode2=document.getElementById('error2');
let errorNode3=document.getElementById('error3');

const errorBorder="2px solid red";
const successBorder="2px solid green";
function validateForm(){
    let s1=validate1();
    let s2=validate2();
    let s3=validate3();
    
    console.log(s1 && s2 && s3 )
    return (s1 && s2 && s3 );

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
    let email=emailNode.value; 
    errorNode2.innerHTML="";  
    let ss1=email.substring(0,email.indexOf('@'));
    let ss2=email.substring(email.indexOf('@')+1);
    console.log(ss1);
    console.log(ss2);
    if(email===''){
        errorNode2.innerHTML="Email Id is required";
        emailNode.style.border=errorBorder;
        return false;
    }
    else if(!email.includes('@')){
        errorNode2.innerHTML="Email Id should contain @";
        emailNode.style.border=errorBorder;
        return false;
    }
    else if (ss1==='' || ss2===''){
        errorNode2.innerHTML="Invalid Email id";
        emailNode.style.border=errorBorder;
        return false;
    }
    else{
        emailNode.style.border=successBorder;
        return true;
    }
}
function validate3(){
    let mobile=contactNode.value;  
    let regExp= new RegExp("^[0-9]{10}$");  
    errorNode3.innerHTML="";  

    if(mobile===''){
        errorNode3.innerHTML="Mobile is required";
        contactNode.style.border=errorBorder;
        return false;
    }
    else if(regExp.test(mobile)==false){
        errorNode3.innerHTML="Please enter valid mobile number";
        contactNode.style.border=errorBorder;
        return false;
    }
    else{
        contactNode.style.border=successBorder;
        return true;
    }
}