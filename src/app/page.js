"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useRef, useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function Home() {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const currentX = useRef(0); // 📝 track current x
  const startScrolling = (fromX) => {
    controls.start({
      x: [fromX, fromX - 2000], // move continuously left
      transition: {
        repeat: Infinity,
        duration: 40,
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    if (!isPaused) {
      startScrolling(currentX.current); // resume from last position
    }
  }, [isPaused]);

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
      image: "/services/alteration.jpg",
    },
    {
      title: "Renovation Works",
      description:
        "Give your old spaces a fresh look. We handle complete renovation works, adding style, comfort, and value to your home or office",
      image: "/services/renovation.jpg",
    },
    {
      title: "Constructions",
      description:
        "From homes to commercial buildings, we deliver strong, reliable, and timely construction services backed by skilled expertise and modern technology.",
      image: "/services/construction.jpg",
    },
    {
      title: "Demolition",
      description:
        "We provide safe and controlled demolition services for buildings and structures, ensuring the site is ready for your next project.",
      image: "/services/demolition.jpg",
    },
    {
      title: "Interior & Finishing Works",
      description:
        "From painting and flooring to complete interiors, we bring the perfect finishing touches that make your space look elegant and functional.",
      image: "/services/interior.jpg",
    },
  ];
  // <div className="relative w-full h-[50vh] sm:h-[65vh] md:h-[75vh] lg:h-screen overflow-hidden">
  //   {/* Foreground Image */}
  //   <div className="absolute sm:-ml-[10rem] lg:-ml-[30rem] flex justify-start z-10 w-full h-full">
  //     <Image
  //       src="/homepage/hero2.png"
  //       alt="Hero"
  //       fill
  //       priority
  //       className="object-contain"
  //       sizes="(max-width: 640px) 96px, (max-width: 768px) 144px, (max-width: 1024px) 192px, 512px"
  //     />
  //   </div>
  //   {/* Background Image */}
  //   <Image
  //     src="/homepage/background.jpg"
  //     alt="Background"
  //     fill
  //     priority
  //     className="object-cover z-0"
  //     sizes="100vw"
  //   />

  //   {/* Text Content */}
  //   {/* <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 sm:px-8 md:px-20 w-full max-w-6xl text-center sm:text-right z-20">
  //     <h2 className="text-white text-xl sm:text-2xl md:text-5xl font-bold leading-tight drop-shadow-lg">
  //       Building Dreams With Trust & Quality
  //     </h2>
  //     <br />
  //     <h3 className="text-amber-500 text-base sm:text-xl md:text-3xl font-semibold mt-3 sm:mt-4 leading-relaxed drop-shadow-md">
  //       Build on Trust, Delivered with Excellence
  //     </h3>
  //     <p className="text-white text-sm sm:text-base md:text-lg mt-5 sm:mt-6 leading-loose drop-shadow-sm">
  //       We deliver high quality construction solutions backed by expertise,
  //       transparency, and on-time commitment — ensuring your project is in
  //       the safest hands.
  //     </p>
  //     <button className="mt-6 bg-amber-500 text-white rounded-2xl px-6 py-3 font-bold shadow-md hover:bg-amber-600 transition duration-300">
  //       Enquiry Now
  //     </button>
  //   </div> */}
  //   <div className="absolute text-sm  top-1/2 right-0 transform -translate-y-1/2 sm:w-3xl w-full px-4 sm:px-14 md:px-8 lg:px-16 z-20 flex justify-end">
  //     <div className="w-full max-w-xl text-right lg:text-center">
  //       <h2 className="text-white font-bold leading-tight drop-shadow-lg">
  //         Building Dreams With Trust & Quality
  //       </h2>
  //       <h3 className="text-amber-500 text-xs sm:text-sm md:text-lg lg:text-2xl font-semibold mt-2 sm:mt-3 lg:mt-4 leading-relaxed drop-shadow-md">
  //         Build on Trust, Delivered with Excellence
  //       </h3>
  //       <p className="text-white text-[10px] sm:text-xs md:text-sm lg:text-base mt-3 sm:mt-4 lg:mt-6 leading-relaxed drop-shadow-sm">
  //         We deliver high quality construction solutions backed by
  //         expertise, transparency, and on-time commitment — ensuring your
  //         project is in the safest hands.
  //       </p>
  //       <button className="mt-4 sm:mt-5 lg:mt-6 bg-amber-500 text-white rounded-2xl px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm font-bold shadow-md hover:bg-amber-600 transition duration-300">
  //         Enquiry Now
  //       </button>
  //     </div>
  //   </div>
  // </div>
  // <section className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-screen overflow-hidden">

  //   <Image
  //     src="/homepage/background.jpg"
  //     alt="Background"
  //     fill
  //     priority
  //     className="object-cover"
  //     sizes="100vw"
  //   />

  //   {/* Overlay */}
  //   <div className="absolute inset-0 bg-black/40" />

  //   {/* Content */}
  //   <div className="relative z-20 h-full flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
  //     {/* Foreground Image (bottom aligned) */}
  //     <div className="relative w-[55%] sm:w-[50%] md:w-[45%] lg:w-[40%] h-full flex items-end">
  //       <Image
  //         src="/homepage/hero2.png"
  //         alt="Hero"
  //         width={800}
  //         height={800}
  //         priority
  //         className="object-contain w-full h-auto"
  //       />
  //     </div>

  //     {/* Text Content (center aligned vertically, always right) */}
  //     <div className="w-[45%] sm:w-[50%] md:w-[55%] lg:w-[60%] text-right flex flex-col justify-center">
  //       <h2 className="text-white text-sm sm:text-xl md:text-3xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
  //         Building Dreams With Trust & Quality
  //       </h2>
  //       <h3 className="text-amber-500 text-xs sm:text-base md:text-2xl lg:text-3xl font-semibold mt-2 sm:mt-4 leading-relaxed drop-shadow-md">
  //         Build on Trust, Delivered with Excellence
  //       </h3>
  //       <p className="text-white text-[10px] sm:text-xs md:text-base lg:text-lg mt-3 sm:mt-5 leading-relaxed drop-shadow-sm">
  //         We deliver high quality construction solutions backed by
  //         expertise, transparency, and on-time commitment — ensuring your
  //         project is in the safest hands.
  //       </p>
  //       <Link href={"/contact-us"} className="mt-3 sm:mt-5 bg-amber-500 text-center text-white rounded-2xl px-3 sm:px-6 lg:px-8 py-1.5 sm:py-3 lg:py-3.5 text-[10px] sm:text-sm md:text-base font-bold shadow-md hover:bg-amber-600 transition duration-300">
  //         Enquiry Now
  //       </Link>
  //     </div>
  //   </div>
  // </section>
  // <section className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-screen overflow-hidden">
  //   {/* Background */}
  //   <Image
  //     src="/homepage/background.jpg"
  //     alt="Background"
  //     fill
  //     priority
  //     className="object-cover"
  //     sizes="100vw"
  //   />

  //   {/* Overlay */}
  //   <div className="absolute inset-0 bg-black/40" />

  //   {/* Content */}
  //   <div className="relative z-20 h-full flex items-center justify-between max-w-7xl mx-auto px-2 sm:px-6 lg:px-16">
  //     {/* Foreground Image (bottom aligned, always left) */}
  //     <div className="relative w-[42%] sm:w-[95%] md:w-[40%] lg:w-[38%] h-[300px] sm:h-full flex items-end">
  //       <Image
  //         src="/homepage/hero2.png"
  //         alt="Hero"
  //         width={800}
  //         height={800}
  //         priority
  //         className="object-contain w-full h-auto"
  //       />
  //     </div>

  //     {/* Text Content (always right, centered vertically) */}
  //     <div className="w-[58%] sm:w-[55%] md:w-[60%] lg:w-[62%] text-right flex flex-col justify-center">
  //       <h2 className="text-white text-[13px] sm:text-lg md:text-3xl lg:text-5xl font-bold leading-snug drop-shadow-lg">
  //         Building Dreams With Trust & Quality
  //       </h2>
  //       <h3 className="text-amber-500 text-[10px] sm:text-base md:text-2xl lg:text-3xl font-semibold mt-1 sm:mt-3 leading-relaxed drop-shadow-md">
  //         Build on Trust, Delivered with Excellence
  //       </h3>
  //       <p className="text-white text-[9px] sm:text-base md:text-base lg:text-lg mt-2 sm:mt-5 leading-relaxed drop-shadow-sm">
  //         We deliver high quality construction solutions backed by
  //         expertise, transparency, and on-time commitment — ensuring your
  //         project is in the safest hands.
  //       </p>
  //       {/* <Link href={"/contact-us"} className="mt-2 flex gap-0.5 justify-center sm:mt-5 bg-amber-500 text-white text-center rounded-2xl px-3 sm:px-6 lg:px-8 py-1.5 sm:py-3 lg:py-3.5 text-[10px] sm:text-sm md:text-base font-bold shadow-md hover:bg-amber-600 transition duration-300"> */}
  //       <Link
  //         href={"/contact-us"}
  //         className="mt-2 flex gap-0.5 justify-center sm:mt-5 bg-amber-500 text-white text-center rounded-2xl px-3 sm:px-6 lg:px-8 py-1.5 sm:py-3 lg:py-3.5 text-[10px] sm:text-sm md:text-base font-bold shadow-md hover:bg-amber-600 transition duration-300"
  //       >
  //         <span className="flex mt-1  sm:mt-0">Enquire Now</span>
  //         <ArrowRight />
  //       </Link>
  //     </div>
  //   </div>
  //   <style jsx>{`
  //     @media (max-width: 400px) {
  //       section {
  //         height: 30vh !important; /* smaller height for 320px screens */
  //       }
  //     }
  //   `}</style>
  // </section>
  return (
    <>
      <section className="relative w-full h-[60vh] sm:h-[65vh] md:h-[75vh] lg:h-screen overflow-hidden">
        {/* Background */}
        <Image
          src="/homepage/background.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-between max-w-7xl mx-auto px-2 sm:px-6 lg:px-16">
          {/* Foreground Image (always left) */}
          <div className="relative w-[55%] sm:w-[50%] md:w-[40%] lg:w-[38%] h-full flex items-end">
            <Image
              src="/homepage/hero2.png"
              alt="Hero"
              width={800}
              height={800}
              priority
              className="object-contain w-full h-auto"
            />
          </div>

          {/* Text Content (always right) */}
          <div className="w-[45%] sm:w-[50%] md:w-[60%] lg:w-[62%] text-right flex flex-col justify-center px-2 sm:px-0">
            <h2 className="text-white text-sm sm:text-lg md:text-3xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
              Building Dreams With Trust & Quality
            </h2>
            <h3 className="text-amber-500 text-xs sm:text-base md:text-2xl lg:text-3xl font-semibold mt-1 sm:mt-3 leading-relaxed drop-shadow-md">
              Build on Trust, Delivered with Excellence
            </h3>
            <p className="text-white text-[10px] sm:text-sm md:text-base lg:text-lg mt-1 sm:mt-5 leading-relaxed drop-shadow-sm">
              We deliver high quality construction solutions backed by
              expertise, transparency, and on-time commitment — ensuring your
              project is in the safest hands.
            </p>
            <Link
              href={"/contact-us"}
              className="mt-2 sm:mt-5 inline-flex items-center justify-center gap-1 sm:gap-2 bg-amber-500 text-white text-center rounded-2xl px-3 sm:px-6 lg:px-8 py-1.5 sm:py-3 lg:py-3.5 text-[10px] sm:text-sm md:text-base font-bold shadow-md hover:bg-amber-600 transition duration-300"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </Link>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 640px) {
            section {
              height: 60vh !important;
            }
          }

          @media (max-width: 400px) {
            section {
              height: 55vh !important;
            }
          }

          @media (max-width: 320px) {
            section {
              height: 50vh !important;
            }
          }
        `}</style>
      </section>

      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 text-black bg-white">
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

      <div
        id="services"
        className="h-screen flex flex-col items-center px-4 py-10 bg-white text-black"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
          Services
        </h1>

        <div className="overflow-hidden w-full py-10 px-4 sm:px-8 bg-gray-200">
          <motion.div
            className="flex gap-6 sm:gap-8 h-full w-max"
            animate={controls}
            onUpdate={(latest) => {
              if (typeof latest.x === "number") {
                currentX.current = latest.x; // store current position
              }
            }}
            // 🖥 Desktop hover
            onMouseEnter={() => {
              setIsPaused(true);
              controls.stop();
            }}
            onMouseLeave={() => setIsPaused(false)}
            // 📱 Mobile touch
            onTouchStart={() => {
              setIsPaused(true);
              controls.stop();
            }}
            onTouchEnd={() => setIsPaused(false)}
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
