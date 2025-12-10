import { FC } from "react";

import { FeaturedCardsWrapper, FeaturedHorizontal, Input, SearchIconElement, SearchSettings, SearchSettingsContainer } from "./styles";

import { SingleFeaturedCard, SingleFeaturedCard2 } from '..';
import SearchBar from "../SearchBar/SearchBar";

const FeaturedCards: FC = () => {
  return (
    <>
      <div className="hidden md:block">
      <SearchBar showSearchBar={true} showFilter={true} />
      </div>
      <FeaturedHorizontal>
        <FeaturedCardsWrapper>
          <SingleFeaturedCard />
          <SingleFeaturedCard2 />
        </FeaturedCardsWrapper>
      </FeaturedHorizontal>
    </>
  )
}

export default FeaturedCards;