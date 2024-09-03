import { ErrorNotification } from "../../ErrorNotification/ErrorNotification";
import { WeatherComponent } from "../../WeatherArea/WeatherComponent/WeatherComponent";
import { WeatherSelectorComponent } from "../../WeatherSelectorArea/WeatherSelectorComponent/WeatherSelectorComponent";
import "./Home.css";
import { useInitialWeather } from "./hooks/useInitialWeather";

export function Home(): JSX.Element {

    const { error, clearError } = useInitialWeather();

    return (
        <div className="Home">
            <WeatherSelectorComponent />
            <WeatherComponent />
            {error && <ErrorNotification err={error} onClose={clearError} />}
        </div>
    );
}
