import { Link } from 'react-router-dom';

import './styles.css';

const menuItems = [
    { id: 1, text: 'Books', link: '/#' },
    { id: 2, text: 'Make-Up', link: '/#' },
    { id: 3, text: 'For children', link: '/#' },
    { id: 4, text: 'For mummies', link: '/#' },
    { id: 5, text: 'Big daddies', link: '/#' },
];

export const ItemsMenu = () => {
    return (
        <div className='menu-items'>
            {
                menuItems.map(({ id, text, link }) => (
                    <div className='menu-item'>
                        <Link key={id} to={link} >{text}</Link>
                    </div>
                ))
            }
        </div>
    );
};