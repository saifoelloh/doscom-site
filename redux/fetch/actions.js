import { DATA_FETCHED, FETCING_DATA } from "../action-types"

export const fetchingData = () => ({
  type: FETCING_DATA,
})

export const dataFetched = () => ({
  type: DATA_FETCHED,
})
