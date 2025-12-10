import React from "react"

import CarCard from "../CarCard/CarCard"
import { CarType } from "../../contexts/CarsContext"

const RecomendationCar = () => {
  // Create recommended car objects matching the design
  // Using SVG files from public/cars folder
  const recommendedCars: CarType[] = [
    {
      _id: 1,
      car_title: "All New Rush",
      car_brand: "Toyota",
      car_body_type: "SUV",
      file_path: "/cars/all new rush.svg",
      seat_capacity: 6,
      maximum_gasoline: 70,
      daily_rate: 72,
      isFavourite: false,
    },
    {
      _id: 2,
      car_title: "CR - V",
      car_brand: "Honda",
      car_body_type: "SUV",
      file_path: "/cars/cr-v.svg",
      seat_capacity: 6,
      maximum_gasoline: 80,
      daily_rate: 80,
      isFavourite: true,
    },
    {
      _id: 3,
      car_title: "All New Terios",
      car_brand: "Daihatsu",
      car_body_type: "SUV",
      file_path: "/cars/all new terios.svg",
      seat_capacity: 6,
      maximum_gasoline: 90,
      daily_rate: 74,
      isFavourite: false,
    },
    {
      _id: 4,
      car_title: "CR - V",
      car_brand: "Honda",
      car_body_type: "SUV",
      file_path: "/cars/cr-v.svg",
      seat_capacity: 6,
      maximum_gasoline: 80,
      daily_rate: 80,
      isFavourite: true,
    },
  ]

  return (
    <section className="flex flex-col m-4 md:m-0 md:mx-10">
      <div className="flex flex-row justify-between px-5 md:py-8 md:px-14 md:pt-8 md:pb-0">
        <div className="font-['Plus_Jakarta_Sans'] font-semibold text-sm leading-[18px] flex items-center text-[#90a3bf] md:text-base">
          Recomendation Car
        </div>
      </div>
      <section className="flex flex-row relative max-w-[1416px] overflow-x-auto [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
        {recommendedCars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </section>
    </section>
  )
}

export default RecomendationCar
