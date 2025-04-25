import Link from "next/link";



const HeroSection = () => {
    return (
      
<section className="py-24 px-6 text-left">
<h2 className="text-4xl text-white font-bold">Happy ? Lets Connect</h2>
<hr className="border-t border-gray-600 my-6" />
<p className="mt-6 text-lg max-w-4xl mx-auto text-gray-600">
  
  Contact me today to discover innovative business solutions designed for success.
</p>
<Link 
  href="/contact" 
  className="mt-8 mx-auto w-60 block text-center border border-purple-800 bg-transparent hover:bg-purple-800 text-white py-4 px-8 rounded-lg text-xl shadow-md transition-all"
>
  Get Started Now
</Link>
</section>

);
};

export default HeroSection;