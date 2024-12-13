// src/components/DeleteEvent.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useParams, useNavigate, Link } from 'react-router-dom';

function DeleteEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEvent();
  }, [id]);

  const fetchEvent = async () => {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('id', id)
      .single();

    if (!error && data) {
      setEvent(data);
    }
  };

  const handleDelete = async () => {
    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id);

    if (!error) {
      navigate('/view');
    }
  };

  if (!event) return <div>Loading event data...</div>;

  return (
    <div>
      <h2>Delete Event</h2>
      <p>Are you sure you want to delete this event?</p>
      <h3>{event.event_name}</h3>
      <p>{event.event_description}</p>
      <p>Date: {event.event_date}, Start: {event.event_start_time}, End: {event.event_end_time}</p>
      {event.event_poster && <img src={event.event_poster} alt={event.event_name} width="200" />}
      <br/><br/>
      <button onClick={handleDelete}>Confirm Delete</button>
      <Link to="/view">Cancel</Link>
    </div>
  );
}

export default DeleteEvent;
