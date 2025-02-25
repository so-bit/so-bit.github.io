import Image from 'next/image';
import React from 'react';


export const AboutMe = () => {
  return (
    <section 
      id="myself" 
      className="flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-12 bg-gradient-to-r from-gray-50 to-gray-200 dark:from-black dark:to-gray-900"
    >
      {/* Left Side: Profile Image & Contact */}
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-12 flex flex-col items-center text-center md:text-left">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-800 dark:border-white shadow-xl">
          <Image
            src="/sonalbijitkar.png"
            alt="Sonal Bijitkar"
            layout="intrinsic"
            width={440}
            height={540}
            objectFit="cover"
            priority
          />
        </div>

        {/* Name */}
        <h2 className="mt-6 text-4xl md:text-5xl font-extrabold font-mono tracking-wide text-gray-900 dark:text-white">
          &lt;SONAL BIJITKAR&gt;
        </h2>

        {/* Contact Info */}
        <div className="mt-4 space-y-2 text-lg">
          <p className="text-gray-700 dark:text-purple-300 font-semibold">Contact Me</p>
          <p className="text-xl font-bold text-gray-900 dark:text-white">bijitkarsonal@gmail.com</p>
          <p className="text-xl font-bold text-gray-900 dark:text-white">+1 (562) 686-0640</p>
        </div>
      </div>

      {/* Right Side: About & Details */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-wide mb-4 text-gray-900 dark:text-white">
          &lt;/About Me&gt;
        </h2>

        <p className="text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          I’m actively looking for opportunities in software development, 
          where I can further refine my skills and contribute to innovative projects. 
          Connect with me!
        </p>

        {/* Education */}
        <div className="space-y-2 text-lg text-gray-800 dark:text-gray-200">
          <p><strong>🎓 Education:</strong> Master’s degree</p>
          <p><strong>📚 Major:</strong> Computer Science</p>
          <p><strong>🏫 University:</strong> CSULB</p>
          <p><strong>🎯 Expected Graduation:</strong> May 2025</p>
        </div>

        {/* Additional Info */}
        <div className="mt-6 space-y-2 text-lg text-gray-800 dark:text-gray-200">
          <p><strong>🚀 Open for Roles:</strong> Software Engineer, Internships, Co-op, New Grad Openings</p>
          <p><strong>📍 Location:</strong> United States (Flexible to relocate)</p>
          <p><strong>🛂 Visa Sponsorship required:</strong> Yes</p>
        </div>
      </div>
    </section>
  );
};
