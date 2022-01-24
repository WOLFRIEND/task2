import * as actionTypes from "store/actionTypes";

export const setAssetsAmountToSell = (payload) => ({
  type: actionTypes.SET_ASSETS_AMOUNT_TO_SELL_REQUESTED,
  payload,
});

export const setCapAsset = (payload) => ({
  type: actionTypes.SET_CAP_ASSET_REQUESTED,
  payload,
});
