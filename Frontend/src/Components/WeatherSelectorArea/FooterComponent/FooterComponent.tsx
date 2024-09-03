import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";

export function FooterComponent(): JSX.Element {
    const weather = useSelector((appState: AppState) => appState.weather);
    if (!weather)
        return null;
    return (
        <div
            className="FooterComponent"
            role="contentinfo"
            aria-label="Weather information"
        >
            <p>
                <span aria-label="Latitude">latitude {weather?.latitude}</span>
                {" "}
                <span aria-label="Longitude">longitude {weather?.longitude}</span>
            </p>
            <p>
                accurate to
                {" "}
                <span aria-label="Date">{weather?.currentDate}</span>
                {" "}
                at
                {" "}
                <span aria-label="Time">{weather?.currentHour}</span>
            </p>
        </div>
    );
}