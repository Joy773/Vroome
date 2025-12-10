
import { Input, SearchIconElement, SearchSettings3, SearchSettingsContainer } from "./styles";

import { SearchIcon } from "../../assets/icon";

const SearchBar2 = () => {
    return (
        <SearchSettings3>
            <SearchSettingsContainer>
                <SearchIconElement src={SearchIcon} />
                <Input type="text" placeholder="Search something here" />
            </SearchSettingsContainer>
        </SearchSettings3>
    )
}

export default SearchBar2