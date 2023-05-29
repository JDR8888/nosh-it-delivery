import MenuItem from "../menu-item/menu-item"
import styles from './menu.module.css';
import egg from '../../../accessories/unsplash-egg.jpg';
import tartare from '../../../accessories/tartare.jpg';
import oysters from '../../../accessories/unsplash-oysters.jpg';
import polenta from '../../../accessories/unsplash-polenta.jpg';
import { useState, useContext } from "react";
import CartContext from "../../../context/cart-context";

const Menu = () => {
        // list of menu item objects
        const menuItemsList = [
            {
            id: 'i1',
            qty: 0,
            category: 'savory',
            title: 'Caviar Deviled Eggs',
            image: egg,
            price: 22.99,
            description: 'A pleasant experience waiting to happen. The salty caviar teams up with the devily goodness of the egg. Half-dozen per order.'
            },
            {
                id: 'i2',
                qty: 0,
                category: 'savory',
                title: 'Oyster bucket',
                image: oysters,
                price: 42.99,
                description: "It's a bucket of Oysters as fresh as you are. Comes with lemons and cocktail sauce"
            },
            {
                id: 'i3',
                qty: 0,
                category: 'savory',
                title: 'Wagyu Tartare',
                image: tartare,
                price: 69.99,
                description: "Almost too good, but we won't apologize for it. Comes with two quail eggs on top"
            },
            {
                id: 'i4',
                qty: 0,
                category: 'savory',
                title: 'Oxtail Polenta',
                image: polenta,
                price: 33.36,
                description: "High-end comfort food. Savory oxtail + bone marrow paired with a rich, smooth polenta. Serves 2, if you want it to."
            }
        ];
        // initialize context variable
        const ctx = useContext(CartContext);
        // update qty for items
        const [menuList, setMenuList] = useState(menuItemsList);

        const handleAddItem  = (itemId) => { 
            console.log(itemId)
            const updatedItems = menuList.map((item) => {
                if(item.id === itemId){
                    return {
                        ...item,
                        qty: item.qty + 1,
                    };
                }
            return item;
            });
            setMenuList(updatedItems)
            ctx.addItem(updatedItems.filter((item) => item.id === itemId)[0])
            console.log(ctx.items);
            console.log(ctx.totalAmount);
        };
        const handleRemoveItem  = (itemId) => { 
            console.log(itemId)
            const updatedItems = menuList.map((item) => {
                if(item.id === itemId){
                    if(item.qty > 0){
                        return {
                            ...item,
                            qty: item.qty - 1,
                        };
                    } 
                }
            return item;
            });
            setMenuList(updatedItems)
        };

    return (
        <main className={`container ${styles.menu} `}>
            <header>
                <kbd>Menu</kbd>
            </header>
            {menuList.map(menuList => (
                <MenuItem
                key={menuList.id}
                id={menuList.id}
                title={menuList.title}
                image={menuList.image}
                price={menuList.price}
                description={menuList.description}
                qty={menuList.qty}
                onAdd={handleAddItem}
                onRemove={handleRemoveItem}
                />
            ))}
        </main>
    )
}
export default Menu;