var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var hum = document.querySelector('.hum');
var sea= document.querySelector('.sea');
var max= document.querySelector('.max');
var min= document.querySelector('.min');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=a1eb575e6a2a88ceb39f43230efe5756')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  tempValue=tempValue-273.15;
  var humvalue= data['main']['humidity'];
  var seavalue= data['main']['sea_level'];
  var maxvalue= data['main']['temp_max'];
  maxvalue=maxvalue-273.15;
  var minvalue= data['main']['temp_min'];
  minvalue=minvalue-273.15;

  main.innerHTML = nameValue;
  desc.innerHTML = "Appearance of sky :  "+descValue;
  temp.innerHTML = "Optimal Temperature :  "+Math.floor(tempValue)+"°C";
  input.value ="";
  hum.innerHTML="Humidity :  "+humvalue+" g/kg";
  sea.innerHTML="Sea level :  "+seavalue +" m";
  max.innerHTML="Maximum temperature :  "+Math.floor(maxvalue) +"°C";
  min.innerHTML="Minimum temperature :  "+Math.floor(minvalue) +"°C";

})
.catch(err => alert("Wrong city name!"));
})