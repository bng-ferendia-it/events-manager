import React, { useState } from "react";
import classes from "./EventManager.module.css";

// event structure:{id,name,startDate,endDate,reccurence,duration}

function EventManager(props) {
  const [showModal, setShowModal] = useState(false);
  const [eventsArray, setEventsArray] = useState([
    {
      id: 1,
      name: "name1",
      startDate: "10-01-2022",
      endDate: "11-01-2022",
      reccurence: false,
      duration: "1",
    },
    {
      id: 2,
      name: "name2",
      startDate: "12-02-2022",
      endDate: "14-02-2022",
      reccurence: false,
      duration: "2",
    },
    {
      id: 3,
      name: "name3",
      startDate: "16-04-2022",
      endDate: "20-04-2022",
      reccurence: false,
      duration: "4",
    },
  ]);

  const deleteEvent = (id) => {
    let newArray = eventsArray.filter(function (obj) {
      return obj.id !== id;
    });
    setEventsArray(newArray);
  };

  return (
    <div>
      <button>Create Event</button>
      {/* + modal for create event */}
      {eventsArray.map((event) => (
        <div key={event.id} className={classes.event}>
          <div className={classes.margin}>Name:{event.name}</div>
          <div className={classes.margin}>Starts at:{event.startDate}</div>
          <div className={classes.margin}>Ends at:{event.endDate}</div>
          <div className={classes.margin}>Duration:{event.duration}</div>
          <button
            className={classes.margin}
            onClick={() => deleteEvent(event.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default EventManager;
