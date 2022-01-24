import { combineReducers } from "redux";
import { currenciesReducer } from "store/reducers/currencies";
import { cartReducer } from "store/reducers/cart";

export const rootReducer = combineReducers({
  cart: cartReducer,
  currencies: currenciesReducer,
});
