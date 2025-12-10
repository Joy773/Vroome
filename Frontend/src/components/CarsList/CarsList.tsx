import { FC, useContext } from "react"

import { CarCard } from "../"
import { CarsContext, CarType } from "../../contexts/CarsContext"


type carListProps = {
  searchItems?: CarType[] 
}

const CarsList = ({ searchItems }: carListProps) => {
  const context = useContext(CarsContext)
  const { cars } = context
  const carsData = searchItems ? searchItems : cars
  
  return (
    <section className="w-full mt-4 mb-12 mx-auto px-4 md:px-6">
      <div className="flex flex-wrap -mx-1 md:px-5">
        {carsData.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </section>
  )
}

export default CarsList
