import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { converterSlice, currenciesSlice } from "./slices";

const rootReducer = combineReducers({
	converter: converterSlice,
	currencies: currenciesSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
