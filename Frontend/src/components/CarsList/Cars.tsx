import { FC, useContext } from "react"

import { CarCard } from ".."
import { CarsContext } from "../../contexts/CarsContext"

const Cars: FC = () => {
  const context = useContext(CarsContext)

  const { cars } = context
  return (
    <section className="w-full mt-4 mb-12 mx-auto px-4 md:px-6">
      <div className="flex flex-wrap -mx-1 md:px-5">
        {cars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </section>
  )
}

export default Cars
