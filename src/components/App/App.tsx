import React, { FC, useState } from 'react';
import Layout from "../Layout/Layout";
import './App.css';
import { cardsData } from './App.data';
import Card from "../Card/Card";

const App: FC = () => {
    const [attempts, setAttempts] = useState<number>(40);
    return (
        <Layout attempts={attempts}>
            <div className="section__cards-container cards-container">
                {cardsData.map(card => <Card id={card.id} imageUrl={card.imageUrl} relation={card.relation} />)}
            </div>
        </Layout>
    );
};

export default App;
