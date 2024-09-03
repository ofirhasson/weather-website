import { useState } from "react";
import { weatherService } from "../../../../Services/WeatherService";

export const useFetchWeather = () => {
    const [city, setCity] = useState<string>("");
    const [error, setError] = useState<any>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    }

    const handleClick = async () => {
        try {
            if (!city)
                throw new Error("Please enter city!");
            await weatherService.getWeather(city);
            setCity("");
            setError(null);
        } catch (err: any) {
            console.log(err);
            setError(err);
        }
    }

    const clearError = () => {
        setError(null); // Clear the error manually
    }

    return {
        handleInputChange,
        handleClick,
        city,
        error,
        clearError
    }
}