import "./WeatherSelectorComponent.css";
import logo from "../../../Assets/Images/logo.svg"
import { InputComponent } from "../InputComponent/InputComponent";
import { FooterComponent } from "../FooterComponent/FooterComponent";

export function WeatherSelectorComponent(): JSX.Element {
    return (
        <div className="WeatherSelectorComponent">
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div className="textDiv">
                Use our weather app to see the weather around the world
            </div>
            <div className="inputDiv">
                <InputComponent />
            </div>
            <div className="footerDiv">
                <FooterComponent />
            </div>
        </div>
    );
}
