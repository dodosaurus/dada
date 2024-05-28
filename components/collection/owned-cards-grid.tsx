import { compareCardToOwnedCards, sortCardsByRarity } from "@/lib/utils";
import { Card } from "@prisma/client";
import AppCardFront from "../app-card/app-card-front";
import CardPreview from "./card-preview";

type OwnedCardsGridProps = {
  cards: Card[];
  ownedCardsIds: number[];
};
function OwnedCardsGrid({ cards, ownedCardsIds }: OwnedCardsGridProps) {
  const ownedCards = cards.filter((card) => compareCardToOwnedCards(card.id, ownedCardsIds).isOwned);

  //sort by rarity (common, uncommon, rare, epic, legendary)
  // ownedCards.sort((a, b) => {
  //   return sortCardsByRarity(a, b);
  // });

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {ownedCards.map((card) => (
        <div key={card.id} className="hover:rotate-0 xl:hover:rotate-2 transition ease-in-out duration-500 cursor-pointer">
          <CardPreview children={<AppCardFront card={card} />} card={card} />
        </div>
      ))}
    </div>
  );
}

export default OwnedCardsGrid;
