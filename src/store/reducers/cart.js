import * as actionTypes from "store/actionTypes";
import { CAP_ASSETS } from "const/currencies";

export const INITIAL_STATE = {
  data: {
    amountToSell: 0,
    selectedCapAsset: CAP_ASSETS[0],
  },
  error: false,
  message: null,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_ASSETS_AMOUNT_TO_SELL_SUCCESS:
      return {
        ...state,
        data: { ...state.data, amountToSell: action.payload },
      };
    case actionTypes.SET_ASSETS_AMOUNT_TO_SELL_FAIL:
      return { ...state, data: { ...state.data, amountToSell: 0 } };
    case actionTypes.SET_CAP_ASSET_SUCCESS:
      return {
        ...state,
        data: { ...state.data, selectedCapAsset: action.payload },
      };
    case actionTypes.SET_CAP_ASSET_FAIL:
      return {
        ...state,
        data: { ...state.data, selectedCapAsset: CAP_ASSETS[0] },
        error: true,
        message: action.payload,
      };
    default:
      return state;
  }
};
