import { useSelector } from "react-redux";
import "./WeatherDetailsComponent.css";
import { AppState } from "../../../Redux/AppState";

export function WeatherDetailsComponent(): JSX.Element {
    const weather = useSelector((appState: AppState) => appState.weather);
    return (
        <div className="WeatherDetailsComponent">
            <div>
                <span>precipitation</span>
                <span>{weather?.precipitation} mm</span>
            </div>
            <div>
                <span>humidity</span>
                <span>{weather?.humidity}%</span>
            </div>
            <div>
                <span>wind</span>
                <span>{weather?.wind} km/h</span>
            </div>
        </div>
    );
}
