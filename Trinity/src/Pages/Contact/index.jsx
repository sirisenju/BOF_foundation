import React from 'react'
import Accordian from '../../Components/accordian'
import accordianData from '../../../lib/accordianData'

function ContactUs() {
    return (
        <main>
            <section className='contactus-hero-bg'>
                <div className="max-w-xl p-2 text-balance text-white h-full flex justify-center items-center">
                    <div className="pl-0 sm:pl-10 glass p-8">
                        <h1 className="text-4xl font-bold leading-tight">
                            Reach out to us and learn and join us today.
                        </h1>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full bg-white pt-14 pb-14 pl-2 pr-2 mb-4">
                    <p className="text-6xl font-semibold text-center">Reach out! be the change you want to see</p>
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

export default ContactUs