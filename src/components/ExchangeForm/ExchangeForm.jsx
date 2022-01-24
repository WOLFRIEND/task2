import { useCallback } from "react";
import "./ExchangeForm.scss";
import { useDispatch } from "react-redux";
import { setAssetsAmountToSell } from "store/actionCreators/cart";

const MIN_AMOUNT = 0;

export const ExchangeForm = () => {
  const dispatch = useDispatch();

  const handleUserInput = useCallback(
    (e) => {
      dispatch(setAssetsAmountToSell(Number(e.target.value)));
    },
    [setAssetsAmountToSell]
  );

  return (
    <form className="form">
      <label className="form__label" htmlFor="form__input">
        Assets amount to sell:
      </label>
      <input
        className="form__input"
        id="form__input"
        type="number"
        min={MIN_AMOUNT}
        onInput={handleUserInput}
      />
    </form>
  );
};
