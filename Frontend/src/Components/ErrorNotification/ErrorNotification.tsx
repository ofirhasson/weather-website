import { useEffect } from "react";
import "./ErrorNotification.css";

interface ErrorNotificationProps {
    err: any;
    onClose: () => void;
}

function extractMessage(err: any): string {
    if (typeof err === "string") return err;
    if (typeof err.response?.data === "string") return err.response.data;
    if (typeof err.message === "string") return err.message;
    return "Some error, please try again.";
}

export function ErrorNotification({ err, onClose }: ErrorNotificationProps): JSX.Element {

    const message = extractMessage(err);

    useEffect(() => {
        const timer = setTimeout(onClose, 2000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="ErrorNotification" role="alert" aria-live="assertive">
            <span className="error-icon" aria-hidden="true">&#9888;</span>
            <span className="error-message">{message}</span>
        </div>
    );
}
