import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import nameItemNavReducer from "./reducer/nameItemNav/nameItemNavSlice";

export const store = configureStore({
	reducer: {
		nameItemNav: nameItemNavReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
