const data = [
  {
    "location": "Dhaka",
    "latitude": 23.8103,
    "longitude": 90.4125
  },
  {
    "location": "Chittagong",
    "latitude": 22.3569,
    "longitude": 91.7832
  },
  {
    "location": "Khulna",
    "latitude": 22.8456,
    "longitude": 89.5403
  },
  {
    "location": "Rajshahi",
    "latitude": 24.3745,
    "longitude": 88.6042
  },
  {
    "location": "Sylhet",
    "latitude": 24.8949,
    "longitude": 91.8687
  },
  {
    "location": "Barisal",
    "latitude": 22.7010,
    "longitude": 90.3535
  },
  {
    "location": "Rangpur",
    "latitude": 25.7460,
    "longitude": 89.2500
  },
  {
    "location": "Mymensingh",
    "latitude": 24.7471,
    "longitude": 90.4203
  }
];



 function getLocation(){
    return data ;
  }

 function getLocationByName (location){
    
    if(!location) return null ;
    const found = data.find((item)=> item.location.toLowerCase() === location.toLowerCase())
    return found || {} ;
 }
  
 export {getLocation ,getLocationByName}