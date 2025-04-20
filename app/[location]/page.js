import LocationInfo from '@/components/LocationInfo'
import NoLocation from '@/components/NoLocation'
import { getResolveLatLon } from '@/lib/location_info'
import React from 'react'

const home =async({
  params:{location},
  searchParams:{latitude ,longitude}
})=> {
  const resolved = await getResolveLatLon(location ,latitude ,longitude)
  
  if(resolved?.lat && resolved?.lon){
    return <LocationInfo 
    lat={resolved.lat} lon={resolved.lon}/>    
  }else{
    return <NoLocation/>
  }
  
}

export default home ;