import LocationInfo from '@/components/LocationInfo'
import React from 'react'

export default function page({
  params:{location},
  searchParams:{latitude ,longitude}
}) {
  return <LocationInfo 
  lat={latitude} lon={longitude}/>
}
