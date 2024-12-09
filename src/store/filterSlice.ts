import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
    bookName: string;
    minPrice: string;
    maxPrice: string;
    chosenLanguage: string[];
    pageAmount: string[];
}

const initialState: FilterState = {
    bookName: '',
    minPrice: '',
    maxPrice: '',
    chosenLanguage: [],
    pageAmount: [],
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilter: <T extends keyof FilterState>(
            state: FilterState,
            action: PayloadAction<{ key: T; value: FilterState[T] }>
        ) => {
            state[action.payload.key] = action.payload.value;
        },
        resetFilters: () => initialState,
    }
})

export const { setFilter, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;