import { FC } from "react";

import { SingleFeaturedCard, SingleFeaturedCard2 } from '..';
import SearchBar from "../SearchBar/SearchBar";

const FeaturedCards: FC = () => {
  return (
    <>
      <div className="hidden md:block">
      <SearchBar showSearchBar={true} showFilter={true} />
      </div>
      <section className="flex flex-col relative flex-nowrap overflow-x-auto [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
        <style>{`
          .featured-cards-grid {
            display: grid;
            position: relative;
            width: 100%;
            z-index: 5;
            grid-template-columns: repeat(2, 1fr);
            place-content: center;
            gap: 0 var(--spacing-veritical, 32px);
            padding: var(--spacing-veritical, 32px) calc(var(--spacing-horizontal, 64px) - var(--border-radius-general, 10px));
          }
          @media (max-width: 640px) {
            .featured-cards-grid {
              grid-template-columns: 1fr;
              padding: var(--small-spacing-veritical, 25px) calc(var(--small-spacing-horizontal, 32px) - var(--border-radius-general, 10px));
            }
          }
        `}</style>
        <div className="featured-cards-grid">
          <SingleFeaturedCard />
          <SingleFeaturedCard2 />
        </div>
      </section>
    </>
  )
}

export default FeaturedCards;