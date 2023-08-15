import { useState } from "react"
import { useCardsContext } from "../../contexts/CardsContext"

import "./CardsSelector.css"
import { getMainCardResources, getMainResourceClassName } from "../../utils/resources"

export const CardsSelector = () => {
    const [isOpen, setIsOpen] = useState(false)

    const { cards, selectedCards, selectedCardsQuantities, changeSelectedCardQuantity, deSelectCard } = useCardsContext()


    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="cards-selector-open-toggle"
            >
                ☰
            </button>
            {isOpen &&
                <aside className="card-selector-list">
                    <header className="cards-selector-list-header">
                        <span />
                        <button onClick={() => setIsOpen(false)} className="cards-selector-list-close">
                            x
                        </button>
                    </header>
                    <ul>
                        {Object.keys(selectedCards).map(cardName => {
                            if (!selectedCards[cardName]) {
                                return null
                            }
                            const quantity = selectedCardsQuantities[cardName] || 1
                            const card = cards.find(card => card.name === cardName)
                            console.log(cards, card)
                            const mainResources = getMainCardResources(card)
                            const mainResourceClassName = getMainResourceClassName(mainResources)

                            return (
                                <li className={mainResourceClassName}>
                                    <span className="color-highlighted">{cardName}</span>
                                    <div style={{ display: "flex" }}>
                                        <input value={quantity} type="number" onChange={(e) => changeSelectedCardQuantity(cardName, e.target.value)} />
                                        <button onClick={() => deSelectCard(cardName)}>x</button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </aside>
            }
        </>
    )
}