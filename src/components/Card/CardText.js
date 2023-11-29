import classNames from "classnames"
import { CardCost } from "./CardCost"
import "./CardText.css"

export const CardText = ({ attributes, powers, needs, flavor }) => {
    const hasNeeds = needs?.length > 0
    const hasMultipleNeeds = needs?.length > 1
    const hasFourNeeds = needs?.length === 4
    const bottomNeedHasAttributesAndResources =
        !hasFourNeeds &&
        needs?.length &&
        needs[0]?.attributes &&
        needs[0]?.resources
    const sideNeedsHaveAttributes = needs?.length >= 3 && [needs[1], needs[2]]?.reduce((isNarrow, need) => {
        if (isNarrow || need.attributes?.length > 0 && need.resources) {
            return true
        }
    }, false)

    return (
        <>
            <section
                className={classNames(
                    'card-text',
                    { 'has-needs': hasNeeds },
                    { 'multiple-needs': hasMultipleNeeds },
                    { 'four-needs': hasFourNeeds },
                    { 'bottom-need-has-attributes-and-resources': bottomNeedHasAttributesAndResources },
                    { 'narrow': sideNeedsHaveAttributes })
                }
            >
                {powers && <section className="card-powers">
                    {powers?.map(power =>
                        (<CardPower key={power.text} {...power} />)
                    )}
                </section>}
                {flavor && <section className="card-flavor">{flavor}</section>}
            </section>
        </>
    )
}

export const CardPower = ({ cost, flavor, text }) => {
    return (
        <p className="card-power">
            {cost && <span className="card-power-cost"><CardCost {...cost} /></span>}
            <span className="card-power-flavor">{flavor}</span>{" — "}
            <span className="card-power-text">{text}</span>
        </p>
    )
}