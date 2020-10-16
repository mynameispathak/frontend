import React, { useState, useEffect } from "react";

import FullCalendar from '@fullcalendar/react'
import timegridPlugin from '@fullcalendar/timegrid'

export default function Day() {

    const [events, setEvents] = useState([])
    useEffect(() => {
        // here make a call to backend to fetch array of events
        const dummyEvents =[
            { title: 'event 1', start: '2020-08-18T18:00:00', end: '2020-08-18T19:00:00', backgroundColor: 'green' },
            { title: 'event 2', start: '2020-08-18T05:00:00',  end: '2020-08-18T08:00:00', backgroundColor: 'yellow' }
          ]
          setEvents(dummyEvents)
    }, [])

    return (
        <div>
            {/* <h1>Day</h1> */}
            <FullCalendar
                plugins={[ timegridPlugin ]}
                initialView="timeGridDay"
                events={events}
            />
        </div>
    )
}