import { fork, all } from "redux-saga/effects";
import {
  onGetCurrenciesExchangeRateRequested,
  onSelectAsset,
} from "store/sagas/currencies";
import { onSetAssetsAmountToSell, onSetCapAsset } from "store/sagas/cart";

export default function* rootSaga() {
  yield all([
    fork(onGetCurrenciesExchangeRateRequested),
    fork(onSelectAsset),
    fork(onSetAssetsAmountToSell),
    fork(onSetCapAsset),
  ]);
}
