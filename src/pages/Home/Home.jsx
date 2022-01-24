import { CurrencyCard } from "components/CurrencyCard/CurrencyCard";
import { ExchangeForm } from "components/ExchangeForm/ExchangeForm";
import "./Home.scss";
import { BASE_ASSETS, CAP_ASSETS } from "const/currencies";
import { useSelector, useDispatch } from "react-redux";
import {
  baseAssetPriceSelector,
  selectedBaseAssetSelector,
} from "store/selectors/currencies";
import {
  assetsAmountToSellSelector,
  selectedCapAssetSelector,
} from "store/selectors/cart";
import { setCapAsset } from "store/actionCreators/cart";
import { useCallback } from "react";
import { formatPrice } from "helpers/format-price-helper";

export const Home = () => {
  // https://api.binance.com/api/v3/ticker/price?symbol=BTCUAH

  // https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=UAH,USD,RUB

  const dispatch = useDispatch();
  const selectedBaseAsset = useSelector(selectedBaseAssetSelector);
  const assetsAmountToSell = useSelector(assetsAmountToSellSelector);
  const selectedCapAsset = useSelector(selectedCapAssetSelector);
  const baseAssetPrice = useSelector(baseAssetPriceSelector);

  const renderCurrenciesCards = () => {
    return BASE_ASSETS.map((asset) => {
      return (
        <CurrencyCard key={asset} baseAsset={asset} capAssets={CAP_ASSETS} />
      );
    });
  };

  const selectCapAsset = useCallback(
    (asset) => {
      dispatch(setCapAsset(asset));
    },
    [dispatch]
  );

  const calculateExchange = useCallback(() => {
    return formatPrice(
      Number(baseAssetPrice(selectedBaseAsset)[selectedCapAsset]) *
        Number(assetsAmountToSell)
    );
  }, [baseAssetPrice, selectedBaseAsset, assetsAmountToSell, selectedCapAsset]);

  const renderCapAssetsCards = () => {
    return CAP_ASSETS.map((asset) => {
      return (
        <div
          key={asset}
          onClick={() => {
            selectCapAsset(asset);
          }}
          className={`cap-card ${
            selectedCapAsset === asset ? "cap-card_selected" : ""
          }`}
        >
          <p className="cap-card__title">{asset}</p>
        </div>
      );
    });
  };

  return (
    <div className="exchange">
      <section className="exchange__section">
        <div className="exchange__cards">{renderCurrenciesCards()}</div>
      </section>
      <section className="exchange__section">
        <div className="exchange__selected-base-asset">
          <p className="exchange__selected-base-asset-title">
            Selected asset: {selectedBaseAsset}
          </p>
        </div>
      </section>
      <section className="exchange__section">
        <ExchangeForm />
      </section>
      <section className="exchange__section">
        <div className="cap-cards-wrapper">{renderCapAssetsCards()}</div>
      </section>
      <section className="exchange__section">
        <p className="exchange__info">
          {assetsAmountToSell} {selectedBaseAsset} will be "
          {calculateExchange()}" in {selectedCapAsset}
        </p>
      </section>
    </div>
  );
};
