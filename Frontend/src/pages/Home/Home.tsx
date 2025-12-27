import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Header, FeaturedCards, PickUpDropOff, Footer, PopularCar, RecomendationCar } from '../../components';

const Home: FC = () => {
  return (
    <main className="h-full min-h-full w-full">
      <FeaturedCards />
      <PickUpDropOff />
      <PopularCar />
      <RecomendationCar />
      <Footer />
    </main>
  )
}

export default Home
