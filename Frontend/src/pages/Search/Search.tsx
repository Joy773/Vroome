import { FC, useContext } from 'react';
import styled from 'styled-components';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { CarsContext } from '../../contexts/CarsContext';
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

const Search: FC = () => {
  const { isDarkMode } = useDarkMode();
  const { searchItems, query } = useContext(CarsContext);

  return (
    <main className={`min-h-screen w-full transition-colors duration-200 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-8`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className={`text-3xl md:text-4xl font-bold mb-2 transition-colors duration-200 ${
          isDarkMode ? 'text-gray-100' : 'text-gray-800'
        }`}>
          Search Results
        </h1>
        
        {query && (
          <p className={`text-base md:text-lg mb-6 transition-colors duration-200 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {searchItems.length > 0 
              ? `Found ${searchItems.length} car${searchItems.length !== 1 ? 's' : ''} for "${query}"`
              : `No cars found for "${query}"`
            }
          </p>
        )}

        {!query && (
          <p className={`text-base md:text-lg mb-6 transition-colors duration-200 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Enter a search term in the search bar to find cars.
          </p>
        )}

        {searchItems.length === 0 && query ? (
          <div className={`rounded-lg p-8 text-center transition-colors duration-200 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <p className={`text-lg transition-colors duration-200 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              No cars match your search. Try searching by car name, brand, or type.
            </p>
          </div>
        ) : searchItems.length > 0 ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {searchItems.map((car) => (
              <GridWrapper key={car._id}>
                <CarCard car={car} />
              </GridWrapper>
            ))}
          </section>
        ) : null}
      </div>
    </main>
  );
};

export default Search;

