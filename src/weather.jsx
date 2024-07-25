import React, { Fragment, useState } from 'react'
async function getWeather(city_name){
    const API_KEY = '23efb1990b40120e9b50ab1609f17e3e';
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`;
    const currentWeather = await (await fetch(baseUrl)).json()
   
   /*https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} */
    return currentWeather

}


const Weather =  () => {
    const handleSubmit = async (event,cityName)=>{
        event.preventDefault();
    setCity(cityName);
    const {main,name}= await getWeather(cityName || "chennai")
   
      const result = [main.temp,name]
    setCity('')
    setWeather(result)
   
    }
    
    
    const [weather,setWeather]=useState([]);
    const [city,setCity]=useState('');
    const answer=weather.map(element =>{
             
            return <li>{element}</li>})
           
  return (
    < 
    >
    <form    
    onSubmit={()=>handleSubmit(event,city)}
    style={{
        margin:0,
        padding:0,
        height:"100vh",
        display:"flex",
        flexDirection:'column',
        gap:'30px',
        justifyContent:"center",
        alignItems:"center",color:"white"
    }}
    >
<label
 htmlFor="cityInput">

 </label>
 <input
 id="cityInput"
  type="text" 
  value={city}
  onChange={()=>setCity(document.querySelector('#cityInput').value)}
  />
<button

onClick={()=>{
 function  handleCurrentLocation(){
  const po= navigator.geolocation.getCurrentPosition((position) => {

      const latitude = position.coords.latitude; 
      const longitude =position.coords.longitude;
      return [latitude,longitude]
   })
   console.log(po);
 }
 handleCurrentLocation()
}}>
Use current Location
</button>
  <button
   type='submit'>
    search
  
  </button>
    
   
        <ul>
            {answer
            }
        </ul>
    
    </form>
    </ >
  )
}

export default Weather