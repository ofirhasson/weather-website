import { get5HoursArr, getFormatDate, roundDegree } from "../2-utils/weather-utils";
import { WeatherApiModel } from "./weather-api-model";

export class HourDegree {
    public hour: string;
    public degree: string;
}

export class WeatherModel {
    public cityName: string;
    public countryName: string;
    public latitude: string;
    public longitude: string;
    public currentDate: string;
    public currentHour: string;
    public degrees: string;
    public condition: string;
    public precipitation: string;
    public humidity: string;
    public wind: string;
    public degreesPerHour: HourDegree[];

    constructor(weatherApiModel: WeatherApiModel) {
        this.cityName = weatherApiModel.location.name;
        this.countryName = weatherApiModel.location.country;
        this.latitude = weatherApiModel.location.lat;
        this.longitude = weatherApiModel.location.lon;
        this.currentDate = getFormatDate(weatherApiModel.location.localtime.substring(0, 10));
        this.currentHour = weatherApiModel.location.localtime.substring(11, 16);
        this.degrees = roundDegree(weatherApiModel.current.temp_c);
        this.condition = weatherApiModel.current.condition.text;
        this.precipitation = weatherApiModel.current.precip_mm;
        this.humidity = weatherApiModel.current.humidity;
        this.wind = weatherApiModel.current.wind_kph;
        this.degreesPerHour = get5HoursArr(weatherApiModel.forecast.forecastday[0].hour, this.currentHour)
    }
}