//do not api key on your js file
const API_KEY ='1379135d4a6526e81628550dd555a063';

const loadTempreture = city =>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
fetch(url)
.then(res => res.json())
.then(data => displayview(data));
}
const displayview = data =>{
    // const tempreture = document.getElementById('tepmpreture');
    // tempreture.innerText=data.main.temp;
    setInnerTextById('tempreture', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
    console.log(data.weather[0].main)
}
const setInnerTextById = (id, text)=>{
    const tempreture=document.getElementById(id);
    tempreture.innerText=text;
}

document.getElementById('btn-search').addEventListener('click' , function(){
    const fieldsearch = document.getElementById("fill-search");
    const city = fieldsearch.value;
    document.getElementById('city').innerText = city;
    loadTempreture(city);
})
loadTempreture('dhaka');