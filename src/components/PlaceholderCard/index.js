import "./PlaceholderCard.css"

export const PlaceholderCard = ({ text }) => {
    return (
        <article className="card placeholder-card">{text}</article>
    )
}