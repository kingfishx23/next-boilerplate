import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isSidebarOpen: false,
	isAuthPromptOpen: false,
};

const slice = createSlice({
	name: 'layoutPublic',
	initialState,
	reducers: {
		resetState: () => initialState,
		setIsSidebarOpen: (state, action) => {
			state.isSidebarOpen = action.payload;
		},
		setIsAuthPromptOpen: (state, action) => {
			state.isAuthPromptOpen = action.payload;
		},
	},
});

export const _layoutPublic = slice.actions;
export const $layoutPublic = ({ layoutPublic }) => layoutPublic;
export default slice.reducer;
