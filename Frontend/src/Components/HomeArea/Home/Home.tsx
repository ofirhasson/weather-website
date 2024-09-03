import { ErrorNotification } from "../../ErrorNotification/ErrorNotification";
import { WeatherComponent } from "../../WeatherArea/WeatherComponent/WeatherComponent";
import { WeatherSelectorComponent } from "../../WeatherSelectorArea/WeatherSelectorComponent/WeatherSelectorComponent";
import "./Home.css";
import { useInitialWeather } from "./hooks/useInitialWeather";

export function Home(): JSX.Element {

    useInitialWeather();

    return (
        <div className="Home">
            <WeatherSelectorComponent />
            <WeatherComponent />
        </div>
    );
}
