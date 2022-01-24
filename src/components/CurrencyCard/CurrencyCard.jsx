import "./CurrencyCard.scss";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrenciesExchangeRate,
  selectAsset,
} from "store/actionCreators/currencies";
import {
  currencyExchangeRateByBaseAssetSelector,
  selectedBaseAssetSelector,
} from "store/selectors/currencies";

import { formatPrice } from "helpers/format-price-helper";

export const CurrencyCard = ({ baseAsset, capAssets }) => {
  const dispatch = useDispatch();
  const currencyExchangeRateByBaseAsset = useSelector(
    currencyExchangeRateByBaseAssetSelector(baseAsset)
  );
  const selectedBaseAsset = useSelector(selectedBaseAssetSelector);

  const renderCapAssets = () => {
    return Object.entries(currencyExchangeRateByBaseAsset).map(
      ([assetCode, price]) => {
        return (
          <div key={assetCode} className="card__body-item">
            <p className="card__body-item-title">{assetCode}:</p>
            <p className="card__body-item-subtitle">{formatPrice(price)}</p>
          </div>
        );
      }
    );
  };

  const selectCard = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(selectAsset(baseAsset));
    },
    [dispatch, baseAsset]
  );

  // Call API.
  useEffect(() => {
    dispatch(
      getCurrenciesExchangeRate({
        fsyms: baseAsset,
        tsyms: capAssets,
      })
    );
  }, [baseAsset, capAssets]);

  return (
    <div
      className={`card ${
        selectedBaseAsset === baseAsset ? "card_selected" : ""
      }`}
      onClick={selectCard}
    >
      <div className="card__header">{baseAsset}</div>
      <div className="card__body">{renderCapAssets()}</div>
    </div>
  );
};
