
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
}