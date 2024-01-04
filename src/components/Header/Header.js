import { CardsSelector } from "../CardsSelector/CardsSelector"
import { Filters } from "../Filters/Filters"
import "./Header.css"

export const Header = () => {
    return (<header className="header">
        <section>
            <h1 className="header-title">Organizing Game</h1>
            <Filters />
            <CardsSelector />
        </section>
        <section>
            <span>Copyright Mike Kissinger 2023 all rights reserved until I figure out what I'm doing with this.</span>
        </section>
    </header>)
}