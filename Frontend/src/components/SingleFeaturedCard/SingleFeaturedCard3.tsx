import { FC } from "react";

import car from "/src/assets/cars/car3.png";
import { PickupBG } from "../../assets/background";

type SingleFeaturedCard3Props = {
    carImage?: string;
}

const SingleFeaturedCard3: FC<SingleFeaturedCard3Props> = ({ carImage }) => {
    return (
        <div 
            className="bg-cover w-full min-w-[327px] rounded-[10px] relative z-10 justify-self-center overflow-hidden h-[clamp(232px,400px,500px)] bg-blue-secondary max-[580px]:h-[clamp(250px,350px,400px)] max-[450px]:h-[300px]"
            style={{ backgroundImage: `url(${PickupBG})` }}
        >
            <div className="relative z-20 w-full h-full flex items-center justify-center">
                <div className="absolute bottom-0 left-[15%] w-[85%] max-[1200px]:w-[90%] max-[1200px]:left-[10%] max-[950px]:w-[95%] max-[950px]:left-[5%]">
                    <img src={carImage || car} alt="Car" className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default SingleFeaturedCard3;
