const HeroSection = () => {
    return (
      




<section>
<div className="relative z-10 border border-gray-800 rounded-lg p-6 mx-8 mt-20">
<div className=" flex items-start justify-start p-6">
  <div className="p-8 w-full">
    <h2 className="text-4xl font-extrabold text-centre tracking-tight text-white">
      WHAT I BRING TO THE TABLE
    </h2>
    <hr className="border-t border-gray-600 my-6" />
   

    <div className="relative h-40 overflow-hidden">
      <div className="carousel-animation h-full absolute top-0 left-0 w-full">
        <div className="carousel-slide">
          <div className="flex flex-col items-center text-center space-y-2 text-purple-500">
            <div className="text-4xl"><span className="text-purple-500">→</span> Hard Work</div>
            <div className="text-4xl"><span className="text-purple-500">→</span> Problem-Solving</div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="flex flex-col items-center text-center space-y-2 text-purple-500">
            <div className="text-4xl"><span className="text-purple-500">→</span> Attention to Detail</div>
            <div className="text-4xl"><span className="text-purple-500">→</span> Team Collaboration</div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="flex flex-col items-center text-center space-y-2 text-purple-500">
            <div className="text-4xl"><span className="text-purple-500">→</span> Continuous Learning</div>
            <div className="text-4xl"><span className="text-purple-500">→</span> Adaptability</div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="flex flex-col items-center text-center space-y-2 text-purple-500">
            <div className="text-4xl"><span className="text-purple-500">→</span> Time Management</div>
            <div className="text-4xl"><span className="text-purple-500">→</span> Effective Communication</div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="flex flex-col items-center text-center space-y-2 text-purple-500">
            <div className="text-4xl"><span className="text-purple-500">→</span> Creativity</div>
            <div className="text-4xl"><span className="text-purple-500">→</span> Accountability</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>

);
};

export default HeroSection;