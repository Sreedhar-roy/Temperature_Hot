//do not api key on your js file
const API_KEY ='1379135d4a6526e81628550dd555a063';

const loadTempreture = city =>{`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
fetch(url)
.then(res => res.json())
.then(data => console.log(data))
}
loadTempreture();