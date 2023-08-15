import classNames from "classnames"
import { RESOURCES } from "../../utils/resources"

import "./CardResources.css"

export const CardResources = ({ resources, mainResources }) => {

    const resourcesTotal = resources.reduce((acc, resource) => acc + resource, 0)

    if (resourcesTotal === 0) {
        return null
    }
    return (
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
    )
}