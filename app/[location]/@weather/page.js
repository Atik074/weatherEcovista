import WeatherComponents from '@/components/WeatherComponents'


export default function page({
  params:{location},
  searchParams:{latitude ,longitude}
}) {
  return <WeatherComponents lat ={latitude} lon={longitude} />
}
