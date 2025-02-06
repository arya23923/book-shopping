import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name : cart,
    initialState : {
        items : [],
        noOfItems : 0,
    },
    reducers : {
        addItem: (state, action) => {
            const {name, image, cost} = action.payload;
            const existingItem = state.items.find(item === item.name)

            if (existingItem){
                existingItem.quantity++
            }
            else{
                state.items.push({ name, image, cost, quantity: 1})
            }
            state.numOfItems += 1;
        },

        removeItem: (state, action) => {
            const { name, quantity } = action.payload;
            state.item = state.items.filter((item) => item.name !== name)
            state.numOfItems -= quantity;

            if (state.numOfItems < 0) {
                state.numOfItems = 0;
            }
        }
    }
})