import { FC, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useLocation } from "react-router-dom"

import { CarsContext } from "../../contexts/CarsContext"
import { UserContextObj } from "../../contexts/UserContext"

import { FavoriteRed, GasIcon, Users, Wheel, Favorite } from "../../assets/icon"
import { Link, useNavigate } from "react-router-dom"
import { CarType } from "../../contexts/CarsContext"
import { CarFavouriteContext } from "../../contexts/CarFavouriteContext"

type CurrentValueType = {
  carId: number
  value: boolean
  gId: number
}[]
type CarCardType = {
  car: CarType
}

const CarCard = ({ car }: CarCardType) => {
  const navigate = useNavigate()
  const location = useLocation()
  const isFavoritesPage = location.pathname === '/favorites'
  const [toggle, setToggle] = useState<boolean>(false)
  const context = useContext(CarsContext)
  const carFavouriteContext = useContext(CarFavouriteContext)
  const { addToFavourite } = context
  const { handleFavourite, userFavourite } = carFavouriteContext
  const [userId, setUserId] = useState(0)
  const [userValue, setUserValue] = useState(false)

  useEffect(() => {
    console.log("immediate")
    let cV: CurrentValueType = userFavourite.filter(
      (item) => item.carId == car._id
    )
    console.log(cV[0], ":currentValue")
    setUserId(cV[0]?.gId)
    setUserValue(cV[0]?.value)
  }, [userFavourite, toggle])

  const features = [
    {
      icon: <img src={GasIcon} alt="Gas" className="w-6 h-6" />,
      title: `${car.maximum_gasoline}L`,
    },
    {
      icon: <img src={Wheel} alt="Wheel" className="w-6 h-6" />,
      type: "Manual",
    },
    {
      icon: <img src={Users} alt="Users" className="w-6 h-6" />,
      qty: `${car.seat_capacity} People`,
    },
  ]
  return (
    <div className="mt-5 mb-1 px-1 w-full min-w-[280px] max-w-full box-border sm:mt-4 sm:mb-4 sm:px-4 sm:w-1/2 lg:w-1/3 xl:w-1/4">
      <article className="flex flex-col gap-8 justify-between overflow-hidden rounded-lg bg-white dark:bg-gray-800 h-[400px] p-5 shadow-lg transition-colors duration-200 min-w-0">
        <div className="h-[10%] flex justify-between">
          <span className="font-bold text-base leading-[25px] text-gray-800 dark:text-gray-100 transition-colors duration-200">
            {car.car_title} <span className="block font-semibold text-sm leading-4 text-gray-500 dark:text-gray-400">{car.car_body_type}</span>
          </span>
          {isFavoritesPage ? (
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleFavourite(car._id)
                setToggle(!toggle)
                addToFavourite(car._id)
                toast.success(`Removed from favorites`, {
                  duration: 2000,
                })
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  e.stopPropagation()
                  handleFavourite(car._id)
                  setToggle(!toggle)
                  addToFavourite(car._id)
                  toast.success(`Removed from favorites`, {
                    duration: 2000,
                  })
                }
              }}
              className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Remove from favorites"
              title="Remove from favorites"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-600 dark:text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          ) : (
            <img
              src={userId ? (userValue ? FavoriteRed : Favorite) : Favorite}
              onClick={(e: React.MouseEvent<HTMLImageElement>) => {
                e.preventDefault()
                e.stopPropagation()
                // Only add to favorites if not already favorited
                if (!userValue) {
                  handleFavourite(car._id)
                  setToggle(!toggle)
                  addToFavourite(car._id)
                  toast.success(`Added to favorites!`, {
                    duration: 2000,
                  })
                  // Delay to ensure state update and localStorage write complete before navigation
                  setTimeout(() => {
                    navigate('/favorites')
                  }, 200)
                } else {
                  // If already favorited, just toggle (remove) without navigating
                  handleFavourite(car._id)
                  setToggle(!toggle)
                  addToFavourite(car._id)
                  toast.success(`Removed from favorites`, {
                    duration: 2000,
                  })
                }
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  e.stopPropagation()
                  // Only add to favorites if not already favorited
                  if (!userValue) {
                    handleFavourite(car._id)
                    setToggle(!toggle)
                    addToFavourite(car._id)
                    toast.success(`Added to favorites!`, {
                      duration: 2000,
                    })
                    // Delay to ensure state update and localStorage write complete before navigation
                    setTimeout(() => {
                      navigate('/favorites')
                    }, 200)
                  } else {
                    // If already favorited, just toggle (remove) without navigating
                    handleFavourite(car._id)
                    setToggle(!toggle)
                    addToFavourite(car._id)
                    toast.success(`Removed from favorites`, {
                      duration: 2000,
                    })
                  }
                }
              }}
              alt={userValue ? "Remove from favorites" : "Add to favorites"}
              className="w-6 h-6 cursor-pointer select-none transition-opacity duration-200 hover:opacity-80"
            />
          )}
        </div>
        <div className="h-[60%] flex flex-col items-center justify-center overflow-hidden">
          <img src={car.file_path} alt={car.car_title} className="w-full h-full object-contain object-center" />
        </div>
        <div className="h-[10%] flex flex-row justify-between p-0 gap-4 scale-95 w-[105%] -left-[3%] relative">
          {features.map((feature) => (
            <span key={feature.type} className="flex flex-row items-center justify-center p-0 gap-0.5">
              {feature.icon}{" "}
              <span className="font-medium text-sm leading-[18px] flex items-center text-gray-500 dark:text-gray-400 transition-colors duration-200">{feature.title}</span>
              <span className="font-medium text-sm leading-[18px] flex items-center text-gray-500 dark:text-gray-400 transition-colors duration-200">{feature.type}</span>
              <span className="font-medium text-sm leading-[18px] flex items-center text-gray-500 dark:text-gray-400 transition-colors duration-200">{feature.qty}</span>
            </span>
          ))}
        </div>
        <div className="h-[20%] flex justify-between items-center gap-4 min-w-0">
          <div className="flex flex-col min-w-0 flex-1">
            <span className="font-bold text-base leading-[25px] flex items-center whitespace-nowrap text-gray-800 dark:text-gray-100 transition-colors duration-200">
              ${car.daily_rate}/<span className="font-bold text-xs leading-4 whitespace-nowrap text-gray-500 dark:text-gray-400">day</span>
            </span>
            <span className="font-bold text-xs leading-4 flex items-center whitespace-nowrap text-gray-500 dark:text-gray-400 transition-colors duration-200">${car.daily_rate}</span>
          </div>
          <button className="w-[120px] h-11 border-none rounded bg-blue-600 text-white font-semibold cursor-pointer flex-shrink-0">
            <Link
              to={`/car-details/${car._id}`}
              className="text-white no-underline"
            >
              Details
            </Link>
          </button>
        </div>
      </article>
    </div>
  )
}

export default CarCard
