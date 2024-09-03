import { ErrorNotification } from "../../ErrorNotification/ErrorNotification";
import { useFetchWeather } from "./hooks/useFetchWeather";
import "./InputComponent.css";

export function InputComponent(): JSX.Element {

    const { handleInputChange, handleClick, city, error, clearError } = useFetchWeather();

    return (
        <div className="InputComponent">
            <label htmlFor="city-input">City name</label>
            <div className="input-container">
                <input
                    id="city-input"
                    type="text"
                    aria-label="Enter city name"
                    onChange={handleInputChange}
                    value={city} />
                <button
                    onClick={handleClick}
                    aria-label="Check weather for entered city">
                    Check</button>
            </div>
            {error && <ErrorNotification err={error} onClose={clearError} />}
        </div>
    );
}
