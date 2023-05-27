import "./assets/scss/main.scss";
import { Loader } from "@googlemaps/js-api-loader"
import Choices from 'choices.js'
const element = document.getElementById('custom_select');

const SelectOptions = {
  placeholder: true,
  placeholderValue: 'Select country',
}
const choices = new Choices(element, SelectOptions);
let map;
const loader = new Loader({
  apiKey: "AIzaSyD7HLIfF3AaVpxW5pPUnMCBw3qXScoy6ms",
  version: "weekly",
});

loader.load().then(async () => {
  const { Map } = await google.maps.importLibrary("maps");
   map = new Map(document.getElementById("map"), {
     icon: './assets/img/location.png' ,
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});

//Усстановить центр
function setCenter(lat, lng){
  map.setCenter({
    lat,
    lng
  })
}
let location_btn = document.getElementById('get_location');
//Мои координаты
location_btn.addEventListener('click', ()=>{
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(
     (res)=>setCenter(res.coords.latitude, res.coords.longitude),
    (err)=> alert(err.message)
  )
})
