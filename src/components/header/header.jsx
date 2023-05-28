import styles from './header.module.css';
import {GrCart} from 'react-icons/Gr'; 
const Header = () => {

    return (
            <nav className={`contrast ${styles.header}`}>
                <ul>

                </ul>
                <ul>
                    <li><u> Nosh-it </u></li>
                </ul>
                <ul className={styles.cartBtn}>
                <a href="#" role="button" data-tooltip="view cart" data-placement="bottom"> <GrCart /> <sup>1</sup></a>
                </ul>
            </nav>
    )
}

export default Header;