// Logging into an account 
function login(){
    const username = document.getElementById("loginUsername").ariaValueMax;
    const password =document.getElementById("loginPassword").ariaValueMax;

    if (username === "user"&& password === "pasword"){
        alert("Login successful");
    } else {
        alert("Incorrect username or password,Try again!");
    }
}

// creating an account
function createAccount(){
    const username = document.getElementById("createUsername").ariaValueMax;
    const password = document.getElementById("createPassword").ariaValueMax;

    if (username && password){
        alert("Account created successfully");
    } else {
        alert("Please enter a valid username and password");
    }
}

// Open payment modal when "Make Payment" button is clicked 
document.getElementById("showPaymentModal").addEventListener("click",function(){

document.getElementById("paymentModal").style.display = "block";
});

// Close payment modal when close button or outside modal area is clicked 
document.getElementsByClassName("close")[0].addEventListener("click",function(){

document.getElementById("paymentModal").style.display = "none";
})

window.addEventListener("click",function(event){
    if(event.target == document.getElementById("paymentModal")){

document.getElementById("paymentModal").style.display = "none";
    }
})

// Mock PayPal,KCB,Equity payment functions
document.getElementById("paypalBtn").addEventListener("click",function(){
    alert("Redirecting to PayPal");
});

document.getElementById("kcbBtn").addEventListener("click",function(){
    alert("Redirecting to KCB");
});

document.getElementById("google payBtn").addEventListener("click",function(){
    alert("Redirecting to Google Pay");
});

document.getElementById("stripeBtn").addEventListener("click",function(){
    alert("Redirecting to Stripe");
});