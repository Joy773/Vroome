import React from "react"

import CarCard from "../CarCard/CarCard"
import { CarType } from "../../contexts/CarsContext"

const PopularCar = () => {
  // All cars from public/cars folder - matching the design order
  const popularCars: CarType[] = [
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
      _id: 3,
      car_title: "CR - V",
      car_brand: "Honda",
      car_body_type: "SUV",
      file_path: "/cars/cr-v.svg",
      seat_capacity: 6,
      maximum_gasoline: 80,
      daily_rate: 80,
      isFavourite: false,
    },
    {
      _id: 4,
      car_title: "Koenigsegg Agera",
      car_brand: "Koenigsegg",
      car_body_type: "Sports Car",
      file_path: "/cars/koenigsegg agera.svg",
      seat_capacity: 2,
      maximum_gasoline: 60,
      daily_rate: 150,
      isFavourite: false,
    },
    {
      _id: 5,
      car_title: "MG ZX Excite",
      car_brand: "MG",
      car_body_type: "Sedan",
      file_path: "/cars/mg zx excite.svg",
      seat_capacity: 5,
      maximum_gasoline: 65,
      daily_rate: 68,
      isFavourite: false,
    },
    {
      _id: 6,
      car_title: "MG ZX Exclusive",
      car_brand: "MG",
      car_body_type: "Sedan",
      file_path: "/cars/mg zx exclusive.svg",
      seat_capacity: 5,
      maximum_gasoline: 65,
      daily_rate: 75,
      isFavourite: false,
    },
    {
      _id: 7,
      car_title: "New MG ZS",
      car_brand: "MG",
      car_body_type: "SUV",
      file_path: "/cars/new mg zs.svg",
      seat_capacity: 5,
      maximum_gasoline: 70,
      daily_rate: 70,
      isFavourite: false,
    },
    {
      _id: 8,
      car_title: "Nissan GT-R",
      car_brand: "Nissan",
      car_body_type: "Sports Car",
      file_path: "/cars/nissan gt-r.svg",
      seat_capacity: 4,
      maximum_gasoline: 55,
      daily_rate: 120,
      isFavourite: false,
    },
    {
      _id: 9,
      car_title: "Rolls-Royce Dawn",
      car_brand: "Rolls-Royce",
      car_body_type: "Luxury",
      file_path: "/cars/rolls-royce dawn.svg",
      seat_capacity: 4,
      maximum_gasoline: 80,
      daily_rate: 200,
      isFavourite: false,
    },
  ]
  
  return (
    <section className="flex flex-col m-4 md:m-0 md:mx-10">
    <div className="flex flex-row justify-between px-5 md:py-8 md:px-14 md:pt-8 md:pb-0">
      <div className="font-['Plus_Jakarta_Sans'] font-semibold text-sm leading-[18px] flex items-center text-[#90a3bf] md:text-base">
         Popular Car
      </div>
    </div>
    <section className="flex flex-row relative overflow-x-auto [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
      {popularCars.map((car) => (
        <CarCard key={car._id} car={car} />
      ))}
    </section>
  </section>
  )
}

export default PopularCar
