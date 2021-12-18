// navbar show search dropdown Option

document.querySelector(".searchbar").addEventListener("click", showsearch);

function showsearch(){
    document.querySelector("#searchform").style.display = "block";
}

// navbar hide search dropdown Option

document.querySelector(".hidebar").addEventListener("click", closesearch);

function closesearch(){
    document.querySelector("#searchform").style.display = "none";
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
    window.location.href = "Signin.html";
})



localStorage.clear()
localStorage.setItem("price4", 144)
var items=[]
var n=JSON.parse(localStorage.getItem("price4"));



    
   /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var display=document.getElementById("display");
console.log(display)
display="0"
document.getElementById("buttonplus").addEventListener("click",additionFun);
function additionFun(){
    console.log("worked")
    var display=document.getElementById("display").value;
    // var count=0;
    // count++;
    display++;
    console.log(display)
    document.getElementById("display").value=display;

    
}
document.getElementById("another").addEventListener("click",subtraction)



function subtraction(){
    
    var display=document.getElementById("display").value;
    
    if(display>0){   
    console.log("yes")
    display--;
    document.getElementById("display").value=display;
    }
}
var price=document.getElementById("price2").textContent=n
document.getElementById("buttonplus").addEventListener("click",totalprice);
document.getElementById("another").addEventListener("click",totalprice2);
document.getElementById("totalmoney").textContent=price
function totalprice(){
    var price=document.getElementById("price2").innerHTML
    console.log("pr"+price)
    document.getElementById("totalmoney").textContent=price
   
    var display=document.getElementById("display").value;
    console.log(display)
   
   
   
    display=+display;
    price=+price
    var product=price*display;
   
    console.log(product)
    var price2=document.getElementById("totalmoney").textContent=product;
    document.getElementById("totalamount").textContent=product;
    var totalPrice=document.getElementById("totalamount").textContent;
    document.getElementById("subtotal").textContent=product;
    localStorage.setItem("totalValue3",product)
    
}

var product;

function totalprice2(price2){
    var price=document.getElementById("price2").innerHTML;
   var price2=document.getElementById('totalmoney').innerHTML
    var display=document.getElementById("display").value;
    console.log(display)
    var pricee=document.getElementById("price2").textContent
    if(display==0){
        pricee="";
    }
   
   if(display>0){ 
  
    display=+display;
    price2=+price2
    var product=price2-price
    console.log("display"+display)
    
    console.log("prc2"+price2)
    // if(price2!=0){ 
    // var product=price2-333;
    // }
    console.log("price"+ price2)
    
    var price2=document.getElementById("totalmoney").textContent=product;
    document.getElementById("totalamount").textContent=product
    document.getElementById("subtotal").textContent=product
   }


}

// total money needed to pay
var n=JSON.parse(localStorage.getItem("price4"));
document.getElementById("totalamount").textContent=n
console.log(product)
document.getElementById("subtotal").textContent=n
document.getElementById("freedelivery").textContent=350-n
document.getElementById("buttonplus").addEventListener("click",moreMoney)
function moreMoney(){
    document.getElementById("freedelivery").textContent=350-document.getElementById("totalamount").textContent;
    var del=document.getElementById("freedelivery").textContent;
    var totalAmount=document.getElementById("totalamount").textContent;
    del=350-totalAmount;
    if(del<=0){
        document.getElementById("spend").textContent="CONGRATULATIONS YOU HAVE GOT FREE SHIPPING!";
      //   document.getElementById("freedelivery").textContent="CONGRATULATIONS YOU HAVE GOT";
      //   document.getElementById("moreto").textContent="CONGRATULATIONS YOU HAVE GOT"
    }
console.log("n"+n)
}
document.getElementById("another").addEventListener("click",moreMoney2);
function moreMoney2(){
   document.getElementById("spend").textContent;
   console.log("money2")
   document.getElementById("freedelivery").textContent=350-n
  
   document.getElementById("freedelivery").textContent=(350-document.getElementById("totalamount").textContent)
}
var dataArray=JSON.parse(localStorage.getItem("productDetails")) || []
function checkout(){

   var product_name=document.querySelector(".productName").textContent
   var product_image=document.querySelector("imageUrl")
   console.log(product_image)
   var dataObj={Name:product_name,
   image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/grapefruit-funfacts_219x.png?v=1639461506",
   price:n}
   dataArray.push(dataObj)
   localStorage.setItem("productDetails",JSON.stringify(dataArray))
   window.location.href="info.html"
}

