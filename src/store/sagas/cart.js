import { put, takeEvery, select } from "redux-saga/effects";
import * as actionTypes from "store/actionTypes";

export function* onSetAssetsAmountToSell() {
  yield takeEvery(
    actionTypes.SET_ASSETS_AMOUNT_TO_SELL_REQUESTED,
    setAssetsAmountToSell
  );
}

function* setAssetsAmountToSell(action) {
  // const state = yield select();
  try {
    yield put({
      type: actionTypes.SET_ASSETS_AMOUNT_TO_SELL_SUCCESS,
      payload: action.payload,
    });
  } catch (e) {
    yield put({
      type: actionTypes.SET_ASSETS_AMOUNT_TO_SELL_FAIL,
      message: e.message,
    });
  }
}

export function* onSetCapAsset() {
  yield takeEvery(actionTypes.SET_CAP_ASSET_REQUESTED, setCapAsset);
}

function* setCapAsset(action) {
  try {
    yield put({
      type: actionTypes.SET_CAP_ASSET_SUCCESS,
      payload: action.payload,
    });
  } catch (e) {
    yield put({ type: actionTypes.SET_CAP_ASSET_FAIL, message: e.message });
  }
}
