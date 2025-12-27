import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Header, FeaturedCards, PickUpDropOff, Footer, PopularCar, RecomendationCar } from '../../components';
import { HomeWrapper, MoreBtn, MoreDiv } from './styles';

const Home: FC = () => {
  return (
    <HomeWrapper>
      <FeaturedCards />
      <PickUpDropOff />
      <PopularCar />
      <RecomendationCar />
      <Footer />
    </HomeWrapper>
  )
}

export default Home
