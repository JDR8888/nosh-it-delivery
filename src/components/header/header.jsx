import { useContext } from 'react';
import styles from './header.module.css';
import {GrCart} from 'react-icons/Gr'; 
import CartContext from '../../context/cart-context';

const Header = (props) => {
    const ctx = useContext(CartContext);

    return (
            <nav className={`contrast ${styles.header}`}>
                <ul></ul>
                <ul>
                    <li><u> Nosh-it </u></li>
                </ul>
                <ul className={styles.cartBtn}>
                <a href="#" onClick={props.onOpen} role="button" data-tooltip="view cart" data-placement="bottom"> <GrCart /> <sup>{ctx.totalItems} </sup></a>
                </ul>
            </nav>
    )
}

export default Header;