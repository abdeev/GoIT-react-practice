import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cards: [],
};

export const cardsSlice = createSlice({
    name: "cardsSlice",
    initialState,
    reducers: {

        addCard( state, action ) {
            // console.log(action.payload);
        },

        // deleteCard( state, action ) {
        //     console.log(state);
        // },

    },
});


export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
