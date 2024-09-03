import { useSelector } from "react-redux";
import "./WeatherHoursComponent.css";
import { AppState } from "../../../Redux/AppState";

export function WeatherHoursComponent(): JSX.Element {
    const weather = useSelector((appState: AppState) => appState.weather);
    return (
        <div className="WeatherHoursComponent">
            {weather?.degreesPerHour.map(h =>
                <div key={h.hour}>
                    <span>{h?.hour}:00</span>
                    <span>{h?.degree}°</span>
                </div>
            )}
        </div>
    );
}
