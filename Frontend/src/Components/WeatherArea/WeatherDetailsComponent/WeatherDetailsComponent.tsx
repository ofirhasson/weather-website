import { useSelector } from "react-redux";
import "./WeatherDetailsComponent.css";
import { AppState } from "../../../Redux/AppState";

export function WeatherDetailsComponent(): JSX.Element {
    const weather = useSelector((appState: AppState) => appState.weather);
    return (
        <div className="WeatherDetailsComponent" aria-labelledby="weather-details-heading">
            <div aria-labelledby="precipitation-label">
                <span id="precipitation-label">Precipitation</span>
                <span aria-label="Precipitation">
                    {weather?.precipitation} mm
                </span>
            </div>
            <div aria-labelledby="humidity-label">
                <span id="humidity-label">Humidity</span>
                <span aria-label="Humidity">
                    {weather?.humidity}%
                </span>
            </div>
            <div aria-labelledby="wind-label">
                <span id="wind-label">Wind</span>
                <span aria-label="Wind">
                    {weather?.wind} km/h
                </span>
            </div>
        </div>
    );
}
