import { useSelector } from "react-redux";
import "./DegreesComponent.css";
import { AppState } from "../../../Redux/AppState";

export function DegreesComponent(): JSX.Element {
    const weather = useSelector((appState: AppState) => appState.weather);
    return (
        <div className="DegreesComponent" aria-label="Current Weather">
            <span className="degreesSpan" aria-label="Temperature">
                {weather?.degrees}°
            </span>
            <span className="descriptionSpan" aria-label="condition">
                {weather?.condition}
            </span>
        </div>
    );
}
