function validation(){
let username = document.getElementById("name").value
let useremail = document.getElementById("email").value
let usermobile = document.getElementById("mobile").value
let usermessage = document.getElementById("message").value
let userStatus = false;
let emailStatus = false;
let mobileStatus = false;
let messageStatus = false;
let emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let numExp = /^[0-9]+$/
let alphaExp = /^[A-Za-z]+$/


if(username === ""){
    document.getElementById("nameerror").innerHTML = "Please Enter Name";
}else{
    if(username.match(alphaExp)){
        document.getElementById("nameerror").innerHTML = "";
        userStatus = true;
    }else{
        document.getElementById("nameerror").innerHTML = "Please Enter Characters Only";
    }
}

if(useremail === ""){
    document.getElementById("emailerror").innerHTML = "Please Enter Email Id"
}else{if(useremail.match(emailExp)){
    document.getElementById("emailerror").innerHTML = ""
    emailStatus = true;
}else{
    document.getElementById("emailerror").innerHTML = "Please Enter Valid Email Id"
}}

if(usermobile === ""){
    document.getElementById("mobileerror").innerHTML = "Please Enter Mobile Number"
}else{
    if(usermobile.match(numExp)){
        if(usermobile.length == 10){
            document.getElementById("mobileerror").innerHTML = ""
            mobileStatus = true;
        }else{
            document.getElementById("mobileerror").innerHTML = "Please Enter 10 Digit mobile Number"
        }
    }else{
        document.getElementById("mobileerror").innerHTML = "Please Enter Numbers only"
    }
}
    
    if(usermessage === ""){
        document.getElementById("messageerror").innerHTML = "Please Enter Message";
    }else{
        document.getElementById("messageerror").innerHTML = "";
        messageStatus = true;
    }
    
    
    
    if(userStatus === true && emailStatus === true && mobileStatus === true && messageStatus === true){
        return true;
    }else{
        return false;
    }
    
}






// counter up jquery code start from here
$(".count").counterUp({
    delay: 10,
    time: 2000,
  });

// counter up jquery code end from here




// review part start from here
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// review part end from here