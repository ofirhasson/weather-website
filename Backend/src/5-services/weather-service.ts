import axios from "axios";
import { HourDegree, WeatherModel } from "../3-models/weather-model";
import { ValidationError } from "../3-models/client-errors";

class WeatherService {

    //get weather from api
    public async getWeather(cityName: string): Promise<WeatherModel> {
        try {
            if (!cityName)
                throw new ValidationError("Must Enter City!");
            const weatherJson = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=5a2eb090393b49959a4133532230512&q=${cityName}&days=1&aqi=no&alerts=no`);
            return new WeatherModel(weatherJson.data);
        }
        catch (err: any) {
            throw new ValidationError("City Not Found!");
        }
    }

}

export const weatherService = new WeatherService();
