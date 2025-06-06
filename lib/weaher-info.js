export const getWeatherData =async(lat,lon)=>{
    
     try{
      
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_MAP_API}&units=metric`)

        const data = await  response.json()
        return data?.weather[0]

      }catch(err){
        console.log(err.message)
      }

}

export const getTempratureData =async(lat,lon)=>{
    
    try{
     
       const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_MAP_API}&units=metric`)

       const data = await  response.json()
       return data?.main

     }catch(err){
       console.log(err.message)
     }

}
export const getWindData =async(lat,lon)=>{
    
    try{
     
       const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_MAP_API}&units=metric`)

       const data = await  response.json()
       return data?.wind

     }catch(err){
       console.log(err.message)
     }

}
export const getAQIData =async(lat,lon)=>{
    
    try{
     
       const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_MAP_API}`)

       const data = await  response.json()
       return data?.list[0]

     }catch(err){
       console.log(err.message)
     }

}