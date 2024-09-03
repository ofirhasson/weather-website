import { DegreesComponent } from "../DegreesComponent/DegreesComponent";
import { DetailsComponent } from "../DetailsComponent/DetailsComponent";
import { WeatherDetailsComponent } from "../WeatherDetailsComponent/WeatherDetailsComponent";
import { WeatherHoursComponent } from "../WeatherHoursComponent/WeatherHoursComponent";
import "./WeatherComponent.css";

export function WeatherComponent(): JSX.Element {
    return (
        <div className="WeatherComponent">
            <div className="WeatherDiv" aria-label="Weather-info" role="region">
                <DetailsComponent />
                <DegreesComponent />
                <WeatherDetailsComponent />
                <WeatherHoursComponent />
            </div>
        </div>
    );
}
