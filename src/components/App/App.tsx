import React, {FC, useState} from 'react';
import Layout from "../Layout/Layout";
import './App.css';
import { cardsData } from './App.data';
import Card from "../Card/Card";
import { ICard } from "./App.interface";
import Modal from "../Modal/Modal";
import {cardsShuffleHelper} from "../../helpers/cardsShuffleHelper";

const App: FC = () => {
    const [attempts, setAttempts] = useState<number>(40);
    const [clicks, setClicks] = useState<number>(1);
    const [currentIdCard, setCurrentIdCard] = useState<number | null>(null)
    const [cards, setCards] = useState<ICard[]>(cardsShuffleHelper(cardsData));
    const [lock, setLock] = useState<boolean>(false)

    const onCardClick = (currentCard: ICard) => () => {
        if (currentCard.id === currentIdCard) return

        setClicks(clicks + 1);

        const newCards = [...cards];
        newCards.forEach((card) => {
            if (card.id === currentCard.id) {
                card.isShow = true
            }
        });
        setCards(newCards);

        if (clicks === 1) {
            setCurrentIdCard(currentCard.id);
        } else if (clicks === 2) {
            setLock(true);
            setTimeout(() => {
                setAttempts(attempts - 1)
                if (currentIdCard === currentCard.relation) {
                    newCards.forEach((card) => {
                        if (card.id === currentIdCard || card.id === currentCard.id) {
                            card.guessed = true
                        }
                    })
                    setCards(newCards);
                } else {
                    newCards.forEach((card) => {
                        card.isShow = false
                    });
                    setCards(newCards);
                }
                setClicks(1);
                setCurrentIdCard(null);
                setLock(false);
            }, 1000)
        }
    };

    const handleReset = () => {
        setAttempts(40);

        const newCards = [...cards];
        newCards.forEach((card) => {
            card.guessed = false
            card.isShow = false
        })
        setCards(cardsShuffleHelper(newCards));
    }

    return (
        <Layout attempts={attempts}>
            {!attempts && <Modal onClick={handleReset} status='lose' />}
            {!cards.find((card) => {
                return !card.guessed
            }) && <Modal onClick={handleReset} status='win' attempts={attempts} />}
            <div className={`section__cards-container cards-container ${lock ? 'lock' : ''}`}>
                {cards.map((card) => <Card key={card.id} card={card} onClick={onCardClick} />)}
            </div>
        </Layout>
    );
};

export default App;
