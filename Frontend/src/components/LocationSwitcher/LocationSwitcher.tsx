import { FC } from 'react'

import { usePickUpDropOffContext } from '../../contexts/PickUpDropOffContext';

const LocationSwitcher: FC = () => {
  const { state, locationOneChange, locationTwoChange } = usePickUpDropOffContext();
   
  const swapLocations = (): void => {
    locationOneChange(state.location2);
    locationTwoChange(state.location1);
  };

  return (
    <div 
      className="flex w-12 h-12 min-w-12 min-h-12 bg-blue-600 rounded-lg justify-center items-center cursor-pointer flex-shrink-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 sm:w-14 sm:h-14 sm:min-w-14 sm:min-h-14 md:relative md:top-auto md:left-auto md:translate-x-0 md:translate-y-0 md:w-16 md:h-16 md:min-w-16 md:min-h-16 md:self-center md:hover:scale-105 md:active:scale-95"
      onClick={swapLocations}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.83584 16.8396H17.4536" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.93188 20.9172L3.83522 16.8394L7.93188 12.7617" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.1672 6.91109L6.54946 6.91109" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0711 2.83344L20.1677 6.91121L16.0711 10.989" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.83584 16.8396H17.4536" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.93188 20.9172L3.83522 16.8394L7.93188 12.7617" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.1672 6.91109L6.54946 6.91109" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0711 2.83344L20.1677 6.91121L16.0711 10.989" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

export default LocationSwitcher;