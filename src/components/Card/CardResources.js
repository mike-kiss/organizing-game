import classNames from "classnames"
import { RESOURCES } from "../../utils/resources"

import "./CardResources.css"

export const CardResources = ({ attributes, resources, mainResources }) => {

    const resourcesTotal = resources?.reduce((acc, resource) => acc + resource, 0)
    const hasAttributes = attributes && attributes.length > 0

    console.log("resources total", resourcesTotal, attributes)

    if ((!resourcesTotal || resourcesTotal === 0) && !hasAttributes) {
        return null
    }

    return (
        <section className="card-resources-container">
            {attributes && attributes.length > 0 && <section className="card-attributes">
                {attributes?.map(((attribute, index) =>
                    (<span key={attribute} className="card-attribute">{`${attribute.replace(" ", '\u00A0')}${index < attributes.length - 1 ? ",\u00A0" : ""}`}</span>)
                ))}
            </section>}
            <section className="card-resources">
                {resources?.map((resource, index) => {
                    const resourceValue = resource
                    const resourceName = RESOURCES[index];
                    const resourceValueLength = resourceValue.toString().length

                    return (
                        <span
                            key={resourceName}
                            className={classNames(
                                "card-resource",
                                resourceName,
                                `resource-value-${resourceValue}`,
                                `resource-value-length-${resourceValueLength}`,
                                { "is-main-resource": mainResources && mainResources[index] }
                            )}
                        >
                            {resourceValue}
                        </span>)
                })}
            </section>
        </section>
    )
}