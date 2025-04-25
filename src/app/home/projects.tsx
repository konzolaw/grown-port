import Image from "next/image";
const HeroSection = () => {
    return (
      




<section className="py-24 px-6 text-white text-left ">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-left">PROJECTS</h2>
    <hr className="border-t border-gray-600 my-6" />
    <div className="grid md:grid-cols-2 gap-12">

      {[
        {
          src: "/images/jasiri.png",
          title: "Jasiri-Pitch",
          tag: "Frontend Development",
          link: "https://jasiri.vercel.app"
        },
        {
          src: "/images/lapicure.png",
          title: "LapiCure",
          tag: "Frontend Development",
          link: "https://lapicure.vercel.app"
        },
        {
          src: "/images/smart.png",
          title: "SmartAI Traffic",
          tag: "UX Design",
          link: "https://smarttraffic-ai.vercel.app"
        },
        {
          src: "/images/computing .png",
          title: "JKUAT COMPUTING WEBSITE",
          tag: "Frontend Development",
          link: "https://www.jkuat.ac.ke/school/scit/?page_id=18292"
        },
        {
          src: "/images/social.png",
          title: "JKUAT SOCIAL ROBOTICS",
          tag: "Frontend Development",
          link: "https://www.jkuatsocialroboticslab.com/"
        }
      ].map((project, index) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group w-full h-[420px] bg-transparent rounded-xl overflow-hidden shadow-none transition-all duration-300 hover:shadow-[0_0_25px_5px_rgba(128,90,213,0.5)]"
        >
          <div className="w-full h-[280px] overflow-hidden rounded-xl">
            <Image
              src={project.src}
              alt={project.title}
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="mt-4 px-3">
            <span className="bg-transparent border border-purple-500 text-purple-300 px-3 py-1 rounded-full text-sm">
              {project.tag}
            </span>
            <h3 className="text-xl font-semibold mt-2 text-white">{project.title}</h3>
          </div>
        </a>
      ))}

    </div>
  </div>
</section>

);
};

export default HeroSection;