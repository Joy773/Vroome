import { FC } from "react";

import car from "/src/assets/cars/car2.png";
import car2 from "/src/assets/cars/car3.png";
import { PickupBG, DropoffBG } from "../../assets/background";

const SingleFeaturedCard: FC = () => {
  return (
    <div 
      className="bg-cover w-full min-w-[327px] rounded-[10px] relative z-10 justify-self-center overflow-hidden h-[clamp(232px,400px,500px)] bg-blue-secondary max-[580px]:h-[clamp(250px,350px,400px)] max-[450px]:h-[300px]"
      style={{ backgroundImage: `url(${PickupBG})` }}
    >
      <div className="relative z-20 w-full h-full p-[25px] flex flex-col gap-4">
        <div className="w-[52.5%] flex items-center text-white tracking-[-0.01em] max-[1380px]:w-[80%] max-[1080px]:w-[80%] max-[1080px]:[&>h1]:text-[1.75rem] max-[950px]:w-[90%] max-[950px]:[&>h1]:text-[1.5rem] max-[580px]:w-[90%] max-[580px]:[&>h1]:text-[1.2rem] max-[450px]:w-full max-[450px]:[&>h1]:text-base [&>h1]:text-3xl [&>h1]:font-semibold [&>h1]:leading-[120%] [&>h1]:text-white">
          <h1>The Best Platform for Car Rental</h1>
        </div>
        <div className="w-[50%] flex items-center tracking-[0.02em] text-white max-[1380px]:w-[60%] max-[1200px]:w-[70%] max-[1080px]:w-[80%] max-[1080px]:[&>h3]:text-[0.85rem] max-[950px]:w-[90%] max-[580px]:w-[90%] [&>h3]:text-base [&>h3]:font-medium [&>h3]:leading-[160%] [&>h3]:text-white">
          <h3>Ease of doing a car rental safely and reliably. Of course at a low price.</h3>
        </div>
        <span className="w-fit px-[30px] py-[15px] bg-[#3563E9] rounded-[4px] font-semibold text-base leading-5 flex items-center text-center text-white cursor-pointer">
          Rent Car
        </span>
        <div className="absolute bottom-0 left-[25%] max-[1200px]:w-[70%] max-[1200px]:left-[15%]">
          <img src={car} alt="Car" className="w-full" />
        </div>
      </div>
    </div>
  )
}

const SingleFeaturedCard2: FC = () => {
  return (
    <div 
      className="bg-cover w-full min-w-[327px] rounded-[10px] relative z-10 justify-self-center overflow-hidden h-[clamp(232px,400px,500px)] bg-blue-primary max-[873px]:hidden max-[580px]:h-[clamp(250px,350px,400px)] max-[450px]:h-[300px]"
      style={{ backgroundImage: `url(${DropoffBG})` }}
    >
      <div className="relative z-20 w-full h-full p-[25px] flex flex-col gap-4">
        <div className="w-[52.5%] flex items-center text-white tracking-[-0.01em] max-[1380px]:w-[80%] max-[1080px]:w-[80%] max-[1080px]:[&>h1]:text-[1.75rem] max-[950px]:w-[90%] max-[950px]:[&>h1]:text-[1.5rem] max-[580px]:w-[90%] max-[580px]:[&>h1]:text-[1.2rem] max-[450px]:w-full max-[450px]:[&>h1]:text-base [&>h1]:text-3xl [&>h1]:font-semibold [&>h1]:leading-[120%] [&>h1]:text-white">
          <h1>Easy way to rent a car at a low price</h1>
        </div>
        <div className="w-[50%] flex items-center tracking-[0.02em] text-white max-[1380px]:w-[60%] max-[1200px]:w-[70%] max-[1080px]:w-[80%] max-[1080px]:[&>h3]:text-[0.85rem] max-[950px]:w-[90%] max-[580px]:w-[90%] [&>h3]:text-base [&>h3]:font-medium [&>h3]:leading-[160%] [&>h3]:text-white">
          <h3>Providing cheap car rental services and safe and comfortable facilities.</h3>
        </div>
        <span className="w-fit px-[30px] py-[15px] bg-[#5CAFFC] rounded-[4px] font-semibold text-base leading-5 flex items-center text-center text-white cursor-pointer">
          Rent Now
        </span>
        <div className="absolute bottom-0 left-[25%] max-[1200px]:w-[70%] max-[1200px]:left-[15%]">
          <img src={car2} alt="Car" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default SingleFeaturedCard;
export { SingleFeaturedCard2 };