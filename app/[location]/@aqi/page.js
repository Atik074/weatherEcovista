import AqiComponents from '@/components/AqiComponents'


export default function Aqi(
  {
    params:{location},
    searchParams:{latitude ,longitude}
  }
  ) {
  return <AqiComponents 
       lat={latitude} lon={longitude}
  />
}
