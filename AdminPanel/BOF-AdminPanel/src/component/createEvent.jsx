// src/components/CreateEvent.js
import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';

function CreateEvent() {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    event_name: '',
    event_description: '',
    event_date: '',
    event_start_time: '',
    event_end_time: '',
    event_poster: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let posterUrl = null;

    // Upload the poster file to the "event_posters" storage bucket if one is provided
    if (eventData.event_poster) {
      const fileName = eventData.event_poster.name;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('event_posters')
        .upload(`public/${fileName}`, eventData.event_poster, { upsert: true });

      if (uploadError) {
        console.error('File upload error:', uploadError);
        alert("Image upload failed")
      } else {
        const { publicURL } = supabase.storage
          .from('event_posters')
          .getPublicUrl(`public/${fileName}`);
        posterUrl = publicURL;
      }
    }

    const { error } = await supabase.from('events').insert([
      {
        event_name: eventData.event_name,
        event_description: eventData.event_description,
        event_date: eventData.event_date,
        event_start_time: eventData.event_start_time,
        event_end_time: eventData.event_end_time,
        event_poster: posterUrl,
      },
    ]);

    if (error) {
      console.error('Error creating event:', error);
    } else {
      navigate('/view');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Event</h2>
      <input
        type="text"
        name="event_name"
        placeholder="Event Name"
        value={eventData.event_name}
        onChange={handleChange}
        required
      /><br/>
      
      <textarea
        name="event_description"
        placeholder="Event Description"
        value={eventData.event_description}
        onChange={handleChange}
        required
      /><br/>
      
      <input
        type="date"
        name="event_date"
        value={eventData.event_date}
        onChange={handleChange}
        required
      /><br/>
      
      <input
        type="time"
        name="event_start_time"
        value={eventData.event_start_time}
        onChange={handleChange}
        required
      /><br/>
      
      <input
        type="time"
        name="event_end_time"
        value={eventData.event_end_time}
        onChange={handleChange}
        required
      /><br/>
      
      <input
        type="file"
        name="event_poster"
        accept="image/*"
        onChange={handleChange}
      /><br/>
      
      <button type="submit">Create Event</button>
    </form>
  );
}

export default CreateEvent;
