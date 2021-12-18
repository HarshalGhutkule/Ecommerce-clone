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

// function for go to home page

document.querySelector(".navbar > div:nth-child(1) + img").addEventListener("click", function(){
    window.location.href = "landingPage.html";
})

// function for go to log-in page

document.querySelector(".gotologin").addEventListener("click", function(){
    window.location.href = "Log-inPage.html";
})

// function for go to cart page

document.querySelector(".gotocart").addEventListener("click", function(){
    window.location.href = "CartPage.html";
})



document.querySelector(".loginbtn").addEventListener("click",gonext);
function gonext(){
    window.location.href="fristproject_html.html"

}