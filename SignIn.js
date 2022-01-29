// navbar search dropdown Option

document.querySelector(".searchbar").addEventListener("click", showsearch);

function showsearch(){
    document.querySelector("form").style.display = "block";
}

// navbar search SUBMIT button function

document.querySelector("form").addEventListener("submit", showproduct);

function showproduct(event){
    event.preventDefault();
    var searchInput = document.querySelector(".typeany").value;
    if(searchInput == "ALL FRUITS"){
        window.location.href = "ProductPage.html";
    }
}

// navbar hide search dropdown Option

document.querySelector(".hidebar").addEventListener("click", closesearch);

function closesearch(){
    document.querySelector("#navform").style.display = "none";
}

// function for go to home page.

document.querySelector(".navbar > div:nth-child(1) + img").addEventListener("click", function(){
    window.location.href = "index.html";
})

// function for go to cart page

document.querySelector(".gotocart").addEventListener("click", function(){
    window.location.href = "cart.html";
})



document.querySelector(".regbtn").addEventListener("click",gonext);
function gonext(){
    document.querySelector(".register").style.display = "block";
    document.querySelector(".loginbtn").style.display = "block";
}

document.querySelector(".loginbtn").addEventListener("click",gonext1);
function gonext1(){
    document.querySelector(".register").style.display = "none";
    document.querySelector(".loginbtn").style.display = "none";
}

// register user function

document.querySelector(".sub2").addEventListener("click",addData);
    
    var userData = JSON.parse(localStorage.getItem("userDatabase")) || [];
    function addData(){
        var fstname=document.querySelector("#fname").value;
        var lstname=document.querySelector("#lname").value;
        var emlname=document.querySelector("#eml2").value;
        var passname=document.querySelector("#pass2").value;
   
    var userCard={
        firstname:fstname,
        lastname:lstname,
        emailname:emlname,
        passwordname:passname
    };
    userData.push(userCard);
    localStorage.setItem("userDatabase", JSON.stringify(userData));

    if(fstname == "" || lstname == "" || emlname == "" || passname == ""){
        if(passname.length <= 5){
            alert("Please fill all information");
        }
        else{
            alert("Please fill all information");
        }
    }
    else {
        alert("Register successfull");
    }
}

// user login function

document.querySelector(".sub").addEventListener("click", addDetails);

    function addDetails(event){
        event.preventDefault();
        var email = document.querySelector("#eml").value;
        
        var passwor = document.querySelector("#pass").value;

        var userdata = JSON.parse(localStorage.getItem("userDatabase"));
        var flag = 0;

        for(var i=0; i<userdata.length; i++){
            if((email == userdata[i].emailname) && (passwor == userdata[i].passwordname)){
                window.location.href = "index.html";
                break;
            }
            else{
                alert("Invalid Email or Password");
                break;
            }
        }
    }