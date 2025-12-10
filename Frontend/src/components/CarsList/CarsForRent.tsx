import React, { useContext } from "react"

import CarCard from "../CarCard/CarCard"
import { CarsContext } from "../../contexts/CarsContext"

const CarsForRent = () => {
  const context = useContext(CarsContext)

  // const { cars } = context
  // return (
  //   <section className="flex flex-col m-4 md:m-0 md:mx-10">
  //     <div className="flex flex-row justify-between px-5 md:py-8 md:px-14 md:pt-8 md:pb-0">
  //       <div className="font-['Plus_Jakarta_Sans'] font-semibold text-sm leading-[18px] flex items-center text-[#90a3bf] md:text-base">
  //         Cars for Rent
  //       </div>
  //       <div className="font-semibold text-xs leading-[15px] flex items-center text-right text-[#3563e9] md:text-sm">
  //         View All
  //       </div>
  //     </div>
  //     <section className="flex flex-row relative max-w-[1416px] overflow-x-auto [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
  //       {cars.map((car) => (
  //         <CarCard key={car._id} car={car} />
  //       ))}
  //     </section>
  //   </section>
  // )
}

export default CarsForRent
