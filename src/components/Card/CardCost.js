import "./CardCost.css"
import { CardNeed } from "./CardNeeds"
import { CardResources } from "./CardResources"

export const CardCost = ({ resources, total }) => {
    console.log(resources)
    if (resources) {
        return (<CardNeed need={{ resources }} position="cost" />)
    }

    return (
        <span className="card-cost-total">{total}</span>
    )
}