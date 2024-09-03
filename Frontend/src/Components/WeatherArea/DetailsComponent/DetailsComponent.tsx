import { useSelector } from "react-redux";
import "./DetailsComponent.css";
import { AppState } from "../../../Redux/AppState";

export function DetailsComponent(): JSX.Element {
    const weather = useSelector((appState: AppState) => appState.weather);
    return (
        <div className="DetailsComponent">
            <span className="white fontSize3">{weather?.cityName}</span>
            <span className="gray fontSize2">{weather?.countryName}</span>
            <span className="gray fontSize2">{weather?.currentDate} at {weather?.currentHour}</span>
        </div>
    );
}
