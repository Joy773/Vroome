import { FC } from "react";
import DownArrow from "../../assets/icons/DownArrow";

import { DropDown, Calender } from '../';
import { CITIES, TIME } from "../../utils/constants";
import { useDropDownContext } from "../../contexts/DropDownContext";
import { usePickUpDropOffContext } from "../../contexts/PickUpDropOffContext";

const PickUp: FC = () => {
  const { handleOpenMenu, openMenu, handleOpenMenu3, openMenu3 } = useDropDownContext();
  const { locationOneChange, state, timeOneChange, dateOneChange } = usePickUpDropOffContext();

  return (
    <div className="min-h-[136px] bg-white dark:bg-gray-800 rounded-lg p-5 w-full shadow-sm transition-colors duration-200 sm:p-6 md:p-6 md:px-8 md:w-[calc(50%-0.75rem)] md:min-w-[300px] lg:p-6 lg:px-12 lg:w-[calc(50%-1rem)]">
      <div className="flex gap-2">
        <input type="radio" checked readOnly />
        <label className="text-base font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-200">Pick-Up</label>
      </div>
      <div className="grid grid-cols-1 place-content-center py-4 gap-4 sm:grid-cols-3 sm:gap-0 md:gap-0">
        <div className="border-b border-[rgba(195,212,233,0.4)] dark:border-[rgba(75,85,99,0.4)] pb-2 mb-2 transition-colors duration-200 last:border-b-0 last:pb-0 last:mb-0 sm:border-b-0 sm:border-r sm:border-[rgba(195,212,233,0.4)] dark:sm:border-[rgba(75,85,99,0.4)] sm:pb-0 sm:mb-0 sm:pr-2 sm:mr-2 sm:last:border-r-0 sm:last:pr-0 sm:last:mr-0">
          <div className="font-bold text-base leading-[120%] flex items-center text-gray-800 dark:text-gray-100 transition-colors duration-200 sm:text-base">
            <h4>From</h4>
          </div>
          <div className="flex gap-4 items-center">
            <div className="font-medium flex items-center tracking-[-0.01em] text-gray-500 dark:text-gray-400 text-[10px] leading-[14px] transition-colors duration-200 md:text-sm md:leading-[200%]">
              <h5>{state.location1.length > 0 ? state.location1: 'Select your city'}</h5>
            </div>
            <DownArrow handleClick={handleOpenMenu}/>
          </div>
        </div>
        <div className="border-b border-[rgba(195,212,233,0.4)] dark:border-[rgba(75,85,99,0.4)] pb-2 mb-2 transition-colors duration-200 last:border-b-0 last:pb-0 last:mb-0 sm:border-b-0 sm:border-r sm:border-[rgba(195,212,233,0.4)] dark:sm:border-[rgba(75,85,99,0.4)] sm:pb-0 sm:mb-0 sm:pr-2 sm:mr-2 sm:ml-2 md:mx-[10px] sm:last:border-r-0 sm:last:pr-0 sm:last:mr-0">
          <div className="font-bold text-base leading-[120%] flex items-center text-gray-800 dark:text-gray-100 transition-colors duration-200 sm:text-base">
            <h4>Date</h4>
          </div>
          <div className="flex gap-4 items-center">
            <div className="font-medium flex items-center tracking-[-0.01em] text-gray-500 dark:text-gray-400 text-[10px] leading-[14px] transition-colors duration-200 md:text-sm md:leading-[200%]">
              <h5>{state.date1.length > 0 ? state.date1 : 'Select Your Date'}</h5>
            </div>
            <Calender dateChange={dateOneChange}/>
          </div>
        </div>
        <div className="border-b border-[rgba(195,212,233,0.4)] dark:border-[rgba(75,85,99,0.4)] pb-2 mb-2 transition-colors duration-200 last:border-b-0 last:pb-0 last:mb-0 sm:border-b-0 sm:border-r sm:border-[rgba(195,212,233,0.4)] dark:sm:border-[rgba(75,85,99,0.4)] sm:pb-0 sm:mb-0 sm:pr-2 sm:mr-2 sm:last:border-r-0 sm:last:pr-0 sm:last:mr-0">
          <div className="font-bold text-base leading-[120%] flex items-center text-gray-800 dark:text-gray-100 transition-colors duration-200 sm:text-base">
            <h4>Time</h4>
          </div>
          <div className="flex gap-4 items-center">
            <div className="font-medium flex items-center tracking-[-0.01em] text-gray-500 dark:text-gray-400 text-[10px] leading-[14px] transition-colors duration-200 md:text-sm md:leading-[200%]">
              <h5>{state.time1.length > 0 ? state.time1: 'Select your time'}</h5>
            </div>
            <DownArrow handleClick={handleOpenMenu3} />
          </div>
          <DropDown dropDownItems={TIME} openMenu={openMenu3} dispatchClickFunction={timeOneChange} handleDropDownClose={handleOpenMenu3} />
        </div>
      </div>
      <DropDown dropDownItems={CITIES} openMenu={openMenu} dispatchClickFunction={locationOneChange} handleDropDownClose={handleOpenMenu}/>
    </div>
  )
}

export default PickUp;  