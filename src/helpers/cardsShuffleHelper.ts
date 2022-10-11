import {ICard} from "../components/App/App.interface";

export const cardsShuffleHelper = (cards: ICard[]) => {
    return cards.sort(() => {
        return 0.5 - Math.random()
    })
}