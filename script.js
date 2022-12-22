var plus_bts = document.querySelectorAll(".plus");
//console.log(plus_bts);
var minus_bts = document.querySelectorAll(".minus");

var total = document.getElementById("total");
//console.log(total)
var prices = document.querySelectorAll(".price");
var like_btns = document.querySelectorAll(".like");
var delete_btns = document.querySelectorAll(".delete");
console.log(delete_btns);
//functions

function del(e) {
  var cible = e.target;
  // console.log(cible)
  var tr = cible.parentElement.parentElement.parentElement.parentElement;
  console.log(tr);
  var prices = tr.querySelector(".price");
  console.log(prices);
  prices.innerHTML = 0;
  tr.remove();
  sum();
}
function ChangeColor(e) {
  var cible = e.target;
  if (cible.style.color !== "red") {
    cible.style.color = "red";
  } else {
    cible.style.color = "gray";
  }
}

//
function sum() {
  var s = 0;
  for (let i = 0; i < prices.length; i++) {
    s += Number(prices[i].innerHTML);
    // console.log(s);
    total.innerHTML = s;
    // console.log(total.innerHTML);
  }
}
//
function inc(e) {
  var clicked_btn = e.target;
  //console.log(clicked_btn)
  var div_btn = clicked_btn.parentElement;
  //console.log(divbtn)
  var p = div_btn.querySelector("p");
  //console.log(p)
  var value = Number(p.innerHTML);
  value++;
  p.innerHTML = value;
  //
  var tr = div_btn.parentElement.parentElement;
  //console.log(tr)
  var unit_price = tr.querySelector(".unitPrice");
  //console.log(unit_p);
  var up = Number(unit_price.innerHTML);
  console.log(up);
  //
  var price = tr.querySelector(".price");
  //console.log(price)
  price.innerHTML = value * up;
  sum();
}
//pour dec
function dec(e) {
  var clicked_btn = e.target;
  //  console.log(clickedbtn)
  var div_btn = clicked_btn.parentElement;
  //  console.log(clicked)
  var p = div_btn.querySelector("p");
  // console.log(p);
  var value = Number(p.innerHTML);

  if (value > 0) {
    value--;
  }

  p.innerHTML = value;
  //
  var tr = div_btn.parentElement.parentElement;
  //console.log(tr)
  var unit_price = tr.querySelector(".unitPrice");
  //console.log(unit_p);
  var up = Number(unit_price.innerHTML);
  console.log(up);
  //
  var price = tr.querySelector(".price");
  //console.log(price)
  price.innerHTML = value * up;
  sum();
}
for (let i = 0; i < plus_bts.length; i++) {
  plus_bts[i].addEventListener("click", inc);
}

for (let i = 0; i < minus_bts.length; i++) {
  minus_bts[i].addEventListener("click", dec);
}

for (let i = 0; i < like_btns.length; i++) {
  like_btns[i].addEventListener("click", ChangeColor);
}
for (let i = 0; i < delete_btns.length; i++) {
  delete_btns[i].addEventListener("click", del);
}
