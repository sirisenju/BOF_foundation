import { useState } from 'react';

const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {buttonText: "Who We Are", title: 'Who We Are', content: `At BOF OUTREACH INTERNATIONAL, we are a community of passionate 
      individuals dedicated to driving positive change and empowering the most vulnerable members of society. 
      Our organization was founded on the belief that every individual, regardless of their circumstances, 
      deserves access to opportunities, resources, and support to thrive. By working hand-in-hand with local 
      communities and leveraging the support of our global network, we strive to create lasting change that uplifts 
      lives and inspires hope.`, imgurl: "assets/bibleBg.jpg"},
    {buttonText: "Our History", title: 'Our History', content: `We began with a small group of like-minded individuals 
      who shared a common vision: to create a better world by addressing the pressing challenges faced by underserved communities. 
      Inspired by the resilience and potential of those we aim to help, we launched BOF OUTREACH INTERNATIONAL with a single initiative focused on 
      Community outreach.
      In our early days, we faced significant hurdles—limited resources, modest outreach, and a daunting scope of challenges. 
      However, with determination and the support of our partners and donors, we steadily expanded our reach and impact.
      `, imgurl: "assets/bibleBg.jpg"},
    {buttonText: "What We Do", title: 'What We Do', content: `At BOF OUTREACH INTERNATIONAL, our work is centered around 
      transforming lives through targeted initiatives that address pressing needs in four key areas:
      Education:
      We believe education is a fundamental right and a powerful tool for breaking the cycle of poverty. Our programs focus 
      on providing access to quality education by building schools, distributing learning materials, and offering scholarships 
      to children in underserved communities. By empowering young minds, we are laying the foundation for a brighter future. This and many more.`, imgurl: "assets/bibleBg.jpg"},
    {buttonText: "Our Mission", title: 'Our Mission', content: `
      Our mission is to create a world where equality, opportunity, and hope are not privileges but universal rights. 
      At BOF OUTREACH INTERNATIONAL, we are committed to addressing systemic challenges in education, healthcare, and 
      community development through innovative and sustainable programs.
      We envision a future where every individual has access to basic needs, quality education, and the resources to 
      lead a healthy and fulfilling life. By fostering collaboration and building strong partnerships, we work tirelessly 
      to close gaps in access and uplift marginalized communities.`, imgurl: "assets/bibleBg.jpg"},
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
                  {tabs[activeTab].content}
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
