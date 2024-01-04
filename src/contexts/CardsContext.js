import { useContext, createContext, useState } from "react";

import challenges from "../data/challenges.json"
import levelOneFriends from "../data/levelOneFriends.json"
import levelTwoFriends from "../data/levelTwoFriends.json"
import levelThreeFriends from "../data/levelThreeFriends.json"
import goals from "../data/goals.json"
import groups from "../data/groups.json"

import abolishLawnsWithGrannysGuile from "../decks/AbolishLawnsWithGrannysGuile.json"
import medicineForTheMasses from "../decks/MedicineForTheMasses.json"

const CardsContext = createContext({})

export const useCardsContext = () => {
    const context = useContext(CardsContext)

    if (!context) {
        console.log("ERROR! CardsContext was used outside its provider!")
    }

    return context;
}

export const CardsProvider = ({ children }) => {
    // Cards State
    const [cards, setCards] = useState([
        ...levelOneFriends,
        ...levelTwoFriends,
        ...levelThreeFriends,
        ...groups,
        ...goals,
        ...abolishLawnsWithGrannysGuile.cards,
        ...challenges
    ])
    const [decks, setDecks] = useState({
        "abolishLawnsWithGrannysGuile": abolishLawnsWithGrannysGuile,
        "medicineForTheMasses": medicineForTheMasses
    })

    console.log("CHALLENGES!", challenges)
    // Filtering State
    const [currentDeck, setCurrentDeck] = useState(null)
    const [currentCardName, setCurrentCardName] = useState("")
    const [cardsFilters, setCardsFilters] = useState({ type: "All" })
    const [cardCopies, setCardCopies] = useState(1)
    const [selectedCards, setSelectedCards] = useState({})
    const [selectedCardsQuantities, setSelectedCardsQuantities] = useState({})
    const [showSelected, setShowSelected] = useState(false)

    /**
     * Card Filtering
     */
    function setCardFilterValue(filter, value) {
        const newCardFilterValues = { ...cardsFilters, [filter]: value }
        setCardsFilters(newCardFilterValues)
    }

    function getFilteredCards() {

        if (showSelected) {
            return (Object.keys(selectedCards).flatMap(cardName => {
                if (selectedCards[cardName]) {
                    const card = cards.find(card => card?.name === cardName)
                    const cardCollection = []
                    for (let i = selectedCardsQuantities[cardName] || 1; i > 0; i--) {
                        cardCollection.push(card)
                    }
                    return cardCollection
                } else {
                    return null
                }
            })).filter(card => card !== null)
        }

        return (decks[currentDeck]?.cards || cards).filter(card => {
            // First, check the name filter
            if (currentCardName.length > 0 && !card.name.toLowerCase().includes(currentCardName.toLowerCase())) {
                console.log("filtered by name")
                return false
            }
            // Hack to avoid having to make subtype filtering
            // if (!card.subtype || !card.subtype.toLowerCase().includes("Goal".toLocaleLowerCase()) || card.subtype.toLowerCase().includes("Political".toLocaleLowerCase())) {
            //     return false
            // }

            // Same but for Seed and Sprout cards
            // if (!card?.phase === "Seed" && !card?.phase === "Sprout") {
            //     return false
            // }

            // Then check the other filters (currently only Type)
            let include = true
            Object.keys(cardsFilters).forEach(filter => {
                const filterValue = cardsFilters[filter]
                if (filterValue && filterValue !== "All" && include && card[filter] !== filterValue) {
                    console.log("FILTERED!", filter, card[filter], cardsFilters[filter])
                    include = false
                }
            })
            return include
        })
    }

    /**
     * Card Selecting
     */
    function selectCard(cardName) {
        if (!selectedCards[cardName]) {
            const newSelectedCards = { ...selectedCards }
            newSelectedCards[cardName] = true
            setSelectedCards(newSelectedCards)
        }
    }
    function deSelectCard(cardName) {
        if (selectedCards[cardName]) {
            const newSelectedCards = { ...selectedCards }
            newSelectedCards[cardName] = false
            setSelectedCards(newSelectedCards)
        }
    }
    function toggleCardSelection(cardName) {
        if (!selectedCards[cardName]) {
            selectCard(cardName)
        } else {
            deSelectCard(cardName)
        }
    }
    function changeSelectedCardQuantity(cardName, quantity) {
        const newSelectedCardsQuantities = { ...selectedCardsQuantities }
        newSelectedCardsQuantities[cardName] = quantity
        setSelectedCardsQuantities(newSelectedCardsQuantities)
    }

    return (<CardsContext.Provider
        value={{
            // simple multiplier for all cards. Being replaced by card quantity selection
            cardCopies,
            setCardCopies,
            // The Cards!
            cards,
            decks,  // <- This will probably go away once we are saving lists of cards.
            //Filters for the Cards!
            cardsFilters,
            currentCardName,
            setCurrentCardName,
            currentDeck,
            setCurrentDeck,
            getFilteredCards,
            setCardFilterValue,
            showSelected,
            setShowSelected,
            //Selecting Cards
            selectedCards,
            selectCard,
            deSelectCard,
            toggleCardSelection,
            selectedCardsQuantities,
            changeSelectedCardQuantity
        }}>
        {children}
    </CardsContext.Provider>)
}