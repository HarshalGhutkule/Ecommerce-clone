
// slider function

document.querySelector(".next").addEventListener("click", nextimage);
document.querySelector(".prev").addEventListener("click", previmage);

var image = [ "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Picture5_1512x.jpg?v=1637134351",
"https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Papaya-desktop-banner_1512x.jpg?v=1633939948",
"https://cdn.shopify.com/s/files/1/0449/5225/6667/files/1_1512x.jpg?v=1599587622",
"https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Banner_14_09_1512x.jpg?v=1600179622"
];

var info = ["MAKE THE BERRY SEASON MERRY","THE FRUIT OF THE ANGELS","ASSURED SAFETY","WE SERVE YOU THE"];
var info1 = ["WITH KIMAYE BERRY COMBO", "KIMAYE PAPAYA", "FROM FARM TO HOME", "APPLES OF OUR EYE"];
var info2 = ["Berry Season", "100% Traceable | Naturally Ripened", "We are #all safe all good", "Stringent quality check ensure only the best fruits earn the Kimaye badge"]

var slider_content = document.querySelector("#box");

var head = document.querySelector("#box>div>h1");
var head1 = document.querySelector("#box>div>h2");
var head2 = document.querySelector("#box>div>p");


var i = image.length;

function nextimage(){
    if(i<image.length){
        i = i+1;
    }
    else{
        i = 1;
    }
    slider_content.style.backgroundImage = "url("+image[i-1]+")";
    slider_content.style.transition= "0.75s all ease-in-out";
    head.textContent = info[i-1];
    head.style.color= "black";
    head1.textContent = info1[i-1];
    head2.textContent = info2[i-1];
    head2.style.color = "black";
}

function previmage(){
    if(i<image.length+1 && i>1){
        i = i-1;
    }
    else{
        i = image.length;
    }
    slider_content.style.backgroundImage = "url("+image[i-1]+")";
    slider_content.style.transition= "0.75s all ease-in-out";
    head.textContent = info[i-1];
    head.style.color= "black";
    head1.textContent = info1[i-1];
    head2.textContent = info2[i-1];
    head2.style.color = "black";
}

// bottom slider2 function

document.querySelector(".next1").addEventListener("click", nextimage1);
document.querySelector(".prev1").addEventListener("click", previmage1);

var image1 = [ "https://images.pexels.com/photos/1750468/pexels-photo-1750468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://images.pexels.com/photos/4113868/pexels-photo-4113868.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
];

var image2 = [ "https://images.indianexpress.com/2021/09/fruits_getty.jpg",
"https://images.pexels.com/photos/1098592/pexels-photo-1098592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

var infor1 = ["How To Remove And Clean Harmful Pesticides From Fruits","Grapes: How they reached India, types and health benefits"];
var infor2 = ["Summers have arrived and so have the days where we can soak ourselves in the pleasure of treating ourselves...", "Grapes are one of the most diverse and devoured fruits in india. Known for it's sweet flavours and nutrients,..."];
var infor3 = ["Why Should You Eat Fruits More Often?", "Make Immunity your Best Friend"];
var infor4 = ["David Thoreau once stated, Live in each season as it passes: breathe the air, drink the drink, taste the...", "Immunity in the New Normal The pandemic's biggest mystery is our immune system. But, do we really understand how..."];

var slider_content1 = document.querySelector(".slider2>div:nth-child(1)");
var slider_content2 = document.querySelector(".slider2>div:nth-child(2)");

var heading1 = document.querySelector(".slider2>div:nth-child(1)>h2");
var heading2 = document.querySelector(".slider2>div:nth-child(1)>p");
var heading3 = document.querySelector(".slider2>div:nth-child(2)>h2");
var heading4 = document.querySelector(".slider2>div:nth-child(2)>p");


var i = image1.length;

function nextimage1(){
    if(i<image.length){
        i = i+1;
    }
    else{
        i = 1;
    }
    slider_content1.style.backgroundImage = "url("+image1[i-1]+")";
    slider_content2.style.backgroundImage = "url("+image2[i-1]+")";
    heading1.textContent = infor1[i-1];
    heading2.textContent = infor2[i-1];
    heading3.textContent = infor3[i-1];
    heading4.textContent = infor4[i-1];
}

function previmage1(){
    if(i<image.length+1 && i>1){
        i = i-1;
    }
    else{
        i = image.length;
    }
    slider_content1.style.backgroundImage = "url("+image1[i-1]+")";
    slider_content2.style.backgroundImage = "url("+image2[i-1]+")";
    heading1.textContent = infor1[i-1];
    heading2.textContent = infor2[i-1];
    heading3.textContent = infor3[i-1];
    heading4.textContent = infor4[i-1];
}
