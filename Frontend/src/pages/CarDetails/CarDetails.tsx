import { FC } from 'react';

import { Header, Footer, AsideLeft, DetailCar, SearchBar } from '../../components';
import { CarsForRent } from '../../components/CarsList';
import { CarDetailsWrapper, Container, MainContent } from './styles';


const CarDetails: FC = () => {
    return (
        <CarDetailsWrapper>
            <SearchBar showSearchBar={true} showFilter={true} />
            <Container>
                <AsideLeft />
                <MainContent>
                    <DetailCar />
                    <CarsForRent />
                </MainContent>
            </Container>
            <Footer />
        </CarDetailsWrapper>
    )
}

export default CarDetails; 