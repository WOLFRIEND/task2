export const assetsAmountToSellSelector = (state) => {
  return state.cart.data.amountToSell;
};

export const selectedCapAssetSelector = (state) => {
  return state.cart.data.selectedCapAsset;
};
