import axios from "axios";
import { HourDegree, WeatherModel } from "../3-models/weather-model";
import { ValidationError } from "../3-models/client-errors";

class WeatherService {

    //get weather from api
    public async getWeather(cityName: string): Promise<any> {
        try {
            if (!cityName)
                throw new ValidationError("Must Enter City!");
            const weatherJson = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=5a2eb090393b49959a4133532230512&q=${cityName}&days=1&aqi=no&alerts=no`);
            return this.convertJsonToWeatherModel(weatherJson.data);
        }
        catch (err: any) {
            throw new ValidationError("City Not Found!");
        }
    }

    //convert the return Json to Weather Model
    private convertJsonToWeatherModel(json: any): WeatherModel {
        const weather = new WeatherModel();
        weather.cityName = json.location.name;
        weather.countryName = json.location.country;
        weather.latitude = json.location.lat;
        weather.longitude = json.location.lon;
        weather.currentDate = this.getFormatDate(json.location.localtime.substring(0, 10));
        weather.currentHour = json.location.localtime.substring(11, 16);
        weather.degrees = this.roundDegree(json.current.temp_c);
        weather.condition = json.current.condition.text;
        weather.precipitation = json.current.precip_mm;
        weather.humidity = json.current.humidity;
        weather.wind = json.current.wind_kph;
        weather.degreesPerHour = this.get5HoursArr(json.forecast.forecastday[0].hour, weather.currentHour)
        return weather;
    }

    //get 5 hours arr - two before current hour and two after
    private get5HoursArr(hoursArr: any[], currentHour: string): HourDegree[] {
        const hour = +currentHour.substring(0, 2);
        const newHoursArr: HourDegree[] = [];
        for (let i = - 2; i <= 2; i++) {
            const newHour = (hour + i + 24) % 24;
            const hourDegree = new HourDegree();
            hourDegree.hour = newHour.toString().padStart(2, '0');;
            hourDegree.degree = this.roundDegree(hoursArr[newHour].temp_c);
            newHoursArr.push(hourDegree);
        }
        return newHoursArr;
    }

    //round degree
    private roundDegree(degree: string): string {
        return Math.round(parseFloat(degree)).toString();
    }

    //get date in Format dd/mm/yyyy
    private getFormatDate(date: string): string {
        const year = date.substring(0, 4);
        const month = date.substring(5, 7);
        const day = date.substring(8, 10);

        return day + "/" + month + "/" + year;
    }

}

export const weatherService = new WeatherService();
