import challenge from "../../img/challenge-2.png"
import cityHall from "../../img/city-hall.jpeg"
import friends from "../../img/friends.png"
import group from "../../img/group.png"
import highFive from "../../img/high-five.jpeg"
import project from "../../img/project.jpeg"
import wildflowers from "../../img/wildflowers.jpeg"

import "./CardArt.css"

export const CardArt = ({ altText, type, subtype }) => {


    let image

    switch (type) {
        case "Project":
            if (subtype.includes("Horticultural")) {
                image = wildflowers

            } else if (subtype.includes("Political")) {
                image = cityHall
            }
            else if (subtype.includes("Group")) {
                image = group
            }
            else if (subtype.includes("Goal")) {
                image = project
            }
            break

        case "Friend":
            image = friends
            break
        case "Challenge":
            image = challenge
            break
        case "Skill":
        default:
            image = highFive
            break
    }

    let imageStyles = {
        maxWidth: "100%",
        opacity: "0.5"
    }

    return <figure className="card-art-container"><img alt={altText} style={imageStyles} src={image} /></figure>
}