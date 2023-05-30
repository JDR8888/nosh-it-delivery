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
        amount: 1 
      });
      // when item is added we add up total cost by adding current cost to previous total
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
      // find the index of the item in the ctx array (if it is in there)
        const existingItemIndex = cartState.items.findIndex((cartItem) => cartItem.id === item.id);
        // if it's not missing from the context...
        if (existingItemIndex !== -1) {
          const updatedItems = [...cartState.items];
          // return everything else from the item but with the qty increased by 1
          updatedItems[existingItemIndex] = {
            ...item,
            qty: item.qty + 1,
          };
          // if it was in tehre, we call the set_items function from reducer to just update the totals for cost and item count
          dispatchCartAction({ type: 'SET_ITEMS', items: updatedItems });
        } 
        // if it was not in there, we call the 'add' method from reducer where we concatenate the array with the added item
        else {
          dispatchCartAction({ type: 'ADD', item: item });
        }
      };
      
    const removeItemFromCartHandler = (id) => {
      // find index of item in the ctx array IF it is in there
      const existingItemIndex = cartState.items.findIndex((cartItem) => cartItem.id === item.id);


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