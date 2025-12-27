import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Header, Footer, AsideLeft, DetailCar, SearchBar } from '../../components';
import { CarsForRent } from '../../components/CarsList';
import { CarDetailsWrapper, Container, MainContent } from './styles';


const CarDetails: FC = () => {
    const { id } = useParams<{ id: string }>();
    
    return (
        <CarDetailsWrapper>
            <SearchBar showSearchBar={true} showFilter={true} />
            <Container>
                <AsideLeft />
                <MainContent>
                    <DetailCar carId={id ? parseInt(id) : null} />
                    <CarsForRent />
                </MainContent>
            </Container>
            <Footer />
        </CarDetailsWrapper>
    )
}

export default CarDetails; 