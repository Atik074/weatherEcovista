import NoLocation from '@/components/NoLocation'
import WindComponents from '@/components/WindComponents'
import { getResolveLatLon } from '@/lib/location_info'
import React from 'react'

const windPage=async({
  params:{location},
  searchParams:{latitude ,longitude}
})=> {
  const resolved  = await getResolveLatLon(location, latitude ,longitude)

  if(resolved?.lat && resolved?.lon){
    return <WindComponents lat={resolved.lat} 
    lon={resolved.lon} />
  }

  return <NoLocation/>
}

 export default windPage ;