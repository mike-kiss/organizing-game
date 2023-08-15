import { useCardsContext } from "../../contexts/CardsContext"
import { PlaceholderCard } from "../PlaceholderCard"

import { Card } from "../Card"

export const CardsList = () => {

    const { cardCopies, getFilteredCards } = useCardsContext()

    const filteredCards = getFilteredCards()

    console.log("🦄️", filteredCards)

    return (<section className="card-container">
        {/*<PlaceholderCard text={JSON.stringify(cardsFilters)} /> */}
        {filteredCards?.map(card => {
            // if (!card) {
            //     return;
            // }

            const copiesOfCards = []
            for (var i = 1; i <= cardCopies; i++) {
                copiesOfCards.push(<Card key={card?.name + "-" + i} card={card} />)
            }

            return copiesOfCards
        })}

    </section>)
}