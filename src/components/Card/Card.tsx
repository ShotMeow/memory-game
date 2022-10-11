import React, { FC, useState } from 'react';
import { ICard } from "../App/App.interface";
import './Card.css';

const Card: FC<ICard> = ({id, imageUrl, relation}) => {
    const [isShow, setIsShow] = useState<boolean>(false);

    const handleClick = () => {
        setIsShow(true)
    }

    return (
        <article onClick={handleClick} className={`cards-container__card card ${isShow ? 'show' : 'hidden'}`}>
            {isShow ? <img src={imageUrl} alt='Картинка' /> : <h3>K/C</h3>}
        </article>
    );
};

export default Card;
