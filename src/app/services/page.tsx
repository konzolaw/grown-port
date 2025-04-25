import Image from "next/image";
import TablesSection from "@/app/home/table";

export default function ServicesSection() {
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



      {/* Testimonials Section */}
      <div className="relative z-10 bg-transparent bg-opacity-50 py-12">
        <TablesSection />
      </div>

      {/* Call to Action Section */}
      <div className="relative z-10 px-6 text-center py-24 bg-transparent bg-opacity-50">
        <h2 className="text-4xl font-bold text-white">Discover My Expertise</h2>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Transform your vision into reality with my tailored solutions. From innovative designs to impactful strategies, I am here to help you achieve unparalleled success.
        </p>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Let me guide you on a journey of growth, innovation, and excellence.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-purple-600 hover:bg-purple-800 text-white py-4 px-8 rounded-lg text-xl shadow-md transition-all"
        >
          Let&apos;s Work Together
        </a>
      </div>
    </main>
  );
}