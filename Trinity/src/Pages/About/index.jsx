

function About() {
  return (
    <main>
      {/* hero section */}
      <section className="about-hero-bg">
        <div className="max-w-xl p-2 text-balance text-white h-full flex justify-center items-center">
          <div className="pl-0 sm:pl-28">
            <h1 className="text-2xl leading-tight">
              Welcome to the <br />
              <span className="text-[70px] font-semibold">
                Holy Trinity Ministires.
              </span>
            </h1>
            <a className="pt-4 text-lg" href="#">
              About us
            </a>
          </div>
        </div>
      </section>

      {/* signage text */}
      <section>
        <div className="w-full bg-white pt-14 pb-14 pl-2 pr-2 mb-4"> 
          <p className="text-6xl font-semibold text-center">OUR PASSION IS CHRIST.</p>
        </div>
      </section>

      {/* about section description */}
      <section>
        <div className="w-full sm:w-[90%] mx-auto">
          <div className="bg-[#D3D3D3] w-full p-2 mx-auto mb-5 mt-2">
            <div className="border-white border-2">
              <h2 className="text-2xl font-bold text-center pt-2 pb-2">
                Join us! Be a part of our mission, be a part of change.
              </h2>
              <div className="w-[40%] border-white border-2 mx-auto"></div>
              <p className="text-lg text-center pt-2">
                We are a community of believers who worship God.
              </p>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:flex mb-4 bg-white rounded-lg shadow-md">
            <div className="lg:w-[33.33%] p-4">
              <h2 className="text-3xl">About Us</h2>
              <div className="w-[80%] border-black border-2 mt-3"></div>
              <div className="w-[50%] border-black border-2 mt-5 mb-3"></div>
              <p className="text-pretty">
                BOF Outreach International is a community-driven foundation with a powerful purpose: 
                to bring the heart of God Almighty to those in need. We believe in God’s vision for 
                humanity—a world filled with hope, purpose, and love. Our mission is to help individuals 
                rebuild their lives according to God’s divine plan, offering guidance, support, and a pathway 
                to a brighter future.
                We are a group of compassionate individuals committed to giving hope to the hopeless, helping 
                each person find their God-given purpose, and restoring His love in every life we touch. By sharing 
                the word of God and offering practical support, we aim to reach the lost, empower individuals to embrace 
                a life of dignity, and nurture a community of responsible, compassionate people. Together, we can influence 
                the world with a positive spirit, make it a better place, and spread God’s love, care, and hope to all.
                Our work is more than just assistance; it’s a calling to impact lives with lasting change, build resilient 
                communities, and transform the world through faith, love, and grace.
              </p>
            </div>
            <div className="lg:w-[33.33%] flex flex-col bg-[#D3D3D3]">
              <div className="w-full max-h-[380px] mb-2">
                <img
                  src="assets/teen-praying.jpg"
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </div>
              <div className="h-full p-6">
                <div className="text-balance">
                  <h2 className="text-3xl font-semibold pb-2">Our Mission</h2>
                  <p className="pb-4">
                    Reaching the globe with the message of salvation, restoration, 
                    deliverance, wealth and health making humanity heavenly Conscious 
                    and earthly useful.
                  </p>
                </div>
                <div className="border-black border-t-2 text-balance">
                  <h2 className="text-3xl font-semibold pt-4">Our Vision</h2>
                  <p className="pt-2">
                    Evangelizing the Earth and redeeming humanity for Christ Jesus.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-[33.33%] p-4">
              <h2 className="text-3xl">What we offer</h2>
              <div className="w-[80%] border-black border-2 mt-3"></div>
              <div className="w-[50%] border-black border-2 mt-5 mb-3"></div>
              <p className=" text-pretty">
                At BOF Outreach International, we provide a range of services and programs aimed at uplifting 
                individuals, meeting community needs, and sharing God’s love with everyone we encounter. 
                Here’s a closer look at what we offer:
                <li>Evangelism: We share the word of God, offering hope and purpose through a relationship with Jesus Christ.</li>
                <li>Community Crusades: Large gatherings for worship, prayer, and teachings that inspire unity and faith.</li>
                <li>Community Outreach: Engaging with local communities to provide support and promote well-being.</li>
                <li>Visitation to Poor Homes: Bringing companionship, practical help, and spiritual guidance to underserved households.</li>
                <li>Food Donation: Offering regular food donations to those in need, ensuring no one goes hungry.</li>
                Through these efforts, we strive to make a lasting impact, offering hope, support, and love to each person we reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* third section */}
      <section className="tp-bg">
        <div className="w-[95%] lg:w-[80%] mx-auto">
          {/* content-left */}
          <div className="bg-white mt-4 mb-4 rounded-xl shadow-md p-4 lg:p-12">
            <div className="block lg:flex gap-4 pb-5">
              {/* dive for image */}
              <div className="w-full lg:w-[50%] max-h-[520px] order-last">
                <img
                  className="w-full h-[300px] lg:h-full object-cover object-center rounded-xl"
                  src="assets/bibleBg.jpg"
                  alt=""
                />
              </div>

              {/* text */}
              <div className="w-full lg:w-[50%] mt-14">
                <h2 className="text-3xl font-medium pb-4 text-balance">
                  We Exist to Connect People to Jesus and Each Other.
                </h2>
                <p className="text-base pb-10">
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

            <div className="block lg:flex gap-4">
              {/* dive for image */}
              <div className="w-full lg:w-[50%] max-h-[520px]">
                <img
                  className="w-full h-[300px] lg:h-full object-cover object-center rounded-xl"
                  src="assets/bibleBg.jpg"
                  alt=""
                />
              </div>

              {/* text */}
              <div className="w-full lg:w-[50%] mt-14">
                <h2 className="text-3xl font-medium text-balance pb-4">
                  We Exist to Connect People to Jesus and Each Other.
                </h2>
                <p className="text-base pb-10">
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
      </section>

      {/* foourth section */}
      <section className="bg-white p-10">
        <div className="w-full lg:w-[80%] mx-auto flex flex-wrap gap-2">
          
          {/* inner divs */}
          <div className=" bg-[#D3D3D3] p-2 mx-auto mb-5 mt-2 basis-[290px] grow">
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

          <div className=" bg-[#D3D3D3] p-2 mx-auto mb-5 mt-2 basis-[290px] grow">
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

          <div className=" bg-[#D3D3D3] p-2 mx-auto mb-5 mt-2 basis-[290px] grow">
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

export default About;
