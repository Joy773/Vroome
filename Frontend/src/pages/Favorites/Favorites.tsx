import { FC, useContext } from 'react';
import styled from 'styled-components';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { CarsContext } from '../../contexts/CarsContext';
import { CarFavouriteContext } from '../../contexts/CarFavouriteContext';
import CarCard from '../../components/CarCard/CarCard';

const GridWrapper = styled.div`
  width: 100%;
  min-width: 0;
  
  > div {
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    min-width: 0 !important;
  }
`;

const Favorites: FC = () => {
  const { isDarkMode } = useDarkMode();
  const { cars } = useContext(CarsContext);
  const { userFavourite } = useContext(CarFavouriteContext);

  // Filter cars that are favorited (value === true)
  const favoriteCars = cars.filter((car) => {
    const favItem = userFavourite.find((item) => item.carId === car._id);
    return favItem?.value === true;
  });

  return (
    <main className={`min-h-screen w-full transition-colors duration-200 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-8`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          My Favorites
        </h1>
        
        {favoriteCars.length === 0 ? (
          <p className={`text-base md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            You haven't favorited any cars yet. Click the heart icon on any car to add it to your favorites!
          </p>
        ) : (
          <>
            <p className={`text-base md:text-lg mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              You have {favoriteCars.length} favorite car{favoriteCars.length !== 1 ? 's' : ''}
            </p>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {favoriteCars.map((car) => (
                <GridWrapper key={car._id}>
                  <CarCard car={car} />
                </GridWrapper>
              ))}
            </section>
          </>
        )}
      </div>
    </main>
  );
};

export default Favorites;

