import React, { useState, useEffect } from "react";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import axios from 'axios';

const URL = "http://ec2-18-224-213-191.us-east-2.compute.amazonaws.com/api/call/core_calendar_get_calendar_events ";

function padZero(num, add) {
    const numInt = parseInt(num) + add
    if (numInt >= 10)
        return numInt.toString()
    const numIntStr = numInt.toString()
    return `0${numIntStr}`
}



function formatDate(unixStamp) {
    const date = new Date(unixStamp * 1000)
    const yr = date.getFullYear()
    const month = padZero(date.getMonth(), 1)
    const day = padZero(date.getDate(), 0)

    return `${yr}-${month}-${day}`
}

function giveColor(eventType) {
    switch(eventType) {
        case "Exam Date":
            return 'red'
        case 'Submission Deadline':
            return 'pink'
        case 'Class Timing':
            return 'green'
        case 'Holiday':
            return 'yellow'
        case 'Extra Class':
            return 'blue'
        default:
            return 'brown'
    }
}
export default function Month() {

    const [events, setEvents] = useState([])
    useEffect(() => {
        // here make a call to backend to fetch array of events
        const dummyEvents =[
            { title: 'event 1', date: '2020-7-13',  backgroundColor: 'pink' },
            { title: 'event 2', date: '2020-08-02', backgroundColor: 'green' }
          ]
       const data = { "events": [] }
    axios.post(URL, data)
    .then(res => {
      console.log("Res.data ", res.data)
      const data = res.data.events.map(item => {
          return { title: item.name, date: formatDate(item.timestart), backgroundColor: giveColor(item.eventtype) }
      })
      console.log("data ", data)
      setEvents(data)
    // setEvents(dummyEvents)
    })
    .catch(err => {
      console.log("err is ",err)
    })
   
    }, [])

    return (
        <div>
            {/* <h1>Month</h1> */}
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                events={events}
            />
        </div>
    )
}