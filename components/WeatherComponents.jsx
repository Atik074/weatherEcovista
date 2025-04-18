import { getWeatherData } from "@/lib/weaher-info";
import Card from "./Card";
import Image from "next/image";

const WeatherComponents =async ({lat,lon}) => {
    const {main,description} =await getWeatherData(lat ,lon)
    return (
        <Card>
           <h6 className="feature-name">Current Weather</h6>
                <div className="feature-main">
                  <Image
                    className="max-w-20"
                    src="/icon_rain.png"
                     width={80}
                      height={80}
                    alt="rain icon"
                  />
                  <h3 className="feature-title">{main} </h3>
                  <span className="feature-name">{description}</span>
                </div>
        </Card>
    );
};

export default WeatherComponents;