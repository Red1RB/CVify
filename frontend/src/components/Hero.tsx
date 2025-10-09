import aiRobot from '../../assets/images/ai_robot_reviewing_resume.png';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="bg-gray-950 text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12">
      
      <div className="text-center md:text-left space-y-6 md:space-y-8 max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Get AI-Powered Feedback on Your CV
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Improve your chances of landing your dream job with our AI-driven CV analysis and personalized suggestions.
        </p>
        <div className='flex justify-center md:justify-start'>
            <button className="mt-6 px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
            Upload Your CV — Get Feedback
            </button>
        </div>
        

      </div>

      <div className="mt-10 md:mt-0 md:ml-10 flex justify-center md:justify">
        <div className="w-64 h-64 md:w-96 md:h-96 relative">
          <Image src={aiRobot} alt="AI Robot Illustration" className="object-contain rounded-xl" fill />
        </div>
      </div>
    </section>
  );
}