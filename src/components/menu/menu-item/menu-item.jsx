import styles from './menu-item.module.css';


const MenuItem = (props) => {

    const addItem = (event) => {
        event.preventDefault();
        props.onAdd(event.target.id)
    }


    return (
        <details className={`${styles.menuItem}`}>
            <summary 
            // role="button" 
            className="contrast outline">
                <div className={styles.summary}>
                    <div className={styles.imgBox}>
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className={styles.description}>
                        <hgroup>
                            <h5> {props.title}</h5>
                            <h6>{props.price}</h6>
                        </hgroup>
                        
                    </div>
                    <div className={styles.order}>
                        <div >
                            <kbd 
                            role='button'
                            id={props.id} 
                            className='contrast' data-tooltip="remove from cart">-
                            </kbd>
                            <kbd>{props.qty}</kbd>
                            <kbd
                            id={props.id}
                            role='button'
                            className='contrast' data-tooltip="add to cart" onClick={addItem}>+</kbd>
                        </div>
                    </div>
                    
                </div>
            </summary>
            <p className='contrast'> {props.description} </p>
        </details>
    )
}
export default MenuItem;