"use client";
import Image from "next/image";
import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
export default function Home() {
  const services = [
    {
      title: "Design and Planning",
      description:
        "We turn ideas into detailed plans that match your needs and budget. From layouts to blueprints, our design and planning ensure every project begins with a strong foundation.",
      image: "/services/design.jpg",
    },
    {
      title: "Alteration Works",
      description:
        "Need changes to your existing property? Our alteration services help you reshape and improve spaces while maintaining safety and quality standards.",
      image: "",
    },
    {
      title: "Renovation Works",
      description:
        "Give your old spaces a fresh look. We handle complete renovation works, adding style, comfort, and value to your home or office",
      image: "",
    },
    {
      title: "Constructions",
      description:
        "From homes to commercial buildings, we deliver strong, reliable, and timely construction services backed by skilled expertise and modern technology.",
      image: "",
    },
    {
      title: "Demolition",
      description:
        "We provide safe and controlled demolition services for buildings and structures, ensuring the site is ready for your next project.",
      image: "",
    },
    {
      title: "Interior & Finishing Works",
      description:
        "From painting and flooring to complete interiors, we bring the perfect finishing touches that make your space look elegant and functional.",
      image: "",
    },
  ];
  return (
    <>
      {/* hero */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background Image */}
        <div className="relative w-full h-[70vh] md:h-screen">
          <Image
            src="/homepage/hero1.jpg"
            alt="Hero Image"
            fill
            className="object-cover rounded-none md:rounded-lg"
            priority
          />
        </div>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
        <h1 className="font-bold text-3xl text-primary mb-6 text-center md:text-left">
          About Us
        </h1>

        <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8 items-center md:items-start">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 h-80 md:h-[30rem]">
            <Image
              src="/assets/about.jpg"
              alt="About"
              fill
              className="rounded-xl object-cover shadow-2xl"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 px-2 md:px-4">
            <p className="text-justify text-base leading-relaxed">
              Welcome to{" "}
              <span className="text-[#6B9FBD] font-bold text-xl">
                Arun Constructions
              </span>
              , your trusted construction company in Coimbatore. We believe
              construction is more than just building structures – it’s about
              creating safe, reliable, and lasting spaces that people are proud
              to call their own. With years of experience in the industry, we
              specialize in residential construction, commercial projects,
              renovations, and end-to-end construction services across
              Coimbatore.
              <br />
              Our mission is simple – to deliver quality construction services
              with honesty, transparency, and on-time completion. At Arun
              Constructions, whether you're planning your dream home, a stylish
              office, or a large-scale project, our skilled team is here to
              guide you every step of the way.
              <br />
              Clients in Coimbatore trust us because we keep our word. From the
              first consultation to the final handover, we listen to your needs,
              maintain clear communication, and deliver results that exceed
              expectations.
              <br />
              What makes us different is our personal approach – we treat every
              project as if it were our own. We don’t just construct buildings;
              we build trust, relationships, and long-term value for our
              clients.
              <br />
              If you are looking for a reliable construction company in
              Coimbatore, Arun Constructions is here for you. Together, let’s
              build spaces that inspire and stand strong for generations.
            </p>
          </div>
        </div>
      </div>

      {/* <div
        id="services"
        className="min-h-screen flex flex-col items-center px-4 py-10"
      >
        <h1 className="text-3xl font-bold text-primary mb-8">Services</h1>

        <div className="overflow-hidden w-full py-10 px-8 bg-gray-100">
          <motion.div
            className="flex gap-8 h-full"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 25, // slower for readability
              ease: "linear",
            }}
            >
            {[...services, ...services].map((data, i) => (
              <section
                key={i}
                className="bg-white rounded-lg overflow-hidden p-6 flex-shrink-0 w-96 flex flex-col items-center border-2 border-[#6B9FBD] shadow-[0_0_6px_#6B9FBD] hover:border-transparent transition-all duration-300"
              >
                <div className="relative w-full h-60 mb-4">
                  <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-center">
                  {data.title}
                </h2>
                <p className="text-gray-600 text-base text-center">
                  {data.description}
                </p>
              </section>
            ))}
          </motion.div>
        </div>
      </div> */}
      <div
        id="services"
        className="min-h-screen flex flex-col items-center px-4 py-10"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
          Services
        </h1>

        <div className="overflow-hidden w-full py-10 px-4 sm:px-8 bg-gray-100">
          <motion.div
            className="flex gap-6 sm:gap-8 h-full w-max" // 👈 Add w-max
            animate={{ x: ["0%", "-50%"] }} // 👈 Adjust to -50% since you're duplicating the array
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
          >
            {[...services, ...services].map((data, i) => (
              <section
                key={i}
                className="bg-white rounded-lg overflow-hidden p-4 sm:p-6 flex-shrink-0 w-64 sm:w-96 flex flex-col items-center border-2 hover:border-[#6B9FBD] hover:shadow-[0_0_6px_#6B9FBD] border-transparent transition-all duration-300"
              >
                <div className="relative w-full h-40 sm:h-60 mb-3 sm:mb-4">
                  <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h2 className="text-lg sm:text-2xl font-semibold mb-1 sm:mb-2 text-center">
                  {data.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base text-center">
                  {data.description}
                </p>
              </section>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
              {services.map((data, i) => (
                // <section
                //   key={i}
                //   className="bg-white  rounded-lg overflow-hidden p-4 flex flex-col items-center border-2  border-[#6B9FBD] shadow-[0_0_6px_#6B9FBD] hover:border-transparent transition-all duration-300"
                // >
                //   <div className="relative w-full h-52 mb-4">
                //     <Image
                //       src={data.image}
                //       alt={data.title}
                //       fill
                //       className="object-cover rounded-md"
                //     />
                //   </div>
                //   <h2 className="text-xl font-semibold mb-2 text-center">
                //     {data.title}
                //   </h2>
                //   <p className="text-gray-600 text-sm text-center">
                //     {data.description}
                //   </p>
                // </section>
              ))}
            </div> */
}
