import { FC, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SingleFeaturedCard3 from '../SingleFeaturedCard/SingleFeaturedCard3'
import { CarsContext } from '../../contexts/CarsContext'
import { CarType } from '../../contexts/CarsContext'
import { FavoriteRed, starFill, starOutline, Favorite } from '../../assets/icon'
import { CarFavouriteContext } from '../../contexts/CarFavouriteContext'

import carview1 from '../../assets/img/carview1.png'
import carview2 from '../../assets/img/carview2.png'
import carview3 from '../../assets/img/carview3.png'

type DetailCarProps = {
    carId: number | null
}

const DetailCar: FC<DetailCarProps> = ({ carId }) => {
    const context = useContext(CarsContext)
    const carFavouriteContext = useContext(CarFavouriteContext)
    
    // Debug: Check if context is available
    if (!context) {
        console.error('CarsContext is not available')
    }
    
    const { cars } = context || { cars: [] }
    const { handleFavourite, userFavourite } = carFavouriteContext || { handleFavourite: () => {}, userFavourite: [] }
    
    const [selectedCar, setSelectedCar] = useState<CarType | null>(null)
    const [isFavourite, setIsFavourite] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        console.log('DetailCar useEffect - carId:', carId, 'cars.length:', cars?.length || 0, 'cars:', cars)
        
        if (carId && cars && cars.length > 0) {
            // Convert carId to both number and string for comparison
            const carIdNum = typeof carId === 'string' ? parseInt(carId, 10) : carId
            const carIdStr = String(carId)
            
            console.log('Searching for car with ID:', carIdNum, 'or', carIdStr)
            console.log('Available car IDs:', cars.map(c => ({ id: c._id, type: typeof c._id })))
            
            // Try to find car by comparing both as number and string
            const car = cars.find((c) => {
                const carIdToCompare = typeof c._id === 'string' ? parseInt(c._id, 10) : c._id
                const matches = carIdNum === carIdToCompare || String(c._id) === carIdStr || c._id === carIdNum || c._id === carId
                if (matches) {
                    console.log('Found matching car:', c)
                }
                return matches
            })
            
            if (car) {
                console.log('Car found!', car)
                setSelectedCar(car)
                // Check if car is in favorites
                const favItem = userFavourite.find((item) => {
                    const itemCarId = typeof item.carId === 'string' ? parseInt(item.carId, 10) : item.carId
                    const carIdToCompare = typeof car._id === 'string' ? parseInt(car._id, 10) : car._id
                    return itemCarId === carIdToCompare
                })
                setIsFavourite(favItem?.value || false)
                setIsLoading(false)
            } else {
                console.log('Car not found in cars array. Looking for ID:', carId, 'Available cars:', cars.map(c => c._id))
                setIsLoading(false)
            }
        } else if (carId && (!cars || cars.length === 0)) {
            // Cars haven't loaded yet, wait for them to load from context
            console.log('Cars array is empty, waiting for cars to load from context...')
            setIsLoading(true)
        } else if (!carId) {
            console.log('No carId provided')
            setIsLoading(false)
        }
    }, [carId, cars, userFavourite])

    // Show loading only if we have a carId but cars haven't loaded yet
    if (isLoading && carId && (!cars || cars.length === 0)) {
        return (
            <section className="flex flex-col gap-8 m-5 md:m-10 md:flex-row">
                <div className="p-8 text-center text-gray-600">
                    <p>Loading car details...</p>
                    <p className="text-sm mt-2">Please wait while we fetch the car information.</p>
                    <p className="text-xs mt-2 text-gray-500">
                        Fetching cars from API... (cars loaded: {cars?.length || 0})
                    </p>
                    <p className="text-[0.75rem] mt-4 text-gray-500 italic">
                        Make sure your backend server is running on http://localhost:9090
                    </p>
                </div>
            </section>
        )
    }

    if (!selectedCar && !isLoading) {
        return (
            <section className="flex flex-col gap-8 m-5 md:m-10 md:flex-row">
                <div className="p-8 text-center">
                    <h2 className="text-gray-800 dark:text-gray-200 mb-4">Car not found</h2>
                    <p className="text-gray-600 dark:text-gray-400">The car you're looking for doesn't exist or has been removed.</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                        Car ID: {carId} | Total cars loaded: {cars.length}
                    </p>
                </div>
            </section>
        )
    }

    // Type guard: if we reach here and selectedCar is null, return early
    if (!selectedCar) {
        return null
    }

    const handleFavoriteClick = () => {
        handleFavourite(selectedCar._id)
        setIsFavourite(!isFavourite)
    }

    return (
        <section className="flex flex-col gap-8 m-5 md:m-10 md:flex-row">
            <section className="w-full md:w-1/2">
                <div>
                    <SingleFeaturedCard3 carImage={selectedCar.file_path} />
                </div>
                <div className="flex gap-4 justify-between my-2.5">
                    <div className="w-[115px] h-[90px] border-2 border-blue-600 rounded-[10px] flex justify-center items-center md:w-[180px] md:h-[145px]">
                        <img src={carview1} alt="Car view 1" className="w-[90%] h-auto" />
                    </div>
                    <div className="w-[115px] h-[90px] border-2 border-blue-600 rounded-[10px] flex justify-center items-center md:w-[180px] md:h-[145px]">
                        <img src={carview2} alt="Car view 2" className="w-[90%] h-auto" />
                    </div>
                    <div className="w-[115px] h-[90px] border-2 border-blue-600 rounded-[10px] flex justify-center items-center md:w-[180px] md:h-[145px]">
                        <img src={carview3} alt="Car view 3" className="w-[90%] h-auto" />
                    </div>
                </div>
            </section>
            <section className="w-full md:w-1/2">
                <div className="flex flex-col bg-white dark:bg-gray-800 rounded-[10px] p-6 transition-colors duration-200">
                    <div className="flex justify-between items-center">
                        <div className="font-bold text-[32px] leading-[140%] flex items-center text-gray-800 dark:text-gray-100 transition-colors duration-200">
                            {selectedCar.car_title}
                        </div>
                        <img 
                            src={isFavourite ? FavoriteRed : Favorite} 
                            alt="Favorite"
                            onClick={handleFavoriteClick}
                            className="w-6 h-6 cursor-pointer select-none"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault()
                                    handleFavoriteClick()
                                }
                            }}
                        />
                    </div>
                    <div className="flex items-center mt-1.5 gap-2">
                        <div className="flex">
                            <img src={starFill} alt="Star" className="w-5 h-5" />
                            <img src={starFill} alt="Star" className="w-5 h-5" />
                            <img src={starFill} alt="Star" className="w-5 h-5" />
                            <img src={starFill} alt="Star" className="w-5 h-5" />
                            <img src={starOutline} alt="Star" className="w-5 h-5" />
                        </div>
                        <div className="font-medium text-sm leading-[18px] flex items-center tracking-wide text-gray-600 dark:text-gray-400 transition-colors duration-200">
                            440+ Reviewer
                        </div>
                    </div>
                    <div className="font-normal text-base leading-[200%] mt-[30px] mb-16 tracking-[-0.02em] text-gray-600 dark:text-gray-400 transition-colors duration-200 md:text-xl">
                        Experience the {selectedCar.car_title} - {selectedCar.car_brand}. A perfect blend of performance, comfort, and style for your journey.
                    </div>
                    <div className="flex items-start p-0 gap-11 mb-4">
                        <div className="w-1/2">
                            <div className="float-left font-normal text-sm leading-[25px] flex items-center tracking-[-0.02em] text-gray-500 dark:text-gray-400 transition-colors duration-200 md:text-xl">
                                Type Car
                            </div>
                            <span className="float-right font-semibold text-sm leading-[25px] flex items-center text-right tracking-[-0.02em] text-gray-600 dark:text-gray-300 transition-colors duration-200 md:text-xl">
                                {selectedCar.car_body_type}
                            </span>
                        </div>
                        <div className="w-1/2">
                            <div className="float-left font-normal text-sm leading-[25px] flex items-center tracking-[-0.02em] text-gray-500 dark:text-gray-400 transition-colors duration-200 md:text-xl">
                                Capacity
                            </div>
                            <span className="float-right font-semibold text-sm leading-[25px] flex items-center text-right tracking-[-0.02em] text-gray-600 dark:text-gray-300 transition-colors duration-200 md:text-xl">
                                {selectedCar.seat_capacity} Person
                            </span>
                        </div>
                    </div>
                    <div className="flex items-start p-0 gap-11 mb-4">
                        <div className="w-1/2">
                            <div className="float-left font-normal text-sm leading-[25px] flex items-center tracking-[-0.02em] text-gray-500 dark:text-gray-400 transition-colors duration-200 md:text-xl">
                                Gasoline
                            </div>
                            <span className="float-right font-semibold text-sm leading-[25px] flex items-center text-right tracking-[-0.02em] text-gray-600 dark:text-gray-300 transition-colors duration-200 md:text-xl">
                                {selectedCar.maximum_gasoline}L
                            </span>
                        </div>
                        <div className="w-1/2">
                            <div className="float-left font-normal text-sm leading-[25px] flex items-center tracking-[-0.02em] text-gray-500 dark:text-gray-400 transition-colors duration-200 md:text-xl">
                                Brand
                            </div>
                            <span className="float-right font-semibold text-sm leading-[25px] flex items-center text-right tracking-[-0.02em] text-gray-600 dark:text-gray-300 transition-colors duration-200 md:text-xl">
                                {selectedCar.car_brand}
                            </span>
                        </div>
                    </div>
                    <div className="mt-20 flex justify-between">
                        <div>
                            <div className="font-bold text-[28px] leading-[35px] flex items-center text-gray-800 dark:text-gray-100 transition-colors duration-200">
                                ${selectedCar.daily_rate}.00/ <span className="text-base leading-5 text-gray-500 dark:text-gray-400">days</span>
                            </div>
                            <span className="font-bold text-base leading-5 flex items-center line-through text-gray-500 dark:text-gray-400 transition-colors duration-200">
                                ${(selectedCar.daily_rate * 1.25).toFixed(2)}
                            </span>
                        </div>
                        <Link to="/checkout" className="no-underline contents">
                          <div className="flex font-bold text-base leading-5 cursor-pointer justify-center items-center px-5 text-white bg-blue-600 rounded">
                            Rent Now
                          </div>
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default DetailCar