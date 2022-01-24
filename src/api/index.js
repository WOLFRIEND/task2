import axios from "axios";
import { getCurrenciesExchangeRate } from "api/currencies";

export const $axios = axios.create({
  baseURL: "https://min-api.cryptocompare.com",
});

export const API = Object.freeze({
  getCurrenciesExchangeRate,
});
