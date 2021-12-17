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