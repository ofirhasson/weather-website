import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import { weatherActionCreators } from "../Redux/WeatherSlice";
import { WeatherModel } from "../Models/WeatherModel";
import { appStore } from "../Redux/Store";

class WeatherService {
    public async getWeather(cityName: string): Promise<void> {
        const response = await axios.get<WeatherModel>(appConfig.weatherUrl + cityName);    
        appStore.dispatch(weatherActionCreators.setWeather(response.data));
    }
}

export const weatherService = new WeatherService();