import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { converterReducer } from "./reducers/converterReducer";
import { currenciesReducer } from "./reducers/currenciesReducer";

const rootReducer = combineReducers({
	converter: converterReducer,
	currencies: currenciesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
