import { CardsProvider } from "./CardsContext"

export const ContextWrapper = ({ children }) => {

    return (
        <CardsProvider>{children}</CardsProvider>
    )
}