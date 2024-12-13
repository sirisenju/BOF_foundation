// src/components/UpdateEvent.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    event_name: '',
    event_description: '',
    event_date: '',
    event_start_time: '',
    event_end_time: '',
    event_poster: null,
  });

  useEffect(() => {
    fetchEvent();
  }, [id]);

  const fetchEvent = async () => {
    const { data, error } = await supabase.from('events').select('*').eq('id', id).single();
    if (!error && data) {
      setEventData({
        event_name: data.event_name,
        event_description: data.event_description,
        event_date: data.event_date,
        event_start_time: data.event_start_time,
        event_end_time: data.event_end_time,
        event_poster: data.event_poster,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setEventData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let posterUrl = eventData.event_poster;

    if (eventData.event_poster instanceof File) {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('event_posters')
        .upload(`public/${eventData.event_poster.name}`, eventData.event_poster, { upsert: true });
      if (!uploadError) {
        const { publicURL } = supabase.storage
          .from('event_posters')
          .getPublicUrl(`public/${eventData.event_poster.name}`);
        posterUrl = publicURL;
      }
    }

    const { error } = await supabase
      .from('events')
      .update({
        event_name: eventData.event_name,
        event_description: eventData.event_description,
        event_date: eventData.event_date,
        event_start_time: eventData.event_start_time,
        event_end_time: eventData.event_end_time,
        event_poster: posterUrl,
      })
      .eq('id', id);

    if (!error) navigate('/view');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Event</h2>
      <input type="text" name="event_name" placeholder="Event Name" value={eventData.event_name} onChange={handleChange} required /><br/>
      <textarea name="event_description" placeholder="Event Description" value={eventData.event_description} onChange={handleChange} required /><br/>
      <input type="date" name="event_date" value={eventData.event_date} onChange={handleChange} required /><br/>
      <input type="time" name="event_start_time" value={eventData.event_start_time} onChange={handleChange} required /><br/>
      <input type="time" name="event_end_time" value={eventData.event_end_time} onChange={handleChange} required /><br/>
      <input type="file" name="event_poster" accept="image/*" onChange={handleChange} /><br/>
      <button type="submit">Update Event</button>
    </form>
  );
}

export default UpdateEvent;
