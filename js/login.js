/*menubar*/
const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navmenu.classList.toggle("open");

})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navmenu.classList.remove("open");
}))
/******************************/


//show& hide passvar state= false; for signup
var state= false;
function toggle(){
    if(state){
	document.getElementById("password1").setAttribute("type","password");
	document.getElementById("eye").style.color='black';
	state = false;
    }
    else{
	document.getElementById("password1").setAttribute("type","text");
	document.getElementById("eye").style.color='#5887ef';
	state = true;
    }
}
/******************************** */

/*swip between signin & signup */
const register = document.querySelector(".register-now");
const signup = document.querySelector(".signup");
const signin = document.querySelector(".signin");

register.addEventListener("click", () => {
    register.classList.toggle("appear");
    signup.classList.toggle("appear");
    signin.classList.toggle("appear");

})
/*************************************/


/* validation*/

function special(password1){ // for special char
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(password1);
}
function num(password1){ // to have at least a number
    const number = /[0-9]/;
    return number.test(password1);
}

function upper(password1){ // to have  uppercase letter
    const uppercase = /[A-Z]/;
    return uppercase.test(password1);
}

function validation_signup(){

    let password1 = document.getElementById("password1").value;
    let passlength = password1.length; //char 
    let phone = document.getElementById("phone").value;  
    let phonelength = phone.length; //length of number
    let x =isNaN(phone);
    if( special(password1) == true && passlength >= 8 && password1.includes(" ") == false ){
    

        /* check gender & length,number of phone,password*/
        if(phonelength!==11) //check if he 11 or not
        {
            alert("Your Phone Number is Not Valid");
            e.preventDefault();
        }
        else if (upper(password1) !==true) { 
            alert("Your Password Must Have Uppercase");
            e.preventDefault();
        }
        else if (x) { //check if he number or not
            alert("Your Must Enter Phone Number!!");
            e.preventDefault();
        }
        else if (num(password1) !== true) {
            alert("Your Password Must Contain at Least a Number");
            e.preventDefault();
        }
        else if(document.getElementById('male').checked) {
            alert("Signup successfull");
        }
        else if(document.getElementById('female').checked) {
            alert("Signup successfull");
        }
        else{
            alert("Enter Your Sex");
            e.preventDefault();
        }
        /**********************/
        
    }
    
    else{
        alert("change Your Password");
        e.preventDefault();
    }
}


alert("For signning up a New Account Your Password must Contain:- \n  at Least 8 characters\n  NO SPACES\n  special Character\n  at Least one Number\n  an Uppercase Letter ");

/*******************************/

/* avtive link to show where are you */
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    console.log(link);
  }
})
/*************************/