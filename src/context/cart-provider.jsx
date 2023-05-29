import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = {
    items: [],
    totalAmount: 0,
    totalItems: 0
  };

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
      const updatedItems = state.items.concat({
        ...action.item,
        amount: 0 // Assuming you want to initialize the amount to 1 when adding an item
      });
      const updatedTotalAmount = state.totalAmount + action.item.price;
      const updatedTotalItems = state.totalItems + action.item.qty;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalItems: updatedTotalItems
      };
    }
    else if (action.type === 'SET_ITEMS') {
        const calculateTotalAmount = (items) => {
            let totalAmount = 0;
            for (const item of items) {
              totalAmount += item.price * item.qty;
            }
            return totalAmount;
        }
        const calculateTotalItems = (items) => {
            let totalAmount = 0;
            for (const item of items) {
              totalAmount += item.qty;
            }
            return totalAmount;
        }
        return {
          items: action.items,
          totalAmount: calculateTotalAmount(action.items),
          totalItems: calculateTotalItems(action.items) - 1,
        };
      }
    return defaultCartState;
  };
  
  const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
  
    // const addItemToCartHandler = (item) => {
    //   dispatchCartAction({ type: 'ADD', item: item });
    // };
    const addItemToCartHandler = (item) => {
        const existingItemIndex = cartState.items.findIndex((cartItem) => cartItem.id === item.id);
      
        if (existingItemIndex !== -1) {
          const updatedItems = [...cartState.items];
          updatedItems[existingItemIndex] = {
            ...item,
            qty: item.qty + 1,
          };
      
          dispatchCartAction({ type: 'SET_ITEMS', items: updatedItems });
        } else {
          dispatchCartAction({ type: 'ADD', item: item });
        }
      };
      
  
    const removeItemFromCartHandler = (id) => {
      dispatchCartAction({ type: 'REMOVE', id: id });
    };
  
    const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      totalItems: cartState.totalItems,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler
    };
  
    return (
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    );
  };
 
  export default CartProvider;