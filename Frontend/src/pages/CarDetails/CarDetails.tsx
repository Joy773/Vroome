import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Header, Footer, AsideLeft, DetailCar, SearchBar } from '../../components';
import CarsForRent from '../../components/CarsList/CarsForRent';


const CarDetails: FC = () => {
    const { id } = useParams<{ id: string }>();
    
    return (
        <main className="h-full min-h-full w-full">
            <SearchBar showSearchBar={true} showFilter={true} />
            <div className="flex flex-col gap-px md:flex-row md:m-0">
                <AsideLeft />
                <div className="flex flex-col max-w-[1245px] p-0 m-0 md:m-0 md:flex-grow">
                    <DetailCar carId={id ? parseInt(id) : null} />
                    <CarsForRent />
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default CarDetails; 