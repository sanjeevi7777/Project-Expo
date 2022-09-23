// var button=document.querySelector('.submit');
document.addEventListener("click", function(){
fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
.then(response => response.json())
.then(data => {
var price = data ['bpi']['USD']['rate'];
var last = data ['time']['updated'];
//   main.innerHTML = nameValue;
//   input.value ="";
//   price.innerHTML="Bit Price :  "+data ['time']['updated']+"Rupees";
   console.log(last);
   document.getElementById("price").innerHTML="Bit Coin Price  : "+price+ "  USD";
    document.getElementById("last").innerHTML="Last Updated  : "+last;
})
.catch(err => alert("ERROR!"));
})