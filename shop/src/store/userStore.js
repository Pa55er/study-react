import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
	name: "userSlice", // 보관통 이름
	initialState: {
		name: "somy",
		age: 20,
	}, // 초기값
	reducers: {
		changeName: (state, action) => {
			state.name = action.payload;
		},
		changeAge: (state, action) => {
			state.age = action.payload;
		},
	},
});
export const { changeName, changeAge } = userSlice.actions;

export default userSlice.reducer;
