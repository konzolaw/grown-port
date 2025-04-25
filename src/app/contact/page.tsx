import Image from "next/image";

export default function Contact() {
  return (
    <main className="relative  overflow-x-hidden overflow-y-auto ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/blue.jpeg" 
          alt="Business Consulting" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-100" 
        />
      </div>
<div className="mx-20 border border-gray-500 rounded-lg p-6 ">
      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center text-center px-6 py-24 bg-transparent ">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-extrabold text-white">
            Get in Touch
          </h1>
          <hr className="border-t border-gray-500 my-4 w-full mx-auto" />
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Have a question or need expert advice? Contact me today.
          </p>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="relative z-10 py-24 px-6 bg-transparent items-center justify-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="p-6 border border-gray-500 rounded-lg">
            <h2 className="text-4xl font-bold text-white">Contact Information</h2>
            <hr className="border-t border-gray-500 my-4 w-full" />
            <p className="mt-6 text-lg text-gray-300">
              Reach out to me via phone, email, or visit my office. I am here to help.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-purple-500 text-2xl">📍</span>
                <p className="text-lg text-gray-300">548 Oasis Juja, Kiambu, Kenya</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-purple-500 text-2xl">📞</span>
                <p className="text-lg text-gray-300">+254 790711272</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-purple-500 text-2xl">✉️</span>
                <p className="text-lg text-gray-300">iykekonzolaw21@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-purple-500 text-2xl">🌍</span>
                <p className="text-lg text-gray-300">www.konzolo.vercel.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative z-10 p-8 border border-gray-500 rounded-lg shadow-lg bg-transparent ">
            <h2 className="text-3xl font-semibold text-white">Send Me a Message</h2>
            <hr className="border-t border-gray-500 my-4 w-full" />
            <p className="mt-4 text-gray-300">
              Fill out the form below and I will respond within 24 hours.
            </p>
            <form className="mt-6 space-y-6">
              <div>
                <label className="block text-gray-300 font-medium">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium">Your Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={5}
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full border border-purple-800 bg-transparent hover:bg-purple-800 text-white py-3 px-6 rounded-lg text-lg shadow-md transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="relative z-10 mt-12  rounded-lg overflow-hidden">
        <iframe
          className="w-full h-80"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.13868252457!2d36.8219467!3d-1.2863895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10f3b7d8b7e7%3A0x7f7a4c7a6542a5e6!2sNairobi!5e0!3m2!1sen!2ske!4v1619562342342!5m2!1sen!2ske"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </div>

      {/* Footer Section */}
    </main>
  );
}