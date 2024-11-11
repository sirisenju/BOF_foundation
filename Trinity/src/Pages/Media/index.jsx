

function MediaPage() {
  return (
    <main>
      {/* section */}
      <section className="media-hero-bg">
        <div className="w-[80%] mx-auto pt-32">
            <div className="max-w-xl text-balance tracking-wide text-white text-center sm:text-left">
                <p className="text-5xl font-semibold pb-4">Witness Jesus firsthand in every sermon</p>
                <p className="text-3xl font-semibold pb-3">Watch our latest sermons</p>
                <h1 className="text-xl">Our Videos</h1>
            </div>
        </div>
      </section>

      {/* section section */}
      <section className="tp-bg">
        <div className="w-full lg:w-[80%] mx-auto pb-10">
          {/* video box sections */}
          <div className=" p-4">
            <h2 className="text-3xl font-semibold pt-4 pb-4">Top Rated Videos</h2>
            {/* outer div */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* video div */}
              <div className="w-full h-auto bg-white rounded-xl shadow-lg">
                <img
                    loading="lazy"
                  className="w-full h-[230px] lg:h-[250px] object-cover object-center rounded-t-xl"
                  src="assets/bibleBg.jpg"
                  alt=""
                />
                <div className="p-2 text-balance text-">
                  <h3 className="text-lg font-semibold">Bible study with Pastor James</h3>
                  <p className=" pt-1 text-base">10 minutes</p>
                </div>
              </div>

              {/* video div */}
              <div className="w-full h-auto bg-white rounded-xl shadow-lg">
                <img
                    loading="lazy"
                  className="w-full h-[230px] lg:h-[250px] object-cover object-center rounded-t-xl"
                  src="assets/bibleBg.jpg"
                  alt=""
                />
                <div className="p-2 text-balance text-">
                  <h3 className="text-lg font-semibold">Bible study with Pastor James</h3>
                  <p className=" pt-1 text-base">10 minutes</p>
                </div>
              </div>

              {/* video div */}
              <div className="w-full h-auto bg-white rounded-xl shadow-lg">
                <img
                    loading="lazy"
                  className="w-full h-[230px] lg:h-[250px] object-cover object-center rounded-t-xl"
                  src="assets/bibleBg.jpg"
                  alt=""
                />
                <div className="p-2 text-balance text-">
                  <h3 className="text-lg font-semibold">Bible study with Pastor James</h3>
                  <p className=" pt-1 text-base">10 minutes</p>
                </div>
              </div>

              {/* video div */}
              <div className="w-full h-auto bg-white rounded-xl shadow-lg">
                <img
                    loading="lazy"
                  className="w-full h-[230px] lg:h-[250px] object-cover object-center rounded-t-xl"
                  src="assets/bibleBg.jpg"
                  alt=""
                />
                <div className="p-2 text-balance text-">
                  <h3 className="text-lg font-semibold">Bible study with Pastor James</h3>
                  <p className=" pt-1 text-base">10 minutes</p>
                </div>
              </div>

              {/* video div */}
              <div className="w-full h-auto bg-white rounded-xl shadow-lg">
                <img
                    loading="lazy"
                  className="w-full h-[230px] lg:h-[250px] object-cover object-center rounded-t-xl"
                  src="assets/bibleBg.jpg"
                  alt=""
                />
                <div className="p-2 text-balance text-">
                  <h3 className="text-lg font-semibold">Bible study with Pastor James</h3>
                  <p className=" pt-1 text-base">10 minutes</p>
                </div>
              </div>
            </div>
          </div>


          <div className=" p-4">
            <h2 className="text-3xl font-semibold pt-4 pb-4">Sunday Service Videos</h2>
            {/* outer div */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* video div */}
              <div className="w-full h-auto bg-white rounded-xl shadow-lg">
                <img
                    loading="lazy"
                  className="w-full h-[230px] lg:h-[250px] object-cover object-center rounded-t-xl"
                  src="assets/bibleBg.jpg"
                  alt=""
                />
                <div className="p-2 text-balance text-">
                  <h3 className="text-lg font-semibold">Bible study with Pastor James</h3>
                  <p className=" pt-1 text-base">10 minutes</p>
                </div>
              </div>

              {/* video div */}
              <div className="w-full h-auto bg-white rounded-xl shadow-lg">
                <img
                    loading="lazy"
                  className="w-full h-[230px] lg:h-[250px] object-cover object-center rounded-t-xl"
                  src="assets/bibleBg.jpg"
                  alt=""
                />
                <div className="p-2 text-balance text-">
                  <h3 className="text-lg font-semibold">Bible study with Pastor James</h3>
                  <p className=" pt-1 text-base">10 minutes</p>
                </div>
              </div>

              {/* video div */}
              <div className="w-full h-auto bg-white rounded-xl shadow-lg">
                <img
                    loading="lazy"
                  className="w-full h-[230px] lg:h-[250px] object-cover object-center rounded-t-xl"
                  src="assets/bibleBg.jpg"
                  alt=""
                />
                <div className="p-2 text-balance text-">
                  <h3 className="text-lg font-semibold">Bible study with Pastor James</h3>
                  <p className=" pt-1 text-base">10 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MediaPage;
