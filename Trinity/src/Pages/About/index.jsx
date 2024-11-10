import React from "react";

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
        <div className="w-full sm:w-[80%] mx-auto">
          <div className="bg-[#D3D3D3] w-full p-2 mx-auto mb-5 mt-2">
            <div className="border-white border-2">
              <h2 className="text-2xl font-bold text-center pt-2 pb-2">
                Join us for worship
              </h2>
              <div className="w-[40%] border-white border-2 mx-auto"></div>
              <p className="text-lg text-center pt-2">
                We are a community of believers who worship God.
              </p>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:flex mb-4 bg-white rounded-lg shadow-md">
            <div className=" lg:w-[33.33%] p-4">
              <h2 className="text-3xl">About Us</h2>
              <div className="w-[80%] border-black border-2 mt-3"></div>
              <div className="w-[50%] border-black border-2 mt-5 mb-3"></div>
              <p className="text-balance">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium, similique quo expedita minima 
                consectetur error quaerat natus fuga voluptatibus quod est, quibusdam labore assumenda eveniet tempore magni 
                ratione culpa repellat, qui temporibus laudantium iste architecto! Quasi nesciunt, fugiat vitae cum 
                voluptatibus repudiandae reprehenderit ducimus quia incidunt? Quos quo porro illo repellendus iure libero 
                officia dicta, aspernatur nisi, debitis tenetur, exercitationem eligendi laudantium impedit vel magni labore 
                doloribus. Quia, cum! Rem culpa natus necessitatibus reiciendis voluptas id, eos sint? Architecto, laboriosam. 
                Nesciunt iure vitae odio voluptas est? Similique odio nisi minima dignissimos voluptas, ut ad molestias facere 
                enim, quod, numquam autem consectetur magni adipisci. Fugiat ad animi ut ipsam natus fugit a esse ullam ex 
                ducimus quas qui facere id, architecto quod recusandae sapiente impedit quisquam similique asperiores alias, 
                aliquam expedita! Esse iusto, ipsam suscipit maiores debitis perspiciatis dolorem nisi voluptates, amet 
                expedita aut dolore. Praesentium sint ab ipsa recusandae!
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Velit voluptatibus nulla nostrum natus accusantium omnis
                    sequi quas expedita ipsam illo eos libero, quia error totam
                    doloremque. Laborum maxime cumque vitae!
                  </p>
                </div>
                <div className="border-black border-t-2 text-balance">
                  <h2 className="text-3xl font-semibold pt-4">Our Vision</h2>
                  <p className="pt-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Velit voluptatibus nulla nostrum natus accusantium omnis
                    sequi quas expedita ipsam illo eos libero, quia error totam
                    doloremque. Laborum maxime cumque vitae!
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-[33.33%] p-4">
              <h2 className="text-3xl">What we offer</h2>
              <div className="w-[80%] border-black border-2 mt-3"></div>
              <div className="w-[50%] border-black border-2 mt-5 mb-3"></div>
              <p className=" text-balance">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium, similique quo expedita minima 
                consectetur error quaerat natus fuga voluptatibus quod est, quibusdam labore assumenda eveniet tempore magni 
                ratione culpa repellat, qui temporibus laudantium iste architecto! Quasi nesciunt, fugiat vitae cum 
                voluptatibus repudiandae reprehenderit ducimus quia incidunt? Quos quo porro illo repellendus iure libero 
                officia dicta, aspernatur nisi, debitis tenetur, exercitationem eligendi laudantium impedit vel magni labore 
                doloribus. Quia, cum! Rem culpa natus necessitatibus reiciendis voluptas id, eos sint? Architecto, laboriosam. 
                Nesciunt iure vitae odio voluptas est? Similique odio nisi minima dignissimos voluptas, ut ad molestias facere 
                enim, quod, numquam autem consectetur magni adipisci. Fugiat ad animi ut ipsam natus fugit a esse ullam ex 
                ducimus quas qui facere id, architecto quod recusandae sapiente impedit quisquam similique asperiores alias, 
                aliquam expedita! Esse iusto, ipsam suscipit maiores debitis perspiciatis dolorem nisi voluptates, amet 
                expedita aut dolore. Praesentium sint ab ipsa recusandae!
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
