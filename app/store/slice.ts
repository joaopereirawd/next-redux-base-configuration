import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

// Define a type for the slice state
export interface StringState {
    value: string,
}

// Define the initial state using that type
const initialState: StringState = {
    value: 'This is my initial string',
}

export const stringReplace = createSlice({
    name: 'stringReplacer',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        changeString: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { changeString } = stringReplace.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.text.value

export default stringReplace.reducer