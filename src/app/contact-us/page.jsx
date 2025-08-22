"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm();
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setSubmitStatus(null);
    console.log("Form data:", data);
    try {
      const response = await fetch("/api/email-send", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Failed to send email");

      setSubmitStatus({
        success: true,
        message:
          "Your message has been sent successfully! You can also contact us via WhatsApp.",
      });

      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        success: false,
        message: "Failed to send your message. Please try again later.",
      });
    }
  };
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6">
            {/* Left Column - Address and Map */}
            <div className="space-y-8">
              {/* Address Information */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md w-full max-w-xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-center sm:text-left">
                  Our Office
                </h2>
                <div className="space-y-6 ">
                  {/* Address */}
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-gray-700 mr-3 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-medium text-base sm:text-lg">
                        Address
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-snug">
                        Block-1 Flat-1, Saravana's Lakshminarayana Apartment
                        <br />
                        Koothandavar Kovil Street, Vadavalli
                        <br />
                        Coimbatore, Tamil Nadu, India - 641035
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-gray-700 mr-3 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-medium text-base sm:text-lg">
                        Phone
                      </h3>
                      {/* <p className="text-gray-600 text-sm sm:text-base">
                        +91 7358803892
                      </p> */}
                      <Link
                        href="tel:+917358803892"
                        className="text-gray-600 text-sm sm:text-base hover:text-black cursor-pointer"
                      >
                        +91 7358803892
                      </Link>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-gray-700 mr-3 mt-1 shrink-0" />
                    <div className="min-w-0">
                      <h3 className="font-medium text-base sm:text-lg">
                        Email
                      </h3>
                      {/* <p className="text-gray-600 text-sm sm:text-base break-words">
                        arunconstructionsvadavallicbe@gmail.com
                      </p> */}
                      <Link
                        href="mailto:arunconstructionsvadavallicbe@gmail.com"
                        className="hover:text-black text-gray-600  text-sm sm:text-base break-words"
                      >
                        arunconstructionsvadavallicbe@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Location</h2>
                <div className="aspect-video w-full h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4991.483216966041!2d76.90617664072526!3d11.020727661361578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85f8857d852e1%3A0xf29692378159e91c!2sArun%20Constructions!5e0!3m2!1sen!2sin!4v1755190915554!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe> */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.2126490091955!2d76.908408!3d11.022666000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAxJzIxLjYiTiA3NsKwNTQnMzAuMyJF!5e0!3m2!1sen!2sin!4v1755702125024!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-medium font-medium text-gray-700 mb-1"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    placeholder="Please enter your name"
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters long",
                      },
                      maxLength: {
                        value: 50,
                        message: "Name must be less than 50 characters long",
                      },
                    })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors
            ${
              errors.name
                ? "border-red-500 focus:ring-red-400 bg-red-50"
                : "border-gray-300 focus:ring-gray-400"
            }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-medium font-medium text-gray-700 mb-1"
                  >
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Please enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors
            ${
              errors.email
                ? "border-red-500 focus:ring-red-400 bg-red-50"
                : "border-gray-300 focus:ring-gray-400"
            }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-medium font-medium text-gray-700 mb-1"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Please enter your subject"
                    type="text"
                    id="subject"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors
            ${
              errors.subject
                ? "border-red-500 focus:ring-red-400 bg-red-50"
                : "border-gray-300 focus:ring-gray-400"
            }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-medium font-medium text-gray-700 mb-1"
                  >
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="Please enter your mobile number"
                    inputMode="numeric"
                    {...register("mobile", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Mobile number must be exactly 10 digits",
                      },
                    })}
                    onInput={(e) => {
                      const input = e.target;
                      input.value = input.value.replace(/[^0-9]/g, "");
                    }}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors
            ${
              errors.mobile
                ? "border-red-500 focus:ring-red-400 bg-red-50"
                : "border-gray-300 focus:ring-gray-400"
            }`}
                  />
                  {errors.mobile && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.mobile.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-medium font-medium text-gray-700 mb-1"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    placeholder="Please enter your message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    rows={6}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors
            ${
              errors.message
                ? "border-red-500 focus:ring-red-400 bg-red-50"
                : "border-gray-300 focus:ring-gray-400"
            }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 ${
                      isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
                    } flex   justify-center items-center w-full px-4 sm:px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors disabled:bg-gray-400 text-sm sm:text-base`}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>

                  <a
                    href={`https://wa.me/7358803892`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 sm:px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm sm:text-base whitespace-nowrap"
                  >
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <svg
                        className="h-5 w-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                      </svg>
                    </svg>
                    WhatsApp Us
                  </a>
                  <Link
                    href="https://www.instagram.com/arunconstructions_vadavalli_?igsh=MWxlbDVrNWFvNXk1Nw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 
             bg-gradient-to-tr from-yellow-300 via-pink-500 to-purple-600 
             text-white font-semibold rounded-md 
             shadow-md hover:shadow-lg hover:scale-105 
             transition-all duration-300 ease-in-out text-sm sm:text-base"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                    </svg>
                    Follow Us
                  </Link>
                </div>

                {submitStatus && (
                  <div
                    className={`p-4 mt-4 rounded-md ${
                      submitStatus.success
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
}
