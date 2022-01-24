import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";
import { API } from "api";
import * as actionTypes from "store/actionTypes";

export function* onGetCurrenciesExchangeRateRequested() {
  yield takeEvery(
    actionTypes.GET_CURRENCIES_EXCHANGE_RATE_REQUESTED,
    getCurrenciesExchangeRate
  );
}

// worker Saga: will be fired on GET_CURRENCIES_EXCHANGE_RATE_REQUESTED actions
function* getCurrenciesExchangeRate(action) {
  try {
    const { data } = yield call(API.getCurrenciesExchangeRate, action.payload);
    yield put({
      type: actionTypes.GET_CURRENCIES_EXCHANGE_RATE_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: actionTypes.GET_CURRENCIES_EXCHANGE_RATE_FAIL,
      message: e.message,
    });
  }
}

export function* onSelectAsset() {
  yield takeLatest(actionTypes.SELECT_ASSET_REQUESTED, selectAsset);
}

function* selectAsset(action) {
  // const state = yield select();
  // console.dir(state)
  try {
    yield put({
      type: actionTypes.SELECT_ASSET_SUCCESS,
      payload: action.payload,
    });
  } catch (e) {
    yield put({ type: actionTypes.SELECT_ASSET_FAIL, message: e.message });
  }
}
