import TabSwitcher from "../../Components/tabSwitcher";

function Home() {
  return (
    <main>
      <section className="hero-bg">
        <div className="flex items-center justify-start w-full h-full p-4 md:p-0">
          <div className="glass text-center w-full p-8 text-white">
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
                Welcome to the BOF Outreach International.
              </h2>
              <p className=" text-balance text-base">
                At BOF Outreach International, we believe that everyone deserves the opportunity to build a 
                life of dignity, purpose, and hope. Our foundation is dedicated to helping individuals find
                their way off the streets, overcome challenges, and rediscover their path to a fulfilling and 
                self-sustained life.
                Our mission is more than just offering a helping hand; we aim to empower individuals with 
                the tools, guidance, and support necessary for lasting change.
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
          <p className="text-6xl font-semibold text-center">OUR PASSION IS CHANGE.</p>
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

          {/* Tab section */}
          <TabSwitcher/>
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

        {/* <div className="pt-5 w-full mx-auto">
            <div className="w-[100%] h-20  overflow-hidden relative">
              <div className="w-[100%] flex items-center h-20 justify-around absolute left-0 animate gap-20 animate">
                {images.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-center items-start w-[20rem] text-white"
                  >
                    <img src={item.logo} className="h-12 w-10" />
                    <span className="self-center pl-3 text-3xl font-semibold font-primaryfont">
                      {item.text}
                    </span>
                  </div>
                ))}
                {images.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-center items-start w-[20rem] text-white"
                  >
                    <img src={item.logo} className="h-12 w-10" />
                    <span className="self-center pl-3 text-3xl font-semibold font-primaryfont">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
      </section>
    </main>
  );
}

export default Home;
