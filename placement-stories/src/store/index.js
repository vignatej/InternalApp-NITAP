import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import storiesSlice from "./story-slice";

const store = configureStore({
    reducer:{auth:authSlice.reducer, stories: storiesSlice.reducer}
});
export default store; 