import { useSelector } from "react-redux";
import "./DegreesComponent.css";
import { AppState } from "../../../Redux/AppState";

export function DegreesComponent(): JSX.Element {
    const weather = useSelector((appState: AppState) => appState.weather);
    return (
        <div className="DegreesComponent">
            <span className="degreesSpan">{weather?.degrees}°</span>
            <span className="descriptionSpan">{weather?.condition}</span>
        </div>
    );
}
