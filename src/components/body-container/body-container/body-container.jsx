import Menu from "../../menu/menu/menu";
import HeroContainer from "../hero-container/hero-container";
import styles from './body-container.module.css';

const BodyContainer = () => {
    
    return (
        <div className={`container ${styles.bodyContainer}`}>
            <HeroContainer />
            <Menu />
        </div>
        
    )
}
export default BodyContainer;