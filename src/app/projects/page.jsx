"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
function page() {
  const data = [
    { image: "/projects/1.jpg" },
    { image: "/projects/2.jpg" },
    { image: "/projects/3.jpg" },
    { image: "/projects/4.jpg" },
    { image: "/projects/5.jpg" },
    { image: "/projects/6.jpg" },
  ];
  return (
    <div className="flex flex-col  items-center justify-center bg-white text-black ">
      <h1 className="text-4xl font-semibold mb-4 mt-4">Projects Page</h1>
      {/* <p className='text-lg'>This is the projects page.</p>
      <p className='text-lg'>You can add your project details here.</p>
      <p className='text-lg'>Feel free to customize this page as needed.</p> */}
      

      <div className=" p-6 rounded-lg shadow-md w-full flex flex-wrap gap-6 justify-center">
        {data.map((item, i) => (
          //   <div
          //     key={item.id}
          //     className="bg-[#6B9FBD] rounded-lg shadow p-4 w-full max-w-md flex flex-col items-center mx-auto"
          //   >
          //     {/* <h2 className="text-lg font-semibold text-center text-white mb-4">
          //         {item.title || "test"}
          //       </h2> */}

          //     <div className="relative w-full aspect-[4/3] mb-4">
          //       <Image
          //         src={item.image}
          //         alt={item.title || "test"}
          //         fill
          //         className="object-cover rounded"
          //         sizes="(max-width: 768px) 100vw, 400px"
          //       />
          //     </div>

          //     <p className="text-white text-sm text-center break-all">
          //       {/* {item.thumbnailUrl || "test"} */}
          //     </p>
          //   </div>

          // Inside your component
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=" rounded-lg shadow-2xl border-[#6B9FBD] p-4 w-full max-w-md flex flex-col items-center mx-auto
             border-2 
             hover:border-[#6B9FBD] 
             hover:shadow-[0_0_30px_#6B9FBD]
             transition-all duration-300"
          >
             <div className="relative w-full aspect-[4/3] mb-4">
              <Image
                src={item.image}
                alt={item.title || "test"}
                fill
                className="object-cover rounded"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            <p className="text-white text-sm text-center break-all">
              {/* {item.thumbnailUrl || "test"} */}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default page;
