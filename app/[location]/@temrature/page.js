import NoLocation from '@/components/NoLocation';
import TemparatureComponents from '@/components/TemparatureComponents'
import { getResolveLatLon } from '@/lib/location_info'


const TemparaturePage=async({
  params:{location},
  searchParams:{latitude ,longitude}
})=>{
    const resolved =await getResolveLatLon(location,latitude ,longitude)

    if(resolved?.lat && resolved?.lon){
       return<TemparatureComponents
       lat={resolved.lat} lon={resolved.lon}
     />
    }else{
         return <NoLocation/>
    }
  
   }

export default TemparaturePage;


