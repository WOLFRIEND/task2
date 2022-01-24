import * as actionTypes from "store/actionTypes";

export const getCurrenciesExchangeRate = (payload) => ({
  type: actionTypes.GET_CURRENCIES_EXCHANGE_RATE_REQUESTED,
  payload,
});

export const selectAsset = (payload) => ({
  type: actionTypes.SELECT_ASSET_REQUESTED,
  payload,
});
