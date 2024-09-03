import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";
import "./WeatherHoursComponent.css";

export function WeatherHoursComponent(): JSX.Element {
    const weather = useSelector((appState: AppState) => appState.weather);
    if (!weather)
        return null;
    return (
        <div className="WeatherHoursComponent" aria-labelledby="weather-hours-heading">
            {weather?.degreesPerHour.map(h => (
                <div key={h.hour} aria-labelledby="Hour">
                    <span id="Hour">{h?.hour}:00</span>
                    <span aria-label="Temperature">
                        {h?.degree}°
                    </span>
                </div>
            ))}
        </div>
    );
}
