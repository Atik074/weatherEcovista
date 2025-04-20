export const getLocationData =async(lat,long)=>{
    try{
        const response = await fetch(`https://us1.api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`)
        const data = response.json()
        return data ;

    }catch(err){console.log(err.message)}
   
}
export const getLocationLatLongList =async(lat,long)=>{

    try{
        const response = await fetch(`http://localhost:3000/api/location`)
        const data = response.json()
        return data ;

    }catch(err){console.log(err.message)}


}
export const getLocationLatLong =async(locationName)=>{

    try{
        const response = await fetch(`http://localhost:3000/api/locatoin/${locationName}`)
        const data = response.json()
        return data ;

    }catch(err){console.log(err.message)}


}




export const getResolveLatLon = async (location, lat, lon) => {
  
    if (lat && lon) {
        return { lat, lon };
    }

    const locationLatlong = await getLocationLatLong(location);
    

    if (locationLatlong.latitude && locationLatlong.longitude) {
        const lat = locationLatlong.latitude;
        const lon = locationLatlong.longitude;

        return { lat, lon };
    }
};