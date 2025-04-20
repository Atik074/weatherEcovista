import AqiComponents from "@/components/AqiComponents";
import NoLocation from "@/components/NoLocation";
import { getResolveLatLon } from "@/lib/location_info";

const Aqi =async({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolveLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <AqiComponents lat={resolved.lat} lon={resolved.lon}/>;
  } else {
    return <NoLocation />;
  }
};


export default Aqi ;