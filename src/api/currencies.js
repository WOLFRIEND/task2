import { $axios } from "api";
import { buildQueryString } from "helpers/api-helpers";

export const getCurrenciesExchangeRate = async (params) => {
  return await $axios.get(`/data/pricemulti?${buildQueryString(params)}`);
};
