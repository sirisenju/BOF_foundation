import React from 'react'
import Accordian from '../../Components/accordian'
import accordianData from '../../../lib/accordianData'

function Gallery() {
  return (
    <main>
      <section className='contactus-hero-bg'>
        <div className='2xl:max-w-7xl h-full'>
          <div className="max-w-xl p-2 text-balance text-white h-full flex justify-center items-center">
            <div className="pl-0 sm:pl-10 glass p-8">
              <h1 className="text-4xl font-bold leading-tight">
                Reach out to us and learn and join us today.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full bg-white pt-14 pb-14 pl-2 pr-2 mb-4">
          <p className="text-6xl font-semibold text-center">Changing Lives, Our Legacy.</p>
        </div>
      </section>



      {/* Gallery for images */}
      <section className="w-full h-full overflow-clip">
        <div
          className="w-full lg:w-[80%] h-full mx-auto mb-10 p-2 lg:p-0 2xl:max-w-7xl"
        >
          <h2 className="text-2xl pb-8 pt-2">Our Gallery</h2>
          <div className="row1 flex gap-2 justify-between flex-wrap">
            <div
              className="flex-grow basis-[250px]"
            >
              <img src="assets/media-bg.jpg" className='object-cover h-full w-full' alt="" />
            </div>
            <div
              className="flex-grow basis-[250px]"
            >
              <img src="assets/media-bg.jpg" className='object-cover h-full w-full' alt="" />
            </div>
            <div
              className="flex-grow basis-[250px]"
            >
              <img src="assets/contactUsBg.jpg" className='object-cover h-full w-full' alt="" />
            </div>
          </div>
          <div className="row2 flex flex-wrap gap-2 mt-2 mb-2">
            <div
              className="flex-grow basis-[250px]"
            >
              <img src="assets/dreads.jpg" className='object-cover h-full w-full' alt="" />
            </div>
            <div
              className="flex-grow basis-[250px]"
            >
              <img src="assets/contactUsBg.jpg" className='object-cover h-full w-full' alt="" />
            </div>
            <div
              className="flex-grow basis-[250px]"
            >
              <img src="assets/dreads.jpg" className='object-cover h-full w-full' alt="" />
            </div>
            <div
              className="flex-grow basis-[250px]"
            >
              <img src="assets/bibleBg.jpg" className='object-cover h-full w-full' alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallary section 2 */}
      <section className='h-full lg:h-screen w-full bg-white overflow-clip'>
        <div className='h-full w-full lg:w-[80%] p-2 mx-auto pt-10 pb-10 2xl:max-w-7xl'>
          <div className='h-[60%] block lg:flex gap-2 pb-2'>
            <div className='w-full lg:w-[50%]'>
              <img src="assets/contactUsBg.jpg" className='object-cover h-full w-full' alt="" />
            </div>
            <div className='w-full lg:w-[50%]'>
              <div className='h-[50%] block lg:flex gap-2'>
                <div className='w-full lg:w-[50%] h-full py-2 lg:py-0'><img src="assets/contactUsBg.jpg" className='object-cover h-full w-full' alt="" /></div>
                <div className='w-full lg:w-[50%] h-full '><img src="assets/contactUsBg.jpg" className='object-cover h-full w-full' alt="" /></div>
              </div>
              <div className='h-[50%] pt-2'>
                <img src="assets/bibleBg.jpg" className='object-cover h-full w-full' alt="" />
              </div>
            </div>
          </div>

          <div className='h-[40%] flex flex-wrap gap-2'>
            <div className='basis-[220px] flex-grow'>
              <img src="assets/bibleBg.jpg" className='object-cover h-full w-full' alt="" />
            </div>
            <div className='basis-[220px] flex-grow'>
              <img src="assets/dreads.jpg" className='object-cover h-full w-full' alt="" />
            </div>
            <div className='basis-[220px] flex-grow'>
              <img src="assets/media-bg.jpg" className='object-cover h-full w-full' alt="" />
            </div>
            <div className='basis-[220px] flex-grow'>
              <img src="assets/contactUsBg.jpg" className='object-cover h-full w-full' alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallary section 2 */}
      <section className='h-full w-full'>
        <div className='w-full lg:w-[80%] mx-auto flex flex-wrap p-2 gap-2 2xl:max-w-7xl pt-10 pb-10'>
          <div className='flex-grow basis-[220px]'>
            <img src="assets/contactUsBg.jpg" className='object-cover h-full w-full' alt="" />
          </div>
          <div className='flex-grow basis-[280px]'>
            <img src="assets/media-bg.jpg" className='object-cover h-full w-full' alt="" />
          </div>
          <div className='flex-grow basis-[220px]'>
            <img src="assets/dreads.jpg" className='object-cover h-full w-full' alt="" />
          </div>
        </div>
      </section>


      {/* donate sign */}
      <section>
        <div className="w-full bg-white pt-14 pb-14 pl-2 pr-2 mb-4">
          <p className="text-6xl font-semibold text-center">Recah out to us, Contact us.</p>
        </div>
      </section>

      <section>
                <div className='w-full p-4 lg:p-0 lg:w-[80%] mx-auto block lg:flex gap-24 pt-6 justify-center'>
                    {/* the accordian div */}
                    <div>
                        <h2 className='text-2xl pt-2 pb-10 font-bold'>Frequently ask questions</h2>
                        {accordianData.map(({ title, message, id, number }) => (
                            <Accordian title={title} message={message} id={id} number={number} />
                        ))}
                    </div>

                    {/* email div */}
                    <div className="max-w-3xl h-full pr-0 sm:pr-16 lg:pt-0 pt-8">
                        <h2 className="text-2xl pt-2 pb-10 font-bold">Send us an email</h2>
                        <div className="h-full flex flex-col items-center justify-center flex-grow">
                            <form action="" className="flex flex-col gap-3">
                                <div className="block sm:flex gap-2 w-full">
                                    <div className="block w-full">
                                        <label htmlFor="firstname">First Name</label>
                                        <input
                                            placeholder="firstname"
                                            className="w-full mt-2 py-2 px-2"
                                            type="text"
                                            required
                                        />
                                    </div>
                                    <div className="block w-full sm:pt-0 pt-4">
                                        <label htmlFor="lastname">Last Name</label>
                                        <input
                                            placeholder="lastname"
                                            className="w-full mt-2 py-2 px-2"
                                            type="text"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="block sm:flex gap-2 w-full">
                                    <div className="block w-full">
                                        <label htmlFor="firstname">Sex</label>
                                        <input
                                            placeholder="Male or Female"
                                            className="w-full mt-2 py-2 px-2"
                                            type="text"
                                            required
                                        />
                                    </div>
                                    <div className="block w-full sm:pt-0 pt-4">
                                        <label htmlFor="lastname">Address</label>
                                        <input
                                            placeholder="ex @location"
                                            className="w-full mt-2 py-2 px-2"
                                            type="text"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-2 w-full">
                                    <div className="block w-full">
                                        <label htmlFor="mail">Mail</label>
                                        <input
                                            placeholder="Your email"
                                            className="w-full mt-2 py-2 px-2"
                                            type="text"
                                            required
                                        />
                                    </div>
                                    <div className="block gap-2 w-full">
                                        <label htmlFor="phonenumber">Phone number</label>
                                        <input
                                            placeholder="080 *** *** 57"
                                            className="w-full mt-2 py-2 px-2"
                                            type="text"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-2 w-full">
                                    <textarea
                                        className="w-full mt-2 py-2 px-2"
                                        name="text"
                                        rows="3"
                                        required
                                    ></textarea>
                                </div>
                                <div className="w-full">
                                    <button type="submit" className="py-2 px-4 mt-4 mb-4 border-2 border-green-500 hover:bg-green-600 hover:text-white">
                                        Send message
                                    </button>
                                    {/* <Toasts message={toastmessage} type={type} /> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="w-full sm:w-[80%] mx-auto pb-10 p-2">

                    <div className="w-full mb-5 pt-10">
                        <h3 className="text-3xl pb-4">Still need help?</h3>
                        <p className="text-lg pb-2">
                            We enjoy adapting our strategies to offer every client the best
                            solutions that are at the forefront of the industry.
                        </p>
                    </div>
                    <div className="gap-3 flex flex-wrap">
                        <div className="bg-white rounded-lg shadow-lg text-center p-4 mb-2 sm:mb-0 flex-grow basis-[200px]">
                            <img
                                className="h-16 w-16 mx-auto"
                                src="./assets/call_admin.png"
                                alt=""
                            />
                            <h3 className="text-2xl pb-3 pt-2">Call support</h3>
                            <p className="text-base pb-2">
                                Reach out to our support team via phone for prompt and
                                professional assistance with any issues or inquiries.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg text-center p-4 mb-2 sm:mb-0 flex-grow basis-[200px]">
                            <img
                                className="h-16 w-16 mx-auto"
                                src="./assets/chat_admin.png"
                                alt=""
                            />
                            <h3 className="text-2xl pb-3 pt-2">Chat with us</h3>
                            <p className="text-base pb-2">
                                Have a quick question or need real-time support? Chat with us
                                online and get instant responses from our knowledgeable
                                representatives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    </main>
  )
}

export default Gallery
