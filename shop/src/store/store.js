import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userStore";
import stockSlice from "./stockStore";
import cartSlice from "./cartStore";
import productSlice from "./productStore";

export const store = configureStore({
	reducer: {
		userSlice,
		stockSlice,
		cartSlice,
		productSlice,
	},
	// devTools: import.meta.env.MODE !== "production",
});
