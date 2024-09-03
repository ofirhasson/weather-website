
export class HourModel {
    temp_c: string;
}

export class WeatherApiModel {
    location: {
        name: string;
        country: string;
        lat: string;
        lon: string;
        localtime: string;
    };
    current: {
        temp_c: string;
        condition: {
            text: string;
        };
        precip_mm: string;
        humidity: string;
        wind_kph: string;
    };
    forecast: {
        forecastday: Array<{
            hour: Array<HourModel>;
        }>;
    };
}