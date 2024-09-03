import logo from "../../../Assets/Images/logo.svg";
import { FooterComponent } from "../FooterComponent/FooterComponent";
import { InputComponent } from "../InputComponent/InputComponent";
import "./WeatherSelectorComponent.css";

export function WeatherSelectorComponent(): JSX.Element {
    return (
        <div className="WeatherSelectorComponent">
            <div>
                <img src={logo} alt="Logo" aria-label="Weather App Logo" />
            </div>
            <div className="textDiv" aria-label="Description">
                Use our weather app to see the weather around the world
            </div>
            <div className="inputDiv" aria-labelledby="city-input-label">
                <InputComponent />
            </div>
            <div className="footerDiv" aria-label="Footer Information">
                <FooterComponent />
            </div>
        </div>
    );
}
