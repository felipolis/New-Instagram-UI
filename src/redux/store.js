import themeModeSlice from './features/themeModeSlice'
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        themeMode: themeModeSlice
    }
})

export default store