import { Dispatch, VoidFunction } from '../../types';

type DropDownProps = {
  dropDownItems: string[];
  openMenu: boolean;
  dispatchClickFunction?: Dispatch;
  handleDropDownClose: VoidFunction;
};

const DropDown = ({ dropDownItems, openMenu, dispatchClickFunction, handleDropDownClose}: DropDownProps) => {
  const handleClick = (e: React.MouseEvent<HTMLLIElement>): void => {
    const target = e.currentTarget;
    if (dispatchClickFunction) {
      dispatchClickFunction(target.innerText);
    }
    handleDropDownClose();
  }

  return (
    <div className={`relative ${openMenu ? 'block' : 'hidden'} w-full h-full z-10`}>
      <ul className="absolute top-0 max-h-[300px] w-full overflow-auto bg-white dark:bg-gray-800 list-none rounded-lg shadow-lg">
        {dropDownItems.map((item, idx) => (
          <li 
            key={idx} 
            onClick={handleClick}
            className="px-4 py-2 cursor-pointer hover:bg-blue-100/25 dark:hover:bg-gray-700 transition-colors"
          >
            <p className="text-xl">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DropDown