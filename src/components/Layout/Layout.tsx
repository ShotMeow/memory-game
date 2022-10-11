import React, {FC, PropsWithChildren} from 'react';
import './Layout.css';

interface Props {
    attempts: number
}

const Layout: FC<PropsWithChildren<Props>> = ({attempts, children}) => {
    return (
        <div className='layout'>
            <header className='layout__header header'>
                <h1 className='header__heading'>Memory</h1>
            </header>
            <main className='layout__main main'>
                <aside className='layout__aside aside'>
                    <p className='aside__info'>Сделано <br/> ходов <br/> <span className='aside__primary'>{40 - attempts}</span></p>
                </aside>
                <section className='layout__section section'>{children}</section>
                <aside className='layout__aside main'>
                    <p className='aside__info'>Осталось <br/> попыток <br/> <span className='aside__primary'>{attempts}</span></p>
                </aside>
            </main>
        </div>
    );
};

export default Layout;
