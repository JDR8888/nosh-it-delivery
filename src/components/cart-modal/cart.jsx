import CartContext from "../../context/cart-context";
import MenuItem from "../menu/menu-item/menu-item";
import Menu from "../menu/menu/menu";
import { useContext } from "react";
import CartItem from "./cart-item/cart-item";

const Cart = (props) => {
    const ctx = useContext(CartContext);
    const chosenItems = ctx.items;
    console.log(chosenItems);
    return (
        <dialog open>
            <article>
                <header>
                    <hgroup>
                    <h2>Get ready to Nosh it up</h2>
                    <h3>Here's what you have in your cart so far</h3>
                    </hgroup>
                </header>
                <main>
                    {ctx.items.map(item => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            qty={item.qty}
                            image={item.image}
                        />
                    ))}
                </main>
                <p> Total: ${ctx.totalAmount} </p>    
                <footer className="grid">
                    <button> Order </button>
                    <button className="secondary" onClick={props.onClose}> Cancel </button>
                </footer>
            </article>
    </dialog>
    )
}
export default Cart;