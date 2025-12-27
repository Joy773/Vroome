import { FC, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SingleFeaturedCard3 from '../SingleFeaturedCard/SingleFeaturedCard3'
import { ActionButton, CarDescription, CarDetailImages, CarInfo, CarInfoContent, CarPrice, CarPriceAmt, CarRating, CarSpec, Container, InnerDiv } from './styles'
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
            <Container>
                <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
                    <p>Loading car details...</p>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Please wait while we fetch the car information.</p>
                    <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: '#999' }}>
                        Fetching cars from API... (cars loaded: {cars?.length || 0})
                    </p>
                    <p style={{ fontSize: '0.75rem', marginTop: '1rem', color: '#999', fontStyle: 'italic' }}>
                        Make sure your backend server is running on http://localhost:9090
                    </p>
                </div>
            </Container>
        )
    }

    if (!selectedCar && !isLoading) {
        return (
            <Container>
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                    <h2 style={{ color: '#333', marginBottom: '1rem' }}>Car not found</h2>
                    <p style={{ color: '#666' }}>The car you're looking for doesn't exist or has been removed.</p>
                    <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                        Car ID: {carId} | Total cars loaded: {cars.length}
                    </p>
                </div>
            </Container>
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
        <Container>
            <InnerDiv>
                <div>
                    <SingleFeaturedCard3 carImage={selectedCar.file_path} />
                </div>
                <CarDetailImages>
                    <div><img src={carview1} alt="Car view 1" /></div>
                    <div><img src={carview2} alt="Car view 2" /></div>
                    <div><img src={carview3} alt="Car view 3" /></div>
                </CarDetailImages>
            </InnerDiv>
            <InnerDiv>
                <CarInfo>
                    <CarDescription>
                        <div>{selectedCar.car_title}</div>
                        <img 
                            src={isFavourite ? FavoriteRed : Favorite} 
                            alt="Favorite"
                            onClick={handleFavoriteClick}
                            style={{ cursor: 'pointer', userSelect: 'none' }}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault()
                                    handleFavoriteClick()
                                }
                            }}
                        />
                    </CarDescription>
                    <CarRating>
                        <div>
                            <img src={starFill} alt="Star" />
                            <img src={starFill} alt="Star" />
                            <img src={starFill} alt="Star" />
                            <img src={starFill} alt="Star" />
                            <img src={starOutline} alt="Star" />
                        </div>
                        <div>440+ Reviewer</div>
                    </CarRating>
                    <CarInfoContent>
                        Experience the {selectedCar.car_title} - {selectedCar.car_brand}. A perfect blend of performance, comfort, and style for your journey.
                    </CarInfoContent>
                    <CarSpec>
                        <div>
                            <div>Type Car</div>
                            <span>{selectedCar.car_body_type}</span>
                        </div>
                        <div>
                            <div>Capacity</div>
                            <span>{selectedCar.seat_capacity} Person</span>
                        </div>
                    </CarSpec>
                    <CarSpec>
                        <div>
                            <div>Gasoline</div>
                            <span>{selectedCar.maximum_gasoline}L</span>
                        </div>
                        <div>
                            <div>Brand</div>
                            <span>{selectedCar.car_brand}</span>
                        </div>
                    </CarSpec>
                    <CarPrice>
                        <div>
                            <div>${selectedCar.daily_rate}.00/ <span>days</span></div>
                            <CarPriceAmt>${(selectedCar.daily_rate * 1.25).toFixed(2)}</CarPriceAmt>
                        </div>
                        <Link to="/checkout" style={{ textDecoration: 'none', display: 'contents' }}>
                          <ActionButton>Rent Now</ActionButton>
                        </Link>
                    </CarPrice>
                </CarInfo>
            </InnerDiv>
        </Container>
    )
}

export default DetailCar