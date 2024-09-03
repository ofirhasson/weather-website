import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WeatherModel } from "../Models/WeatherModel";

function setWeather(currentState: WeatherModel, action: PayloadAction<WeatherModel>): WeatherModel {
    return action.payload;
}

const weatherSlice = createSlice({
    name: "weather",
    initialState: null,
    reducers: { setWeather }
});

export const weatherActionCreators = weatherSlice.actions;
export const weatherReducersContainer = weatherSlice.reducer;

