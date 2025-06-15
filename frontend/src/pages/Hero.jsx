const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex justify-center bg-gray-200 h-[30em] w-full p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mt-4 mx-4">Welcome to PayZap</h1>
        <div className="mt-4 mx-4 ">
          <p className="text-lg">Experience seamless mock transactions, profile management, and secure authentication – just like a real wallet app.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;