import { useEffect } from "react";
import { weatherService } from "../../../../Services/WeatherService";
import { useFetchWeather } from "../../../WeatherSelectorArea/InputComponent/hooks/useFetchWeather";

export const useInitialWeather = () => {

    const { error, clearError, setError } = useFetchWeather();

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                await weatherService.getWeather("tel aviv");
            } catch (error: any) {
                setError(error);
            }
        };
        fetchWeather();
    }, []);

    return {
        error,
        clearError
    }
}