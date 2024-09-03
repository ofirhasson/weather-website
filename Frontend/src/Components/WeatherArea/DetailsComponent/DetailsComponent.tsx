import { useSelector } from "react-redux";
import "./DetailsComponent.css";
import { AppState } from "../../../Redux/AppState";

export function DetailsComponent(): JSX.Element {
    const weather = useSelector((appState: AppState) => appState.weather);
    return (
        <div className="DetailsComponent" aria-label="Location and Date Details">
            <span
                className="white fontSize3"
                aria-label="City">
                {weather?.cityName}
            </span>
            <span
                className="gray fontSize2"
                aria-label="Country">
                {weather?.countryName}
            </span>
            <span
                className="gray fontSize2"
                aria-label="Date and Hour">
                {weather?.currentDate} at {weather?.currentHour}
            </span>
        </div>
    );
}
