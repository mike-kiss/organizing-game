import classNames from "classnames";

import { RESOURCES } from "../../utils/resources";

import "./CardNeeds.css"

export const CardNeeds = ({ needs }) => {
    const hasFourNeeds = needs.length === 4

    return (
        <section className={classNames("card-needs-list", { "card-has-four-needs": hasFourNeeds })}>
            {needs?.map((need, index) => {
                return (<CardNeed key={index + JSON.stringify(need)} need={need} position={index} />)
            })}
        </section>
    )
}

export const CardNeed = ({ need, position }) => {
    const attributes = need?.attributes
    const resources = need?.resources
    const hasAttributesAndResources = attributes?.length > 0 && resources?.length

    return (
        <div className={classNames(
            "card-needs",
            `card-needs-${position}`,
            {
                "card-needs-has-attributes-and-resources": hasAttributesAndResources
            })}>
            <section className="card-needs-resources">
                {need.resources?.map((resource, index) => {
                    const resourceValue = resource
                    const resourceName = RESOURCES[index];
                    return (<span key={resourceName} className={`card-need ${resourceName} need-value-${resourceValue}`}>{resourceValue}</span>)
                })}
            </section>
            {attributes && <section className="card-needs-attributes">
                {attributes && <p className="card-needs-attribute">
                    {attributes?.map(((attribute, index) =>
                        (<span key={attribute} className="card-attribute">{`${attribute}${index === attributes.length - 1 ? "" : ", "}`}</span>)
                    ))}
                </p>}
            </section>}
        </div>
    )
}