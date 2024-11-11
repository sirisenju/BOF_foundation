import { useState } from 'react';

const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {buttonText: "Who We Are", title: 'Tab 1', content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id,
                  dolor sed placeat quasi ducimus, fugit voluptatem eos
                  voluptas, recusandae fugiat eligendi? Illo dolorem nihil
                  temporibus distinctio quidem quasi magni id nam expedita.
                  Asperiores accusamus ducimus vitae delectus commodi adipisci
                  ad nihil explicabo officiis, odit a dolor qui iure corrupti
                  facere?`, imgurl: "assets/bibleBg.jpg"},
    {buttonText: "Our History", title: 'Tab 2', content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id,
                  dolor sed placeat quasi ducimus, fugit voluptatem eos
                  voluptas, recusandae fugiat eligendi? Illo dolorem nihil
                  temporibus distinctio quidem quasi magni id nam expedita.
                  Asperiores accusamus ducimus vitae delectus commodi adipisci
                  ad nihil explicabo officiis, odit a dolor qui iure corrupti
                  facere?`, imgurl: "assets/bibleBg.jpg"},
    {buttonText: "What We Do", title: 'Tab 3', content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id,
                  dolor sed placeat quasi ducimus, fugit voluptatem eos
                  voluptas, recusandae fugiat eligendi? Illo dolorem nihil
                  temporibus distinctio quidem quasi magni id nam expedita.
                  Asperiores accusamus ducimus vitae delectus commodi adipisci
                  ad nihil explicabo officiis, odit a dolor qui iure corrupti
                  facere?`, imgurl: "assets/bibleBg.jpg"},
    {buttonText: "Our Mission", title: 'Tab 4', content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id,
                  dolor sed placeat quasi ducimus, fugit voluptatem eos
                  voluptas, recusandae fugiat eligendi? Illo dolorem nihil
                  temporibus distinctio quidem quasi magni id nam expedita.
                  Asperiores accusamus ducimus vitae delectus commodi adipisci
                  ad nihil explicabo officiis, odit a dolor qui iure corrupti
                  facere?`, imgurl: "assets/bibleBg.jpg"},
  ];

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="grid grid-cols-2 gap-2 md:flex justify-between pt-2 pb-2">
        {tabs.map((tab, index) => (
          <button
          style={{
            backgroundColor: activeTab === index ? '#007bff' : '#f0f0f0',
            color: activeTab === index ? 'white' : 'black',
          }}
            key={index}
            onClick={() => setActiveTab(index)}
            className="active:bg-red-200 px-12 py-2 mt-2 rounded-full border border-black border-b-2"
          >
            {tab.buttonText}
          </button>
        ))}
      </div>
      <div className="block md:flex gap-4 p-4 sm:p-10 bg-white mt-4 rounded-xl shadow-md">
        {/* dive for image */}
        <div className="w-full md:w-[50%]">
                <img
                  className="w-full h-full object-cover object-center rounded-xl"
                  src={tabs[activeTab].imgurl}
                  alt=""
                />
              </div>

        {/* text */}
        <div className="w-full md:w-[50%] pt-2 md:pt-10">
                <h2 className="text-3xl text-balance font-medium pb-4">
                  {tabs[activeTab].title}
                </h2>
                <p className="text-base pb-10 text-balance">
                `h   {tabs[activeTab].content}
                </p>
                {/* <a href="#" className="text-lg underline">
                  READ MORE
                </a> */}
              </div>
      </div>
    </div>
  );
};

export default TabSwitcher;
