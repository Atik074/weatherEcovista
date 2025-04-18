import TemparatureComponents from '@/components/TemparatureComponents'
import React from 'react'

export default function page({
  params:{location},
  searchParams:{latitude ,longitude}
}) {
  return <TemparatureComponents
  lat={latitude} lon={longitude}
/>
}
