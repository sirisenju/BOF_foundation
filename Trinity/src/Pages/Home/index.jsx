import React from "react";
import NavBar from "../../Components/navbar";
import Footer from "../../Components/footer";

function Home() {
  return (
    <main>
      <section className="hero-bg">
        <div className="flex items-center justify-center h-full p-4 md:p-0">
          <div className="glass max-w-md text-center p-4 pt-10 mb-10 text-black">
            <p className="text-xl">Be a part of God's Mission!!!</p>
            <h1 className="text-4xl">Welcome to The Holy Trinity.</h1>
          </div>
        </div>
      </section>

      {/* second section */}
      <section>
        <div className="w-full sm:w-[90%] lg:w-[80%] mx-auto bg-white p-2 mb-4">
          <div className="w-full grid grid-cols-1 md:flex gap-2 mt-2">
            <div className="h-[80px] w-[50%] request-bg1 p-2 shadow-md">
              <div className="border border-black border-solid text-center">
                <h1 className="text-3xl">REQUEST PRAYER</h1>
                <button className="">Now</button>
              </div>
            </div>
            <div className="h-[80px] w-[50%] request-bg2 p-2 shadow-md">
              <div className="border border-white border-solid text-center">
                <h1 className="text-3xl text-white">GIVE ONLINE</h1>
                <button className="text-white">Give</button>
              </div>
            </div>
          </div>

          <div className="mt-0 sm:mt-4">
            <div className="text-center p-4 sm:p-8">
              <h2 className="pb-4 text-3xl font-semibold">
                Welcome to The Holy Trinity.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis aliquam nisi nam quae eius id officia aperiam ullam
                ipsum, omnis autem doloribus a iste. Consectetur ab odit,
                dolorum tenetur veniam voluptatibus soluta natus, perspiciatis
                amet magni quaerat nesciunt non omnis.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-between gap-4">
              <div className="max-w-xl text-center">
                <div className="h-[200px] w-full">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="assets/crossBg.jpg"
                    alt=""
                  />
                </div>
                <div className="p-3">
                  <h2 className="text-3xl font-medium pb-2">New here?</h2>
                  <p className="text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Earum aspernatur adipisci non omnis blanditiis facere natus,
                    vel eveniet aliquid beatae!
                  </p>
                  <button className="bg-yellow-300 px-8 py-3 mt-2">
                    Learn more
                  </button>
                </div>
              </div>

              <div className="max-w-xl text-center">
                <div className="h-[200px] w-full">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="assets/crossBg.jpg"
                    alt=""
                  />
                </div>
                <div className="p-3">
                  <h2 className="text-3xl font-medium pb-2">New here?</h2>
                  <p className="text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Earum aspernatur adipisci non omnis blanditiis facere natus,
                    vel eveniet aliquid beatae!
                  </p>
                  <button className="bg-yellow-300 px-8 py-3 mt-2">
                    Learn more
                  </button>
                </div>
              </div>

              <div className="max-w-xl text-center">
                <div className="h-[200px] w-full">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="assets/crossBg.jpg"
                    alt=""
                  />
                </div>

                <div className="p-3">
                  <h2 className="text-3xl font-medium pb-2">New here?</h2>
                  <p className="text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Earum aspernatur adipisci non omnis blanditiis facere natus,
                    vel eveniet aliquid beatae!
                  </p>
                  <button className="bg-yellow-300 px-8 py-3 mt-2">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* signage text */}
      <section>
        <div className="w-full bg-white pt-14 pb-14 pl-2 pr-2 mb-4"> 
          <p className="text-6xl font-semibold text-center">OUR PASSION IS CHRIST.</p>
        </div>
      </section>

      {/* mission statement kind of section */}
      <section>
        <div className="w-full sm:w-[90%] lg:w-[80%] mx-auto">
          <div className="text-center">
            <h2 className=" text-xl pt-2 pb-2">WHAT WE BELIEVE.</h2>
            <p className=" text-4xl font-semibold pb-2">
              Our Mission is to help people.
            </p>
          </div>

          <div className="max-w-5xl mx-auto p-4">
            {/* button headers */}
            <div className="grid grid-cols-2 gap-2 md:flex justify-between pt-2 pb-2">
              <button className="bg-red-200 px-12 py-2 mt-2 rounded-full border border-black border-b-2">
                Who We Are
              </button>
              <button className="px-12 py-2 mt-2 rounded-full border border-black border-b-2">
                Our History{" "}
              </button>
              <button className="px-12 py-2 mt-2 rounded-full border border-black border-b-2">
                What We Do
              </button>
              <button className="px-12 py-2 mt-2 rounded-full border border-black border-b-2">
                Our Mission
              </button>
            </div>

            {/* content */}
            <div className="block md:flex gap-4 p-4 sm:p-12 bg-white mt-4 rounded-xl shadow-md">
              {/* dive for image */}
              <div className="w-full md:w-[50%]">
                <img
                  className="w-full h-full object-cover object-center rounded-xl"
                  src="assets/bibleBg.jpg"
                  alt=""
                />
              </div>

              {/* text */}
              <div className="w-full md:w-[50%]">
                <h2 className="text-3xl text-balance font-medium pb-4">
                  We Exist to Connect People to Jesus and Each Other.
                </h2>
                <p className="text-base pb-10 text-balance">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id,
                  dolor sed placeat quasi ducimus, fugit voluptatem eos
                  voluptas, recusandae fugiat eligendi? Illo dolorem nihil
                  temporibus distinctio quidem quasi magni id nam expedita.
                  Asperiores accusamus ducimus vitae delectus commodi adipisci
                  ad nihil explicabo officiis, odit a dolor qui iure corrupti
                  facere?
                </p>
                <a href="#" className="text-lg underline">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* pray hand section */}
        <div className="w-full bg-white mt-10 p-4">
          <div className="w-full md:w-[70%] mx-auto grid grid-cols-2 items-center md:flex md:justify-between">
            <div className="max-w-xs text-center p-2">
              <div className="flex justify-center items-center">
                <img
                  className="w-[130px] h-[130px]"
                  src="assets/prayhandsBgg.png"
                  alt=""
                />
              </div>
              <h2 className="pt-2">Reading a Prayer</h2>
              <p className="pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, doloremque.
              </p>
            </div>

            <div className="max-w-xs text-center p-2">
              <div className="flex justify-center items-center">
                <img
                  className="w-[130px] h-[130px]"
                  src="assets/openbible.png"
                  alt=""
                />
              </div>
              <h2 className="pt-2">Reading a Prayer</h2>
              <p className="pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, doloremque.
              </p>
            </div>

            <div className="max-w-xs text-center p-2">
              <div className="flex justify-center items-center">
                <img
                  className="w-[130px] h-[130px]"
                  src="assets/doveBg.png"
                  alt=""
                />
              </div>
              <h2 className="pt-2">Reading a Prayer</h2>
              <p className="pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, doloremque.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;