const AboutSection = () => {
  return (
    // Adjusted the container to be fully responsive on mobile and take the space of the main container on desktop
    <section className="flex flex-col items-start p-4 text-white text-left sm:flex-row">
      <div className=" p-4 w-full sm:container sm:mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold">ABOUT ME</h2>
        <hr className="border-t border-gray-600 my-4 sm:my-6" />
        <p className="mt-4 sm:mt-6 text-base sm:text-lg">
          I specialize in crafting user-centric web applications that are not only visually appealing but also highly functional. 
          My expertise lies in <strong>Frontend</strong>, <strong>User Research</strong>, and <strong>UX design</strong>, with a focus on creating responsive designs 
          that adapt seamlessly to any device. I am passionate about delivering high-quality code and ensuring an exceptional user experience.
        </p>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg">
          Based in <strong>Nairobi</strong>, I am a dedicated <strong>Frontend Developer</strong> and <strong>UX Designer</strong> 
          with a strong foundation in <strong>Computer Science</strong>. My passion lies in creating seamless user experiences by 
          combining technical expertise with a deep understanding of design principles. I am committed to delivering innovative 
          solutions that not only meet but exceed client expectations, ensuring every project is a success.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;