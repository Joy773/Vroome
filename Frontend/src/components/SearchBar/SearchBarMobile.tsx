
import { Input, SearchIconElement, SearchSettings2, SearchSettingsContainer } from "./styles";

import { SearchIcon } from "../../assets/icon";

const SearchBarMobile = () => {
    return (
        <SearchSettings2 >
            <SearchSettingsContainer>
                <SearchIconElement src={SearchIcon} />
                <Input type="text" placeholder="Search something here" />
            </SearchSettingsContainer>
        </SearchSettings2>
    )
}

export default SearchBarMobile