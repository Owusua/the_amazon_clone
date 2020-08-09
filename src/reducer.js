//this is the store which is represent by a basket, which is an empty array
export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action); //for debugging the basket
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      return {
        //return the current state but changing the basket and and returning whatever is in the basket was plus whatever item you just added
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //logic for Removing item from basket...

      //we cloned the basket
      let newBasket = [...state.basket];

      //found index of the item we were looking for
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //item exist in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket`
        );
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
