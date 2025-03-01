import { supabase } from "../../../supabaseClient";
import { useState, useEffect } from "react";



function EventsPage() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const { data, error } = await supabase.from('events').select('*');
    if (!error) setEvents(data);
  };

  return (
    <main>
      {/* hero section */}
      <section className="upcomingEvents-hero-bg">
        <div className="text-white w-[80%] h-full mx-auto flex justify-center items-center">
          <div className="max-w-lg text-center mx-auto">
            <h1 className="text-3xl font-medium pb-2 pt-2">Events</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio esse
              soluta aspernatur porro a alias ipsam nemo quia unde. Doloribus
              laborum nostrum voluptatum quia vel nisi nam reprehenderit nemo.
              Natus.
            </p>
          </div>
        </div>
      </section>

      {/* upcoming events section */}
      <section>
        <div className="w-full sm:w-[80%] mx-auto -mt-[140px] grid grid-cols-1">
          {/* inner div */}
          {
            events.map((event) => 
            <div key={event.id} className="w-[80%] bg-transparent mx-auto block lg:flex rounded-md mb-8">
            <div className="w-full lg:w-[60%]">
              <img
                src="assets/bibleBg.jpg"
                className="w-full h-[250px] lg:h-[300px] object-cover rounded-lg shadow-lg"
                alt=""
              />
            </div>
            <div className="flex items-center">
              <div className="-mt-10 lg:mt-0 lg:-ml-20 w-full lg:max-w-lg bg-white h-fit p-4 rounded-lg shadow-lg">
                <div className="flex gap-4">
                  <p className="font-bold">Date: {event.event_date}</p>
                  <p className="font-bold">Start: {event.event_start_time} | End: {event.event_end_time}</p>
                </div>
                <div>
                  <p className="font-bold">{event.event_name}.</p>
                  <h2 className="text-base pb-2 pt-2 text-pretty">
                    {event.event_description}.
                  </h2>
                  <a href="">
                    <p className="font-bold">Register for event.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>)
          }
        </div>
      </section>

      <section className="bg-white p-10">
        <div className="w-full lg:w-[80%] mx-auto flex flex-wrap gap-2">
          {/* inner divs */}
          <div className=" bg-[#D3D3D3] p-2 mx-auto mb-5 mt-2 basis-[290px] grow">
            <div className="border-white border-2 p-4">
              <h2 className="text-2xl font-bold text-center pt-2 pb-2">
                Join us for worship in the Community
              </h2>
              <div className="w-[50%] border-white border-2 mx-auto"></div>
              <p className="text-lg text-center pt-2">
                We are a community of believers who worship God.
              </p>
            </div>
          </div>

          <div className=" bg-[#D3D3D3] p-2 mx-auto mb-5 mt-2 basis-[290px] grow">
            <div className="border-white border-2 p-4">
              <h2 className="text-2xl font-bold text-center pt-2 pb-2">
                Experience the Power of Worship
              </h2>
              <div className="w-[50%] border-white border-2 mx-auto"></div>
              <p className="text-lg text-center pt-2">
                Come together in faith and fellowship.
              </p>
            </div>
          </div>

          <div className=" bg-[#D3D3D3] p-2 mx-auto mb-5 mt-2 basis-[290px] grow">
            <div className="border-white border-2 p-4">
              <h2 className="text-2xl font-bold text-center pt-2 pb-2">
                Be Part of Our Worship Family
              </h2>
              <div className="w-[50%] border-white border-2 mx-auto"></div>
              <p className="text-lg text-center pt-2">
                Find joy, hope, and inspiration in worship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EventsPage;
