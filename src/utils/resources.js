export const RESOURCES = ['Wisdom', 'Passion', 'Guile', 'Intellect', 'Diligence']
export const NO_MAIN_RESOURCES = [0, 0, 0, 0, 0]

export const getMainCardResources = ({ resources }) => {

    let numMainResources = 0

    if (resources) {
        const maxValue = resources.reduce((m, n) => Math.max(m, n), 0)
        const mainResources = resources.map(resource => {
            if (resource === maxValue) {
                numMainResources++
                return 1
            }
            return 0
        })

        if (numMainResources === resources.length) {
            return NO_MAIN_RESOURCES
        }

        return mainResources
    } else {
        return NO_MAIN_RESOURCES
    }
}

export const getMainResourceClassName = (resources) => {
    return resources.reduce(
        (acc, resource, index) => (`${acc}${resource ? `-${RESOURCES[index]}` : ""}`), "main-resource")
}