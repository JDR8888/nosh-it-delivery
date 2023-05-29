import styles from './cart-item.module.css';


const CartItem = (props) => {

    const addItem = (event) => {
        event.preventDefault();
        props.onAdd(event.target.id)
    }

    const removeItem = (event) => {
        event.preventDefault();
        props.onRemove(event.target.id)
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

                            <p>Quantity: {props.qty}</p>
                            
                        </div>
                    </div>
                    
                </div>
            </summary>
            <p className='contrast'> {props.description} </p>
        </details>
    )
}
export default CartItem;