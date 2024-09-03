import { ErrorNotification } from "../../ErrorNotification/ErrorNotification";
import { useFetchWeather } from "./hooks/useFetchWeather";
import "./InputComponent.css";

export function InputComponent(): JSX.Element {

    const { handleInputChange, handleClick, city, error, clearError } = useFetchWeather();

    return (
        <div className="InputComponent">
            <label>City name</label>
            <div className="input-container">
                <input type="text" onChange={handleInputChange} value={city} />
                <button onClick={handleClick}>Check</button>
            </div>
            {error && <ErrorNotification err={error} onClose={clearError} />}
        </div>
    );
}
