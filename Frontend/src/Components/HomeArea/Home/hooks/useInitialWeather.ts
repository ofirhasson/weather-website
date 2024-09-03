import { useEffect } from "react";
import { weatherService } from "../../../../Services/WeatherService";

export const useInitialWeather = () => {
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                await weatherService.getWeather("tel aviv");
            } catch (error: any) {
                alert(error);
            }
        };
        fetchWeather();
    }, []);
}