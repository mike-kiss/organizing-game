import { useCardsContext } from "../../contexts/CardsContext"
import { CARD_TYPES } from "../../utils/cards"

import "./Filters.css"

export const Filters = () => {

    const { cardCopies, setCardCopies, currentCardName, setCurrentCardName, currentDeck, decks, setCardFilterValue, setCurrentDeck, showSelected, setShowSelected } = useCardsContext()

    return (
        <section className="header-filters">
            {<div>
                <label htmlFor="deck-select">Deck</label>
                <select name="deck-select" onChange={(e) => {
                    setCurrentDeck(e.target.value)
                }}>
                    <option value="All">All</option>
                    {Object.keys(decks).map((deck) => (<option key={deck} value={deck}>
                        {decks[deck].name}
                    </option>))}
                </select>
            </div>}
            <div className="header-filter">
                <label htmlFor="card-type-select">Card Type</label>
                <select name="card-type-select" onChange={(e) => {
                    setCardFilterValue("type", e.target.value)
                }}>
                    <option value="All">All</option>
                    {CARD_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
            </div>
            <div className="header-filter">
                <label htmlFor="card-name-input">Name</label>
                <input name="card-name-input" value={currentCardName} onChange={(e) => {
                    setCurrentCardName(e.target.value)
                }} />
            </div>
            <div className="card-filters-card-copies">
                <label htmlFor="card-copies-input">Copies</label>
                <input
                    name="card-copies-input"
                    value={cardCopies}
                    onChange={(e) => {
                        const newValue = e.target.value || 1
                        setCardCopies(newValue)
                    }}
                    type="number"
                    min={1}
                />
            </div>
            <div className="card-filters-show-selected">
                <label htmlFor="show-selected-checkbox">Show Selected</label>
                <input
                    name="show-selected-checkbox"
                    type="checkbox"
                    checked={showSelected}
                    onChange={(e) => { setShowSelected(e.target.checked) }}
                />
            </div>
        </section>
    )
}