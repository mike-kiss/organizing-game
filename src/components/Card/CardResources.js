import classNames from "classnames"
import { RESOURCES } from "../../utils/resources"

import "./CardResources.css"

export const CardResources = ({ attributes, resources, mainResources }) => {

    const resourcesTotal = resources.reduce((acc, resource) => acc + resource, 0)

    if (resourcesTotal === 0) {
        return null
    }
    return (
        <section className="card-resources-container">
            <aside className="card-resources">
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
            </aside>
            {attributes && <section className="card-attributes">
                {attributes?.map(((attribute, index) =>
                    (<span key={attribute} className="card-attribute">{`${index === 0 ? "" : ", "} ${attribute.replace(" ", '\u00A0')}`}</span>)
                ))}
            </section>}
        </section>
    )
}