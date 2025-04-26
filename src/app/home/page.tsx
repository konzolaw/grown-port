import Image from "next/image";

import AboutSection from "./about";
import ServicesSection from "./services";
import HappySection from "./happy";
import TestimonialsSection from "./testimonies";
import TablesSection from "./table";
import ProjectsSection from "./projects";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden overflow-y-auto">
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

      {/* Page Content */}
      <div className="relative z-10 border border-gray-800 rounded-lg p-4 sm:p-6 mx-4 sm:mx-8 mt-10 sm:mt-20">

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-stretch min-h-screen px-2 sm:px-4 py-4 gap-4">
          <div className="w-full md:w-1/3 relative">
            <div className="sticky top-0 h-screen">
              <div
                className="relative h-screen w-full border border-gray-800 rounded-lg overflow-hidden transform rotate-[1deg] shadow-lg"
                style={{
                  transform: 'perspective(1000px) rotateY(15deg) rotateX(-2deg)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Image
                  src="/images/blackPanther.jpeg"
                  alt="Developer Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-l-lg"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth ml-0 md:ml-20 mr-0 md:mr-20 scrollbar-hide">
            <div className="flex mt-10 sm:mt-30 justify-center p-4">
              <div className="text-left">
                <h1 className="text-4xl sm:text-6xl text-white font-extrabold">
                  Your Vision, My Code! <br /> Together, We’ll Build Innovative and Impactful Digital Experiences 
                  That Elevate Your Brand to New Heights.
                </h1>
                <div className="flex justify-center mt-10 sm:mt-20 mb-10 sm:mb-30">

                </div>
              </div>
            </div>

            <hr className="border-t border-gray-600 my-6 sm:my-10" />

            {/* Snap Section 2 */}
            <div className="flex justify-center text-white text-center">
              <div className="mt-10 sm:mt-30 mb-20 sm:mb-40 rounded-lg p-4 max-w-full sm:max-w-4xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x">
                  <div className="px-4 py-2">
                    <p className="text-3xl sm:text-5xl font-bold">2+</p>
                    <p className="text-sm sm:text-lg mt-2">Years Experience</p>
                  </div>
                  <div className="px-5 py-2">
                    <p className="text-3xl sm:text-5xl font-bold">Excellent</p>
                    <p className="text-sm sm:text-lg mt-2">Freelancer Rating</p>
                  </div>
                  <div className="px-4 py-2 flex flex-col justify-center">
                    <a
                      href="https://docs.google.com/document/d/1Y5kq43XdrFE3OytW7siSapM3hQmjMwaCdZ1MnsWfMxs/edit?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-auto border border-purple-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold hover:bg-purple-800 hover:border-purple-800 transition"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-600 my-4 sm:my-6" />

            <AboutSection />

            {/* Snap Section 4 */}
            <div className="h-auto sm:h-screen flex p-4 text-white text-center">
              <div className="max-w-full sm:max-w-4xl w-full mt-10 sm:mt-40">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-wide mb-4 sm:mb-8 text-left">MY JOURNEY</h2>

                <div className="space-y-4">
                  {/* 2022 */}
                  <div className="relative group border-t border-gray-600 py-4">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-sm text-gray-400">2022 - Ongoing</p>
                        <p className="text-lg font-medium group-hover:underline cursor-pointer">
                          Bsc. Computer Science
                        </p>
                      </div>
                      <span className="text-gray-400 text-xl">→</span>
                    </div>
                    <ul className="mt-4 text-left list-disc pl-6 text-gray-300 hidden group-hover:block">
                      <li>Studying core computer science principles and programming.</li>
                      <li>Building foundational knowledge in software development.</li>
                    </ul>
                  </div>

                  {/* 2023 */}
                  <div className="relative group border-t border-gray-600 py-4">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-sm text-gray-400">2023 - 2023</p>
                        <p className="text-lg font-medium group-hover:underline cursor-pointer">
                          Freelance UX Designer & Web Developer
                        </p>
                      </div>
                      <span className="text-gray-400 text-xl">→</span>
                    </div>
                    <ul className="mt-4 text-left list-disc pl-6 text-gray-300 hidden group-hover:block">
                      <li>Designed and developed intuitive and user-centered web interfaces for various clients.</li>
                      <li>Conducted user research and usability testing to optimize digital experiences.</li>
                      <li>Collaborated with teams to improve UI elements, ensuring accessibility and responsiveness.</li>
                    </ul>
                  </div>

                  {/* 2024 */}
                  <div className="relative group border-t border-gray-600 py-4">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-sm text-gray-400">2024 - 2024</p>
                        <p className="text-lg font-medium group-hover:underline cursor-pointer">
                          UX Lead – Computing Department Website Revamp (JKUAT)
                        </p>
                      </div>
                      <span className="text-gray-400 text-xl">→</span>
                    </div>
                    <ul className="mt-4 text-left list-disc pl-6 text-gray-300 hidden group-hover:block">
                      <li>Led a cross-functional team in redesigning the department’s website for better usability and engagement.</li>
                      <li>Conducted UX research, improving navigation and accessibility for students and faculty.</li>
                      <li>Coordinated with developers to implement a responsive and aesthetically appealing design.</li>
                    </ul>
                  </div>

                  {/* 2025 - MentorMeCollective */}
                  <div className="relative group border-t border-gray-600 py-4">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-sm text-gray-400">2025 - 2025</p>
                        <p className="text-lg font-medium group-hover:underline cursor-pointer">
                          UX Design (Track Lead) MentorMeCollective
                        </p>
                      </div>
                      <span className="text-gray-400 text-xl">→</span>
                    </div>
                    <ul className="mt-4 text-left list-disc pl-6 text-gray-300 hidden group-hover:block">
                      <li>Assisted junior developers and peers in learning UX principles, guiding them in project execution.</li>
                      <li>Provided constructive feedback on design iterations, ensuring alignment with best UX practices.</li>
                      <li>Led UX workshops, sharing knowledge on design thinking, prototyping, and usability testing.</li>
                      <li>
                        Example of Leadership: While revamping the Computing Departments website, mentored a team of developers and designers, introducing structured workflows and design principles. The result was a modern, accessible website that improved student interaction with online resources.
                      </li>
                    </ul>
                  </div>

                  {/* 2025 - PLP */}
                  <div className="relative group border-t border-gray-600 py-4">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-sm text-gray-400">2025 - Ongoing</p>
                        <p className="text-lg font-medium group-hover:underline cursor-pointer">
                          Software Development Scholar at PLP
                        </p>
                      </div>
                      <span className="text-gray-400 text-xl">→</span>
                    </div>
                    <ul className="mt-4 text-left list-disc pl-6 text-gray-300 hidden group-hover:block">
                      <li>Participating in an intensive program focused on advanced software development practices and methodologies.</li>
                      <li>Collaborating with peers on real-world projects to build scalable and efficient applications.</li>
                      <li>Engaging in workshops and mentorship sessions to enhance problem-solving and coding skills.</li>
                      <li>Specializing in modern frameworks and tools to deliver innovative software solutions.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <section className="py-12 sm:py-24 px-4 sm:px-6 text-white text-left">
              <h2 className="mt-20 sm:mt-40 text-3xl sm:text-4xl font-bold mb-6 sm:mb-12">SKILLS</h2>
              <hr className="border-t border-gray-600 my-4 sm:my-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {/* UI/UX Design */}
                <div className="relative border border-gray-600 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Image src="/images/figma.png" alt="Figma" width={32} height={32} className="w-8 h-8" />
                      <h3 className="text-xl font-semibold">UI / UX Design</h3>
                    </div>
                    <p className="text-gray-400 text-lg">95%</p>
                  </div>
                  <div className="mt-4 bg-gray-700 h-2 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>

                {/* Development */}
                <div className="relative border border-gray-600 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-5">
                      <Image src="/images/react.png" alt="ReactJS" width={34} height={32} className="w-8 h-8" />
                      <h3 className="text-xl font-semibold"> Development</h3>
                    </div>
                    <p className="text-gray-400 text-lg">90%</p>
                  </div>
                  <div className="mt-4 bg-gray-700 h-2 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>

                {/* Graphic Design */}
                <div className="relative border border-gray-600 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                    <Image src="/images/photoshop.png" alt="ReactJS" width={32} height={32} className="w-8 h-8" />
                      <h3 className="text-xl font-semibold">Graphic Design</h3>
                    </div>
                    <p className="text-gray-400 text-lg">95%</p>
                  </div>
                  <div className="mt-4 bg-gray-700 h-2 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>

                {/* Tailwind-Css */}
                <div className="relative border border-gray-600 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                    <Image src="/images/tailwind.png" alt="ReactJS" width={32} height={32} className="w-8 h-8" />
                      <h3 className="text-xl font-semibold">Tailwind-Css</h3>
                    </div>
                    <p className="text-gray-400 text-lg">98%</p>
                  </div>
                  <div className="mt-4 bg-gray-700 h-2 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "98%" }}></div>
                  </div>
                </div>

                {/* Data Analysis */}
                <div className="relative border border-gray-600 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                    <Image src="/images/data-analysis.png" alt="ReactJS" width={32} height={32} className="w-8 h-8" />
                      <h3 className="text-xl font-semibold">Data Analysis</h3>
                    </div>
                    <p className="text-gray-400 text-lg">85%</p>
                  </div>
                  <div className="mt-4 bg-gray-700 h-2 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>

                {/* Project Management */}
                <div className="relative border border-gray-600 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                    <Image src="/images/project-management.png" alt="ReactJS" width={32} height={32} className="w-8 h-8" />
                      <h3 className="text-xl font-semibold">Project Management</h3>
                    </div>
                    <p className="text-gray-400 text-lg">98%</p>
                  </div>
                  <div className="mt-4 bg-gray-700 h-2 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "98%" }}></div>
                  </div>
                </div>

                {/* Django */}
                <div className="relative border border-gray-600 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                    <Image src="/images/django.png" alt="ReactJS" width={32} height={32} className="w-8 h-8" />
                      <h3 className="text-xl font-semibold">Django</h3>
                    </div>
                    <p className="text-gray-400 text-lg">85%</p>
                  </div>
                  <div className="mt-4 bg-gray-700 h-2 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>

                {/* Adobe Illustrator */}
                <div className="relative border border-gray-600 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                    <Image src="/images/adobe-illustrator.png" alt="ReactJS" width={32} height={32} className="w-8 h-8" />
                      <h3 className="text-xl font-semibold">Adobe Illustrator</h3>
                    </div>
                    <p className="text-gray-400 text-lg">90%</p>
                  </div>
                  <div className="mt-4 bg-gray-700 h-2 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Other sections */}
        <ServicesSection />
        <TablesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <HappySection />
      </div>
    </main>
  );
}
