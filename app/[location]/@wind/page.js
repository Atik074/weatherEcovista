import WindComponents from '@/components/WindComponents'
import React from 'react'

export default function page({
  params:{location},
  searchParams:{latitude ,longitude}
}) {
  return <WindComponents lat={latitude} 
  lon={longitude} />
}
