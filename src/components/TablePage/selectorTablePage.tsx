import {RootState} from "../../redux/selectors"

export const isModalOpens = (state: RootState) => state.tableReducer.isModalOpen;
export const currentTimes = (state: RootState) => state.tableReducer.currentTime;
export const searches = (state: RootState) => state.tableReducer.search;
export const loadings = (state: RootState) => state.tableReducer.loading;
export const beerDatas = (state: RootState) => state.tableReducer.beerData;
export const limits = (state: RootState) => state.tableReducer.limit;
export const pages = (state: RootState) => state.tableReducer.page;
