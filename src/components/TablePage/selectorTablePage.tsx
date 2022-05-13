import {RootState} from "../../redux/selectors"

export const isModalOpens = (state: RootState) => state.tableReducer.isModalOpen;
export const formDataSelector = (state: RootState) => state.tableReducer.formData;
export const isEditModalTypeSelector = (state: RootState) => state.tableReducer.isModalOpen;



export const filterItemsSelector = ({tableReducer:{currentTime,search}}: RootState) => ({currentTime,search});
export const EnhancedTableSelector = ({tableReducer:{loading,beerData,limit,page}}: RootState) => ({loading,beerData,limit,page});

