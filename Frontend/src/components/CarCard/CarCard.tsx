import { FC, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useLocation } from "react-router-dom"

import {
  Article,
  CarCardWrapper,
  CardRow1,
  CardRow2,
  CardRow3,
  CardRow4,
  CardSpesification,
  CardSpesificationDiv,
  CardTag,
  CardTitle,
  Icon,
  PricePerDay,
  PricePerDaySmall,
  RentNowButton,
} from "./styles"

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
      icon: <Icon src={GasIcon} />,
      title: `${car.maximum_gasoline}L`,
    },
    {
      icon: <Icon src={Wheel} />,
      type: "Manual",
    },
    {
      icon: <Icon src={Users} />,
      qty: `${car.seat_capacity} People`,
    },
  ]
  return (
    <CarCardWrapper>
      <Article>
        <CardRow1>
          <CardTitle>
            {car.car_title} <CardTag>{car.car_body_type}</CardTag>
          </CardTitle>
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
            <Icon
              src={userId ? (userValue ? FavoriteRed : Favorite) : Favorite}
              onClick={(e) => {
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
            />
          )}
        </CardRow1>
        <CardRow2>
          <img src={car.file_path} alt={car.car_title} style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }} />
        </CardRow2>
        <CardRow3>
          {features.map((feature) => (
            <CardSpesificationDiv key={feature.type}>
              {feature.icon}{" "}
              <CardSpesification>{feature.title}</CardSpesification>
              <CardSpesification>{feature.type}</CardSpesification>
              <CardSpesification>{feature.qty}</CardSpesification>
            </CardSpesificationDiv>
          ))}
        </CardRow3>
        <CardRow4>
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: '1 1 auto' }}>
            <PricePerDay>
              ${car.daily_rate}/<PricePerDaySmall>day</PricePerDaySmall>
            </PricePerDay>
            <PricePerDaySmall>${car.daily_rate}</PricePerDaySmall>
          </div>
          <RentNowButton style={{ flexShrink: 0 }}>
            <Link
              to={`/car-details/${car._id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              Details
            </Link>
          </RentNowButton>
        </CardRow4>
      </Article>
    </CarCardWrapper>
  )
}

export default CarCard
