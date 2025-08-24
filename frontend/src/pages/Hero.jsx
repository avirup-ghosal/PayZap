import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div 
      className="flex items-center justify-center min-h-screen px-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #059669 0%, #0d9488 50%, #16a34a 100%)'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-32 -right-16 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-16 left-32 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 right-32 w-6 h-6 bg-white/15 rounded-full animate-bounce delay-300"></div>
      <div className="absolute top-1/2 left-10 w-3 h-3 bg-white/25 rounded-full animate-bounce delay-700"></div>

      <div className="relative flex flex-col lg:flex-row items-center backdrop-blur-lg bg-white/10 border border-white/20 max-w-7xl w-full rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.01] hover:shadow-3xl">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16 relative">
          {/* Decorative accent */}
          <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-30 animate-pulse"></div>
          
          <div className="relative z-10">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg"></div>
              </div>
              <span className="text-white font-bold text-xl tracking-wide">PayZap</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200 animate-pulse">
                PayZap
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-emerald-50 mb-8 leading-relaxed">
              Experience seamless mock transactions, profile management, and secure authentication – 
              <span className="font-semibold text-white"> just like a real wallet app.</span>
            </p>

            {/* Feature highlights */}
            <div className="space-y-3 mb-10">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-emerald-100">Secure Authentication</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-emerald-100">Instant Transactions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-emerald-100">Profile Management</span>
              </div>
            </div>

            <Link to="/signup">
              <button 
                type="button" 
                className="relative group bg-white text-emerald-600 font-bold text-lg px-8 py-4 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 overflow-hidden"
              >
                {/* Button shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <span className="relative flex items-center space-x-2">
                  <span>Get Started</span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 relative">
          {/* Image container with enhanced styling */}
          <div className="relative group">
            {/* Decorative frame */}
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 blur-sm"></div>
            
            <div className="relative backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-4 transform transition-all duration-300 group-hover:scale-[1.02]">
              <img
                src="/HeroImage.jpg"
                alt="PayZap App Interface"
                className="rounded-xl w-full h-auto object-contain shadow-lg transform transition-all duration-500 group-hover:scale-105"
              />
              
              {/* Image overlay effect */}
              <div className="absolute inset-4 rounded-xl bg-gradient-to-t from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Floating stats/badges */}
            <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm border border-emerald-200 rounded-xl p-3 shadow-lg transform transition-all duration-300 hover:scale-110">
              <div className="text-emerald-600 font-bold text-sm">100% Secure</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm border border-teal-200 rounded-xl p-3 shadow-lg transform transition-all duration-300 hover:scale-110">
              <div className="text-teal-600 font-bold text-sm">Lightning Fast</div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 rounded-b-3xl"></div>
      </div>
    </div>
  );
};

export default Hero;