// src/components/ViewEvents.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { Link } from 'react-router-dom';

function ViewEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const { data, error } = await supabase.from('events').select('*');
    if (!error) setEvents(data);
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from('events').delete().eq('id', id);
    if (!error) setEvents(events.filter((e) => e.id !== id));
  };

  return (
    <div>
      <h2>Events</h2>
      <Link to="/create">Create New Event</Link>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h3>{event.event_name}</h3>
            <p>{event.event_description}</p>
            <p>Date: {event.event_date} | Start: {event.event_start_time} | End: {event.event_end_time}</p>
            {event.event_poster && <img src={event.event_poster} alt={event.event_name} width="200" />}
            <br/>
            <Link to={`/update/${event.id}`}>Update</Link>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewEvents;
