import { FC } from "react";

import { PickUp, LocationSwitcher, DropOff } from '../';

const PickUpDropOff: FC = () => {
  return (
    <section className="w-full mx-auto p-4 sm:p-6 md:p-8 md:px-[2.3rem] lg:p-8 lg:px-12">
      <div className="flex flex-col items-center gap-4 relative md:flex-row md:items-start md:justify-center md:gap-6 lg:gap-8">
        <PickUp />
        <LocationSwitcher />
        <DropOff />
      </div>
    </section>
  )
}

export default PickUpDropOff;