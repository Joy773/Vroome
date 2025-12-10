import { FC } from "react"

import { Header, Footer, AsideLeft, SearchBar, PickUpDropOff, CarsList } from "../../components"
import { CarDetailsWrapper, Container, MainContent } from "./styles"
import { CarType } from "../../contexts/CarsContext"

const Category: FC = () => {
  // All cars from RecomendationCar and PopularCar
  const allCars: CarType[] = [
    // From RecomendationCar
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
    // From PopularCar (excluding duplicates already in RecomendationCar)
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
    <CarDetailsWrapper>
      <SearchBar showSearchBar={true} showFilter={true} />
      <Container>
        <AsideLeft />
        <MainContent>
          <PickUpDropOff />
          <CarsList searchItems={allCars} />
        </MainContent>
      </Container>
      <Footer />
    </CarDetailsWrapper>
  )
}

export default Category
