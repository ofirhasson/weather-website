import { useSelector } from "react-redux";
import "./FooterComponent.css";
import { AppState } from "../../../Redux/AppState";

export function FooterComponent(): JSX.Element {
    const weather = useSelector((appState: AppState) => appState.weather);
    return (
        <div className="FooterComponent">
            <p>latitude {weather?.latitude} longitude {weather?.longitude}</p>
            <p>accurate to {weather?.currentDate} at {weather?.currentHour}</p>
        </div>
    );
}