import { useState } from "react";

import './styles.css';

export const Loader = ({ initial = false }) => {
    const [isRunning, setIsRunning] = useState(initial);

    if (!isRunning) return <></>;

    return (
        <div className="my-loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};