import { getTempratureData } from "@/lib/weaher-info";
import Card from "./Card";
import Image from "next/image";


const TemparatureComponents =async({lat ,lon}) => {
    const { temp, feels_like } = await getTempratureData(lat ,lon)
   
    return (
        <Card>
            <h6 className="feature-name">Current Temperature</h6>
                <div className="feature-main">
                  <Image
                    className="max-w-20"
                    src="/icon_tempareture.png"
                    width={50}
                    height={50}
                    alt="rain icon"
                  />
                  <h3 className="feature-title">{temp}°C</h3>

                  <span className="feature-name">Feels Like {feels_like}°C</span>
                </div>
        </Card>
    );
};

export default TemparatureComponents;