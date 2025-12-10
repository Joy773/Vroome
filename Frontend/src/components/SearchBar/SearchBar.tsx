
import { Input, SearchIconElement, SearchSettings, SearchSettingsContainer } from "./styles";

import { SearchIcon } from "../../assets/icon";

const SearchBar = ({ showSearchBar, showFilter }: { showSearchBar: boolean, showFilter: boolean }) => {
    return (
        <SearchSettings showSearchBar={showSearchBar}>
            <SearchSettingsContainer>
                <SearchIconElement src={SearchIcon} />
                <Input type="text" placeholder="Search something here" />
            </SearchSettingsContainer>
        </SearchSettings>
    )
}

export default SearchBar