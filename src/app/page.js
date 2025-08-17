import Image from "next/image";


export default function Home() {
  return (
    <>
      {/* hero */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background Image */}
        <Image
          src="/homepage/hero1.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-lg"
        />

        {/* Overlay content */}
        <div className="relative z-10 text-end max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Welcome to Arun Constructions
          </h1>
          <p className="text-md md:text-lg text-white">
            Building Dreams with Quality and Care
          </p>
        </div>
      </div>

      <div className="h-screen flex bg-amber-100 items-center justify-center px-4">
        <h1>About Us</h1>


      </div>
      <div className="h-screen flex items-center justify-center px-4">
        <h1>Services</h1>


      </div>

    </>
  );
}
