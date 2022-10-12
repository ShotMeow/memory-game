import React, { FC } from 'react';
import './Modal.css';

interface Props {
    status: 'win' | 'lose';
    attempts ?: number;
    onClick: () => void
}

const Modal: FC<Props> = ({status, attempts, onClick}) => {
    return (
        <div className='modal'>
            <div className="modal__body">
                {status === 'win' ? <h3 className='modal__heading'>Ура, вы выиграли! <br/> Это заняло {attempts && 40 - attempts} ходов</h3> : <h3>Увы, вы проиграли <br/> У вас кончились ходы</h3>}
                <button onClick={onClick}>Сыграть еще</button>
            </div>
        </div>
    );
};

export default Modal;
