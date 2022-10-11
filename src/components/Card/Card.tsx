import React, { FC } from 'react';
import { ICard } from "../App/App.interface";
import './Card.css';

interface Props {
    card: ICard;
    onClick: (card: ICard) => () => void
}

const Card: FC<Props> = ({card, onClick}) => {

    return (
        <article onClick={onClick(card)} className={`cards-container__card card ${card.isShow ? 'show' : 'hidden'} ${card.guessed ? 'guessed' : ''}`}>
            {card.isShow ? <img src={card.imageUrl} alt='Картинка' /> : <h3>K/C</h3>}
        </article>
    );
};

export default Card;
