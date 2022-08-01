import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import ActionCreators from "../store/actions";

import { AppDispatch, RootState } from "../store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTypedDispatch = () => useDispatch<AppDispatch>();

export const useActions = () => {
	const dispatch = useTypedDispatch();

	return bindActionCreators(ActionCreators, dispatch);
};
