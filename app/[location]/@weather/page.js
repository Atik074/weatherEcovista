import NoLocation from "@/components/NoLocation";
import WeatherComponents from "@/components/WeatherComponents";
import { getResolveLatLon } from "@/lib/location_info";

const WeatherPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolveLatLon(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <WeatherComponents lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocation />;
  }
};

export default WeatherPage;
