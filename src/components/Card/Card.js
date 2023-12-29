import classNames from "classnames"

import { CardArt } from "./CardArt"
import { CardNeeds } from "./CardNeeds"
import { CardResources } from "./CardResources"
import { CardText } from "./CardText"

import { getMainCardResources, getMainResourceClassName } from "../../utils/resources"

import "./Card.css"
import { useCardsContext } from "../../contexts/CardsContext"

export const Card = ({ card }) => {

    const { selectedCards, toggleCardSelection } = useCardsContext()

    const mainResources = getMainCardResources(card)
    const mainCardNeeds = [0, 0, 0, 0, 0]

    return (
        <article
            className={classNames("card", getMainResourceClassName(mainResources), { "card-selected": selectedCards[card.name] })}
            onClick={() => {
                toggleCardSelection(card.name)
            }}
        >
            {(card.resources || card.attributes) && <CardResources {...card} mainResources={mainResources} />}
            <CardHeader {...card} />
            <CardArt {...card} />
            <CardText {...card} />
            {card.needs && <CardNeeds {...card} />}
        </article>
    )
}

export const CardHeader = ({ name, phase, type, subtype, duration }) => {

    return (<header className="card-header color-highlighted">
        <p className="card-header-name">{name}</p>
        <section>
            <p className="card-header-type">{phase ? phase + " " : ""}{type}{subtype ? ", " + subtype : ""} {duration ? ` - ${duration} season${duration > 1 ? "s" : ""}` : ""}</p>
        </section>
    </header>)
}