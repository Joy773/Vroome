import React, { createContext, useContext, useEffect, useState } from "react"
import { CarsContext } from "./CarsContext"
import { UserContextObj } from "./UserContext"

type CarFavouriteContextProviderProps = {
  children: React.ReactNode
}
type CarFavouriteContextType = {
  userFavourite: {
    carId: number
    value: boolean
    gId: number
  }[]

  handleFavourite: (id: number) => void
}
type userFavType = {
  carId: number
  value: boolean
  gId: number
}[]
type lSType = {
  carId: number
  value: boolean
  gId: number
}[]
type userFavouriteType = {
  carId: number
  value: boolean
  gId: number
}[]
const CarFavouriteContext = createContext<CarFavouriteContextType>(
  {} as CarFavouriteContextType
)

export default function CarFavouriteContextProvider({
  children,
}: CarFavouriteContextProviderProps) {
  const context = useContext(CarsContext)
  const { cars } = context

  
  const [userFavourite, setUserFavourite] = useState<userFavouriteType>(
    [] as userFavouriteType
  )
  const { Provider } = CarFavouriteContext
  const { googleId } = useContext(UserContextObj)
  const gId = googleId ? parseInt(googleId) : 0
  console.log(userFavourite,":userFavourite")
  useEffect(() => {
    //googleId will be null if user is in a logged out state
    if (googleId && cars && cars.length > 0) {
      console.log("logged-in")
      let lS: lSType = JSON.parse(localStorage.getItem(`${gId}`) as string)
      console.log(lS)
      // here the lS (local storage value) is undefined for the first time user logs in
      if (lS && Array.isArray(lS)) {
        setUserFavourite(lS)
      } else {
        let userFav: userFavType = cars.map(({ _id }) => {
          return { carId: _id, value: false, gId: gId }
        })
        localStorage.setItem(`${gId}`, JSON.stringify(userFav))
        setUserFavourite(userFav)
      }
    } else {
        console.log("logged out")
        if (cars && cars.length > 0) {
        let userFav: userFavType = cars.map(({ _id }) => {
            return { carId: _id, value: false, gId: 0 }
          })
          localStorage.setItem(`${0}`, JSON.stringify(userFav))
          setUserFavourite(userFav)
        } else {
          setUserFavourite([])
        }
    }
  }, [gId, cars])

  //   const currentUser=lS.filter(l=>gId==l.gId)

  const handleFavourite = (id: number) => {
    const stored = localStorage.getItem(`${gId}`)
    let lS: lSType
    
    // If no stored data, initialize with all cars
    if (!stored) {
      if (cars && cars.length > 0) {
        lS = cars.map(({ _id }) => ({
          carId: _id,
          value: _id === id ? true : false, // Set clicked car to true, others to false
          gId: gId || 0
        }))
      } else {
        return // Can't initialize without cars
      }
    } else {
      lS = JSON.parse(stored)
      if (!Array.isArray(lS)) {
        // If corrupted data, reinitialize
        if (cars && cars.length > 0) {
          lS = cars.map(({ _id }) => ({
            carId: _id,
            value: _id === id ? true : false,
            gId: gId || 0
          }))
        } else {
          return
        }
      } else {
        // Check if the car exists in the array, if not add it
        const carExists = lS.some((l) => l.carId === id)
        if (!carExists && cars && cars.length > 0) {
          // Add the missing car
          lS.push({ carId: id, value: true, gId: gId || 0 })
        } else {
          // Toggle the existing car's favorite status
          lS = lS.map((l) => {
            if (l.carId === id) {
              return { ...l, value: !l.value }
            }
            return l
          })
        }
      }
    }
    
    localStorage.setItem(`${gId}`, JSON.stringify(lS))
    setUserFavourite(lS)
  }
  return (
    <Provider value={{ userFavourite, handleFavourite }}>{children}</Provider>
  )
}
export { CarFavouriteContextProvider, CarFavouriteContext }
