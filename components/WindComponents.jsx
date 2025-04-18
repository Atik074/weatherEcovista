import { getWindData } from "@/lib/weaher-info";
import Card from "./Card";
import Image from "next/image";

const WindComponents =async ({lat,lon}) => {
    const {speed,deg} = await getWindData(lat,lon)
    return (
        <Card>
            <h6 className="feature-name">Wind</h6>
                <div className="feature-main">
                  <Image
                    className="max-w-20"
                    src="/icon_wind.png"
                    width={80}
                    height={80}
                    alt="rain icon"
                  />
                  <h3 className="feature-title">{speed}</h3>
                  <span className="feature-name">{deg}</span>
                </div>
        </Card>
    );
};

export default WindComponents;