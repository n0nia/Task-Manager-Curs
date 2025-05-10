import React from "react";
import "./Badge.css";

const BADGE_COLORS = ["grey", "blue", "green", "orange", "black"];

function Badge(props) {
    const badgeColor = BADGE_COLORS.includes(props.color) ? props.color : "grey";

    return (
        <div className={`badge ${badgeColor}`}>
            <p>{props.label}</p>
        </div>
    )
}

export default Badge;