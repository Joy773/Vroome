import { SearchIcon } from "../../assets/icon";

const SearchBar = ({ showSearchBar, showFilter }: { showSearchBar: boolean, showFilter: boolean }) => {
    return (
        <div className={`${showSearchBar ? 'hidden' : 'flex'} sm:${showSearchBar ? 'flex' : 'hidden'} sm:max-h-16 sm:h-full sm:justify-center sm:items-center sm:gap-4 sm:mt-4`}>
            <div className="relative flex flex-[0.25]">
                <img src={SearchIcon} alt="Search" className="w-6 h-6 absolute left-4 bottom-3" />
                <input 
                    type="text" 
                    placeholder="Search something here" 
                    className="w-full h-12 border border-[rgba(195,212,233,0.4)] rounded-[10px] flex min-w-[270px] pl-12 placeholder:text-[#3d5278]"
                />
            </div>
        </div>
    )
}

export default SearchBar