import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row items-center bg-gray-200 max-w-6xl w-full rounded-lg shadow-lg overflow-hidden">
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to PayZap</h1>
          <p className="text-base md:text-lg text-gray-700 my-5">
            Experience seamless mock transactions, profile management, and secure authentication – just like a real wallet app.
          </p>
       <Link to="/signup"><button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started</button></Link>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 p-6">
          <img
            src="/HeroImage.jpg"
            alt="PayZap"
            className="rounded w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
