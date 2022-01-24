export const currencyExchangeRateByBaseAssetSelector = (asset) => (state) => {
  return state.currencies.price[asset];
};

export const selectedBaseAssetSelector = (state) => {
  return state.currencies.selectedBaseAsset;
};

export const baseAssetPriceSelector = (state) => (asset) => {
  return state.currencies.price[asset];
};
