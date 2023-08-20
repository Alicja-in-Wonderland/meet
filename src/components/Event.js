import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <li className="event">
            <h2>{event && event.summary}</h2>
            <p>{event && event.location}</p>
            <p>{event && event.start.dateTime}</p><br />
            {showDetails ?
                <p className="details">{event && event.description}</p> :
                null
            }
            <br /><button className="details-btn" onClick={() => {
                showDetails ? setShowDetails(false) : setShowDetails(true)
            }}>{showDetails ? "hide details" : "show details"}</button>
        </li>
    )
}

export default Event;