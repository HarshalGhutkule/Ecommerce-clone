document.querySelector("#form").addEventListener("submit", shopping)
var kimayeArr = JSON.parse(localStorage.getItem("kimayeData")) || [];

function shopping(event) {
    event.preventDefault();

    var kimayeObj = {
        email: form.email.value,
        region: form.region.value,
        first_name: form.first.value,
        last_name: form.last.value,
        address: form.addr.value,
        apartment: form.apartment.value,
        city: form.city.value,
        state: form.state.value,
        pincode: form.pincode.value,
        mobile: form.mobile.value
    }
    kimayeArr.push(kimayeObj)
    localStorage.setItem("kimayeData", JSON.stringify(kimayeArr))
    document.querySelector("#submit").addEventListener("click", function () {
        window.location.href = "Shipping.html"
       
   })
}
var promo = document.querySelector("#discount>input")
var count = 1200
var checkOut1 = document.querySelector(".total_cost1")
var checkOut2 = document.querySelector(".total_cost2")
var checkOut3 = document.querySelector(".total_cost3")
document.querySelector(".promobutton").addEventListener("click", function(){
            if(promo.value == "masai30"){
                count = Math.floor((count*70)/100);
                checkOut1.textContent = "  ₹" + count 
                checkOut2.textContent = "  ₹" + count 
                checkOut3.textContent = "  ₹" + count 
                console.log("here")
            }
            else{
                alert("error");
            }
    })
