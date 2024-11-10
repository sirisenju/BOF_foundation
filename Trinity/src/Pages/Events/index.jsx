import React from "react";
import Footer from "../../Components/footer";

function EventsPage() {
  return (
    <main>
      {/* hero section */}
      <section className="upcomingEvents-hero-bg">
        <div className="text-white w-[80%] mx-auto pt-20 flex justify-center items-center">
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
        <div className="w-[80%] mx-auto -mt-48">
          {/* inner div */}
          <div className=" w-[80%] bg-transparent  mx-auto flex rounded-md mb-8">
            <div className="w-[60%]">
              <img
                src="assets/bibleBg.jpg"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                alt=""
              />
            </div>
            <div className="flex items-center">
              <div className="-ml-20 max-w-lg bg-white h-fit p-4 rounded-lg shadow-lg">
                <div className="flex gap-4">
                  <p>Date</p>
                  <p>Time(duration)</p>
                </div>
                <div>
                  <p>Event Name</p>
                  <h2 className="text-base pb-2 pt-2 text-balance">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsa, magnam ratione? Minima, distinctio explicabo corrupti
                    totam facilis earum! Nisi veritatis reiciendis quisquam
                    dolore ut quibusdam at doloremque illo porro nesciunt.
                  </h2>
                  <a href="">
                    <p>Register for event.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-[80%] bg-transparent mx-auto flex rounded-md mb-8">
            <div className="w-[60%]">
              <img
                src="assets/bibleBg.jpg"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                alt=""
              />
            </div>
            <div className="flex items-center">
              <div className="-ml-20 max-w-lg bg-white h-fit p-4 rounded-lg shadow-lg">
                <div className="flex gap-4">
                  <p>Date</p>
                  <p>Time(duration)</p>
                </div>
                <div>
                  <p>Event Name</p>
                  <h2 className="text-base pb-2 pt-2 text-balance">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsa, magnam ratione? Minima, distinctio explicabo corrupti
                    totam facilis earum! Nisi veritatis reiciendis quisquam
                    dolore ut quibusdam at doloremque illo porro nesciunt.
                  </h2>
                  <a href="">
                    <p>Register for event.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-[80%] bg-transparent mx-auto flex rounded-md mb-8">
            <div className="w-[60%]">
              <img
                src="assets/bibleBg.jpg"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                alt=""
              />
            </div>
            <div className="flex items-center">
              <div className="-ml-20 max-w-lg bg-white h-fit p-4 rounded-lg shadow-lg">
                <div className="flex gap-4">
                  <p>Date</p>
                  <p>Time(duration)</p>
                </div>
                <div>
                  <p>Event Name</p>
                  <h2 className="text-base pb-2 pt-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsa, magnam ratione? Minima, distinctio explicabo corrupti
                    totam facilis earum! Nisi veritatis reiciendis quisquam
                    dolore ut quibusdam at doloremque illo porro nesciunt.
                  </h2>
                  <a href="">
                    <p>Register for event.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-[80%] bg-transparent mx-auto flex rounded-md mb-8">
            <div className="w-[60%]">
              <img
                src="assets/bibleBg.jpg"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                alt=""
              />
            </div>
            <div className="flex items-center">
              <div className="-ml-20 max-w-lg bg-white h-fit p-4 rounded-lg shadow-lg">
                <div className="flex gap-4">
                  <p>Date</p>
                  <p>Time(duration)</p>
                </div>
                <div>
                  <p>Event Name</p>
                  <h2 className="text-base pb-2 pt-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsa, magnam ratione? Minima, distinctio explicabo corrupti
                    totam facilis earum! Nisi veritatis reiciendis quisquam
                    dolore ut quibusdam at doloremque illo porro nesciunt.
                  </h2>
                  <a href="">
                    <p>Register for event.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-10">
        <div className="w-[80%] mx-auto flex gap-2">
          {/* inner divs */}
          <div className=" bg-[#D3D3D3] max-w-md p-2 mx-auto mb-5 mt-2">
            <div className="border-white border-2 ">
              <h2 className="text-2xl font-bold text-center pt-2 pb-2">
                Join us for worship
              </h2>
              <div className="w-[50%] border-white border-2 mx-auto"></div>
              <p className="text-lg text-center pt-2">
                We are a community of believers who worship God.
              </p>
            </div>
          </div>

          <div className=" bg-[#D3D3D3] max-w-md p-2 mx-auto mb-5 mt-2">
            <div className="border-white border-2 ">
              <h2 className="text-2xl font-bold text-center pt-2 pb-2">
                Join us for worship
              </h2>
              <div className="w-[50%] border-white border-2 mx-auto"></div>
              <p className="text-lg text-center pt-2">
                We are a community of believers who worship God.
              </p>
            </div>
          </div>

          <div className=" bg-[#D3D3D3] max-w-md p-2 mx-auto mb-5 mt-2">
            <div className="border-white border-2 ">
              <h2 className="text-2xl font-bold text-center pt-2 pb-2">
                Join us for worship
              </h2>
              <div className="w-[50%] border-white border-2 mx-auto"></div>
              <p className="text-lg text-center pt-2">
                We are a community of believers who worship God.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EventsPage;
