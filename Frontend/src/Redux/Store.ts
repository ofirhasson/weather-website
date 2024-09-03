import { configureStore } from "@reduxjs/toolkit";
import { AppState } from "./AppState";
import { weatherReducersContainer } from "./WeatherSlice";

//Creating the application store - the redux manager object:
export const appStore = configureStore<AppState>({
    reducer: {
        weather: weatherReducersContainer
    }
});
