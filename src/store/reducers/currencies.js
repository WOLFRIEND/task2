import * as actionTypes from "store/actionTypes";
import { BASE_ASSETS } from "const/currencies";

export const INITIAL_STATE = {
  price: {
    BTC: {
      UAH: 0,
      USD: 0,
      RUB: 0,
    },
    ETH: {
      UAH: 0,
      USD: 0,
      RUB: 0,
    },
    XRP: {
      UAH: 0,
      USD: 0,
      RUB: 0,
    },
  },
  selectedBaseAsset: BASE_ASSETS[0],
  amountToSell: 0,
  error: false,
  message: null,
};

export const currenciesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_CURRENCIES_EXCHANGE_RATE_SUCCESS:
      return { ...state, price: { ...state.price, ...action.payload } };
    case actionTypes.GET_CURRENCIES_EXCHANGE_RATE_FAIL:
      return { ...state, ...INITIAL_STATE, error: true, message: action };
    case actionTypes.SELECT_ASSET_SUCCESS:
      return { ...state, selectedBaseAsset: action.payload };
    case actionTypes.SELECT_ASSET_FAIL:
      return {
        ...state,
        selectedBaseAsset: BASE_ASSETS[0],
        error: true,
        message: action,
      };
    default:
      return state;
  }
};
